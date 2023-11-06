"use client";

import Loading from "@/components/ui/Loading";
import ServiceCard from "@/components/ui/ServiceCard";
import { useAllServiceQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import { IService } from "@/types";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const AllServices = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm: string = useDebounced({
    searchQuery: search,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["search"] = debouncedSearchTerm;
  }

  const { data, isLoading } = useAllServiceQuery({ ...query });

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;

    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearch("");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="mt-24 mb-10">
      <div>
        <div className="w-6/12 mx-auto">
          <input
            placeholder="ex: programming"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="border placeholder-gray-400 focus:outline-none
 focus:border-black w-full pt-3 pr-4 pb-3 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
          />
        </div>
        <div className="p-5">
          <p>Category</p>
        </div>
        <div className="lg:grid grid-cols-2 gap-x-5 gap-y-10">
          {data?.data?.map((service: IService) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
