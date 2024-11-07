"use client";

import { useDeleteServiceMutation } from "@/redux/api/serviceApi";
import { IService } from "@/types";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import ServiceEditDialog from "./ServiceEditDialog";

export default function ServiceTable({ data }: { data: IService[] }) {
  const [deleteService] = useDeleteServiceMutation();

  const [open, setOpen] = useState(false);

  const handleClickOpen = (id: string) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteService = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteService(id);

        //@ts-ignore
        if (res?.data?.id) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Failed!",
            text: "Something went wrong.",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen flex justify-center font-sans overflow-hidden overflow-x-auto">
        <div className="w-full">
          <div className="bg-white shadow-md rounded my-6 overflow-x-auto">
            <table className="min-w-max w-full table-auto overflow-x-auto">
              <thead>
                <tr className="bg-[#F9A14A] text-black uppercase text-xs sm:text-sm">
                  {data.length &&
                    Object.keys(data[0])
                      .filter(
                        (key) =>
                          ![
                            "id",
                            "description",
                            "Booking",
                            "Bookmark",
                            "Reviews",
                            "language",
                            "user",
                            "userId",
                            "thumbnail",
                            "authorEmail",
                            "authorImage",
                            "authorName",
                            "createdAt",
                            "badge",
                            "updatedAt",
                          ].includes(key)
                      )
                      .map((key) => (
                        <th key={key} className="py-3 px-6 text-left">
                          {key}
                        </th>
                      ))}
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-xs sm:text-sm">
                {data?.map((service: IService) => (
                  <tr
                    key={service.id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {Object?.entries(service).map(
                      ([key, value]) =>
                        ![
                          "id",
                          "description",
                          "Booking",
                          "Bookmark",
                          "Reviews",
                          "language",
                          "user",
                          "userId",
                          "thumbnail",
                          "authorEmail",
                          "authorImage",
                          "authorName",
                          "badge",
                          "createdAt",
                          "updatedAt",
                        ].includes(key) && (
                          <td
                            key={key}
                            className="py-3 px-6 text-left whitespace-nowrap"
                          >
                            <div className="flex items-center">
                              <div className=""></div>
                              <span className="font-medium text-left w-full">
                                {value}
                              </span>
                            </div>
                          </td>
                        )
                    )}

                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <AiFillEdit
                            onClick={() => handleClickOpen(service.id)}
                            className="text-lg text-[#4EAC95] cursor-pointer"
                          />
                          <ServiceEditDialog
                            handleClose={handleClose}
                            open={open}
                          />
                        </div>
                        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                          <MdDelete
                            onClick={() => handleDeleteService(service.id)}
                            className="text-lg text-red-500 cursor-pointer"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
