import { useAddToBookmarkMutation } from "@/redux/api/bookmarkApi";
import { IService } from "@/types";
import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 45,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

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
    <StyledBadge
      color={service?.type === "offline" ? "primary" : "warning"}
      className="px-4 lg:px-0"
      badgeContent={service?.type}
      max={1}
    >
      <div className="p-4 mb-10 lg:mb-0 items-center justify-center lg:w-[590px] rounded-xl group sm:flex space-x-6  bg-white bg-opacity-50 shadow-md border hover:border-[#4EAC95] mx-auto">
        <Image
          onClick={() => handleDetailsClick(service?.id)}
          width={100}
          height={100}
          className="mx-auto lg:w-4/12 h-40 w-full rounded-lg"
          alt="art cover"
          loading="lazy"
          src={service.thumbnail}
        />
        <div className="sm:w-8/12 pl-0 p-5 lg:pt-0 pt-6">
          <div className="space-y-2">
            <div className="space-y-4">
              <h4 className="text-md font-semibold text-black">
                {service.title}
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
            </div>
            <div className="flex items-center space-x-4 justify-between">
              <div className="text-grey-500 flex flex-row space-x-1  my-4">
                <p className="text-xs">{service?.location}</p>
              </div>
              <div className="flex flex-row space-x-1 justify-center gap-2">
                <div
                  title="add to bookmark"
                  onClick={() => handleAddToBookmark(service?.id)}
                  className="bg-[#4EAC95] shadow-lg text-black cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row"
                >
                  <BsFillBookmarkCheckFill />
                </div>

                <Button
                  title="book the service"
                  variant="outlined"
                  className="flex items-center gap-3   bg-[#F9A14A] hover:border text-black hover:bg-white hover:border-[#4EAC95]"
                >
                  Book
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledBadge>
  );
};

export default ServiceCard;
