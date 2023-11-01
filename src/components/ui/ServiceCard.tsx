import { useAddToBookmarkMutation } from "@/redux/api/bookmarkApi";
import { IService } from "@/types";
import { Badge, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

const ServiceCard = ({ service }: { service: IService }) => {
  const router = useRouter();
  const [addToSaveLater] = useAddToBookmarkMutation();

  const handleAddToBookmark = async (serviceId: string) => {
    const res = await addToSaveLater({ serviceId, quantity: 1 }).unwrap();
    if (res?.id) {
      toast.success("Saved");
    }
  };

  const handleDetailsClick = (id: string) => {
    router.push(`/services/${id}`);
  };

  return (
    <Badge
      color={service?.serviceType === "remote" ? "warning" : "primary"}
      badgeContent={service?.serviceType === "remote" ? "online" : "offline"}
      max={1}
    >
      <div className="p-4 items-center justify-center lg:w-[600px] rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-2xl border hover:border-black mx-auto">
        <Image
          onClick={() => handleDetailsClick(service?.id)}
          width={100}
          height={100}
          className="mx-auto w-4/12 h-40 rounded-lg"
          alt="art cover"
          loading="lazy"
          src={service.thumbnail}
        />
        <div className="sm:w-8/12 pl-0 p-5">
          <div className="space-y-2">
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-cyan-900 text-justify">
                {service.name}
              </h4>
            </div>
            <div className="flex items-center space-x-4 justify-between">
              <div className="flex gap-3 space-y-1">
                <Image
                  height={40}
                  width={40}
                  src={service.authorImage}
                  className="rounded-full"
                  alt="avatar"
                />
                <span className="text-sm">{service.authorName}</span>
              </div>
              <div className="px-3 py-1 rounded-lg flex space-x-2 flex-row">
                <div className="cursor-pointer text-center text-md justify-center items-center flex">
                  <span className="text-md mx-1">{service?.duration}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-between">
              <div className="text-grey-500 flex flex-row space-x-1  my-4">
                <p className="text-xs">{service?.location}</p>
              </div>
              <div className="flex flex-row space-x-1 justify-center gap-2">
                <div
                  onClick={() => handleAddToBookmark(service?.id)}
                  className="bg-green-500 shadow-lg shadow- shadow-green-600 text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row"
                >
                  <BsFillBookmarkCheckFill />
                </div>

                <Button
                  variant="outlined"
                  className="flex items-center gap-3  bg-white hover:border-1 hover:text-black hover:border-[#00DFBF]"
                >
                  Book
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Badge>
  );
};

export default ServiceCard;
