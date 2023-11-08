"use client";

import DataTable from "@/components/ui/ServiceTable";
import Loading from "@/components/ui/Loading";
import { useMyServicesQuery } from "@/redux/api/serviceApi";
import ServiceTable from "@/components/ui/ServiceTable";

const MyServices = () => {
  const { data, isLoading } = useMyServicesQuery({});

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section>
      <h1 className="font-bold">All your services are here</h1>
      <ServiceTable data={data} />
    </section>
  );
};

export default MyServices;
