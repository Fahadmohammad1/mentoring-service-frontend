import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";
import { Button } from "@mui/material";

const UploadImage = ({ setImageUrl }: any) => {
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files || !files[0]) return;

    const file = files[0];

    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      alert("You can only upload JPG/PNG files!");
      return;
    }

    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      alert("Image must be smaller than 2MB!");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            key: "17a1f31c430dd052479eea1b87a88985",
          },
        }
      );

      if (response.data.status === 200) {
        const imageURL = response.data.data.url;
        setLoading(false);
        setImageUrl(imageURL);
      } else {
        console.error("Image upload failed:", response.data.error);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="image-upload-input"
        type="file"
        onChange={handleFileChange}
      />

      <div className="flex justify-center items-center h-full gap-5">
        <div>
          <label htmlFor="image-upload-input">
            <Button
              variant="contained"
              className="bg-gray-400 text-black hover:bg-white hover:border hover:border-[#4EAC95]"
              component="span"
              startIcon={<CloudUploadIcon />}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload Image"}
            </Button>
          </label>
        </div>
      </div>
    </>
  );
};

export default UploadImage;
