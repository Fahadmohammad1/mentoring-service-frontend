"use client";

import DataTable from "@/components/ui/DataTable";
import Loading from "@/components/ui/Loading";
import { useMyServicesQuery } from "@/redux/api/serviceApi";

const MyServices = () => {
  const { data, isLoading } = useMyServicesQuery({});
  console.log(data);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <h1 className="font-bold">All your services are here</h1>
      <DataTable />
    </section>
  );
};

export default MyServices;
