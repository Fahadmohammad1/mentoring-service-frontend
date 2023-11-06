"use client";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { toggleBookmarkModal } from "@/redux/features/bookmark/bookmarkSlice";
import { useAppSelector } from "@/redux/hooks";
import { AiFillCloseSquare } from "react-icons/ai";
import {
  useAllBookmarkItemQuery,
  useDeleteBookmarkMutation,
} from "@/redux/api/bookmarkApi";
import Loading from "./Loading";
import { IBookmark } from "@/types";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

const BookmarkModal = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useAllBookmarkItemQuery({});
  const [deleteBookmark] = useDeleteBookmarkMutation();

  const theme = useTheme();
  const { open } = useAppSelector((state) => state.bookmark);
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    dispatch(toggleBookmarkModal());
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Saved Services"}</DialogTitle>
      {data?.map((service: IBookmark) => (
        <DialogContent
          key={service.id}
          className="lg:flex items-center gap-x-5"
        >
          <Image
            className="w-50"
            src={service.service.thumbnail}
            width={100}
            height={100}
            alt="thumbnail"
          />
          <DialogContentText className="flex justify-between w-full gap-x-5">
            <h6>{service.service.title}</h6>
            <MdDelete
              onClick={() => deleteBookmark(service.id)}
              className="text-xl text-red-500 cursor-pointer"
            />
          </DialogContentText>
        </DialogContent>
      ))}
      <DialogActions>
        <Button onClick={handleClose} autoFocus>
          <AiFillCloseSquare className="text-3xl text-[#F9A14A]" />
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookmarkModal;
