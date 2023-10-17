"use client";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useMyProfileQuery } from "@/redux/api/profileApi";
import Loading from "@/components/ui/Loading";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ProfilePage = () => {
  const { data, isLoading } = useMyProfileQuery({});
  const router = useRouter();

  useEffect(() => {
    if (!data) {
      router.push("/");
    }
  }, [data, router]);

  if (isLoading) {
    return <Loading />;
  }

  const role = "student";

  // user data
  const firstName = data?.firstName;
  const middleName = data?.middleName;
  const lastName = data?.lastName;
  const email = data?.email;

  // profile data
  const avatar = data?.Profile[0];
  const fullName = data?.Profile[0];
  const degree = data?.Profile[0];
  const studentClass = data?.Profile[0];
  const contactNo = data?.Profile[0];
  const designation = data?.Profile[0];
  const gender = data?.Profile[0];
  const institutionName = data?.Profile[0];
  const occupation = data?.Profile[0];
  const presentAddress = data?.Profile[0];
  const subjectOfExpertise = data?.Profile[0];

  return (
    <section className="h-full lg:flex gap-5">
      <Card sx={{ maxWidth: 290 }} className="rounded-lg lg:mb-0 mb-7 border">
        <CardMedia
          component="img"
          height="180"
          className="p-10 pb-0"
          image="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
          alt="profile"
        />

        <CardContent>
          {fullName ? (
            <h3 className="text-[#151D34] text-xl font-bold text-center">
              {fullName}
            </h3>
          ) : (
            <h3 className="text-[#151D34] text-xl font-bold text-center">
              Not set
            </h3>
          )}
          {presentAddress ? (
            <p className="text-center text-xs font-semibold mt-1">
              {presentAddress}
            </p>
          ) : (
            <p className="text-center text-xs font-semibold mt-1">Not set</p>
          )}
          <div className="w-full flex justify-center mt-5">
            <Button
              className="rounded-full py-1 hover:bg-white text-black border bg-[#00DFBF]"
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
            >
              {" "}
              Upload
              <VisuallyHiddenInput type="file" />
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card
        sx={{ minWidth: 290, maxWidth: 750 }}
        className="rounded-lg w-full border"
      >
        <h3 className="font-bold text-center py-1">Profile Information</h3>
        <div className="lg:grid grid-cols-2 gap-2 p-5">
          {firstName && (
            <div className="">
              <span className="text-xs">First Name</span>
              {firstName ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{firstName}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {middleName && (
            <div className="">
              <span className="text-xs">Middle Name</span>
              {middleName ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{middleName}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {lastName && (
            <div className="">
              <span className="text-xs">Last Name</span>
              {lastName ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{lastName}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{lastName}</p>
                </Card>
              )}
            </div>
          )}
          {email && (
            <div className="">
              <span className="text-xs">Email</span>
              {email ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{email}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {contactNo && (
            <div className="">
              <span className="text-xs">Contact</span>
              {contactNo ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{contactNo}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {gender && (
            <div className="">
              <span className="text-xs">Gender</span>
              {gender ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{gender}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-7 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {studentClass && (
            <div className="">
              <span className="text-xs">Class</span>
              {studentClass ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{studentClass}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {degree && (
            <div className="">
              <span className="text-xs">Degree</span>
              {degree ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{degree}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {occupation && (
            <div className="">
              <span className="text-xs">Degree</span>
              {occupation ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{occupation}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {occupation && (
            <div className="">
              <span className="text-xs">Degree</span>
              {occupation ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{occupation}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {designation && (
            <div className="">
              <span className="text-xs">Degree</span>
              {designation ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{designation}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {institutionName && (
            <div className="">
              <span className="text-xs">Institution</span>
              {institutionName ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">{institutionName}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
        </div>
      </Card>
    </section>
  );
};

export default ProfilePage;
