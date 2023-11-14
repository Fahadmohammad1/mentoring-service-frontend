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
import { useAppSelector } from "@/redux/hooks";
import ButtonGroup from "@mui/material/ButtonGroup";

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
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!user.email) {
      router.push("/");
    }
  }, [user, router]);

  if (isLoading) {
    return <Loading />;
  }

  // user data
  const firstName = data?.firstName;
  const middleName = data?.middleName;
  const lastName = data?.lastName;
  const email = data?.email;

  // profile data
  const profileData = data?.Profile[0] || {};

  const fullName = profileData.fullName
    ? profileData.fullName.toString()
    : null;
  const presentAddress = profileData.presentAddress
    ? profileData.presentAddress.toString()
    : null;
  const contactNo = profileData.contactNo
    ? profileData.contactNo.toString()
    : null;
  const avatar = profileData.avatar ? profileData.avatar.toString() : null;
  const degree = profileData.degree ? profileData.degree.toString() : null;
  const classStandard = profileData.standard
    ? profileData.standard.toString()
    : null;
  const designation = profileData.designation
    ? profileData.designation.toString()
    : null;
  const gender = profileData.gender ? profileData.gender.toString() : null;
  const institutionName = profileData.institution
    ? profileData.institution.toString()
    : null;
  const occupation = profileData.occupation
    ? profileData.occupation.toString()
    : null;
  const educationalStatus = profileData.educationalStatus
    ? profileData.educationalStatus.toString()
    : null;
  const topicOfExpertise = profileData.topicOfExpertise
    ? profileData.topicOfExpertise.toString()
    : null;

  return (
    <section className="h-fit lg:flex gap-5 mb-10">
      <Card
        sx={{ maxWidth: 290 }}
        className="rounded-lg lg:mb-0 mb-7 border border-[#F9A14A]"
      >
        <CardMedia
          component="img"
          height="180"
          className="p-10 pb-0 rounded-full"
          image={
            avatar
              ? avatar
              : "https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
          }
          alt="profile"
        />

        <CardContent>
          {fullName ? (
            <h3 className="text-[#F9A14A] text-xl font-bold text-center">
              {fullName}
            </h3>
          ) : (
            <h3 className="text-[#F9A14A] text-xl font-bold text-center">
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
              className="rounded-full py-1 hover:bg-white text-black hover:border  bg-gray-400 hover:border-[#4EAC95]"
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
        className="rounded-lg w-full border border-[#F9A14A]"
      >
        <h3 className="font-bold text-center py-1 text-[#F9A14A]">
          Profile Information
        </h3>
        <div className="lg:grid grid-cols-2 gap-1 p-5">
          {firstName && (
            <div>
              <span className="text-xs lg:ml-[30px]">First Name</span>
              {firstName ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border mx-auto"
                >
                  <p className="text-center py-1">{firstName}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {middleName && (
            <div className="">
              <span className="text-xs lg:ml-[30px]">Middle Name</span>
              {middleName ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{middleName}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {lastName && (
            <div className="">
              <span className="text-xs lg:ml-[30px]">Last Name</span>
              {lastName ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{lastName}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{lastName}</p>
                </Card>
              )}
            </div>
          )}
          {email && (
            <div className="">
              <span className="text-xs lg:ml-[30px]">Email</span>
              {email ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{email}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {contactNo && (
            <div className="">
              <span className="text-xs lg:ml-[30px]">Contact</span>
              {contactNo ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{contactNo}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {gender && (
            <div className="">
              <span className="text-xs  lg:ml-[30px]">Gender</span>
              {gender ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{gender}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-7 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {classStandard && (
            <div className="">
              <span className="text-xs  lg:ml-[30px]">Class</span>
              {classStandard ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{classStandard}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {degree && (
            <div className="">
              <span className="text-xs  lg:ml-[30px]">Degree</span>
              {degree ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{degree}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {occupation && (
            <div className="">
              <span className="text-xs  lg:ml-[30px]">Occupation</span>
              {occupation ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{occupation}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {designation && (
            <div className="">
              <span className="text-xs  lg:ml-[30px]">Designation</span>
              {designation ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{designation}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {institutionName && (
            <div className="">
              <span className="text-xs  lg:ml-[30px]">Institution</span>
              {institutionName ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{institutionName}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {educationalStatus && (
            <div className="">
              <span className="text-xs  lg:ml-[30px]">Educational Status</span>
              {educationalStatus ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{educationalStatus}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
          {topicOfExpertise && (
            <div className="">
              <span className="text-xs  lg:ml-[30px]">Topic of Expertise</span>
              {topicOfExpertise ? (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">{topicOfExpertise}</p>
                </Card>
              ) : (
                <Card
                  sx={{ maxWidth: 290 }}
                  className="rounded-lg w-full mb-4 border  mx-auto"
                >
                  <p className="text-center py-1">Not set</p>
                </Card>
              )}
            </div>
          )}
        </div>
        {!profileData?.id && (
          <div>
            <h5 className="text-[#F9A14A] text-center my-3 font-semibold">
              Create profile as
            </h5>
            <div className="w-full flex justify-center items-end">
              <ButtonGroup
                variant="contained"
                aria-label="outlined button group"
              >
                <Button
                  onClick={() => router.push("/profile/createStudent")}
                  className="text-black hover:bg-[#F9A14A]"
                >
                  Student
                </Button>

                <Button
                  onClick={() => router.push("/profile/createTeacher")}
                  className="text-black hover:bg-[#F9A14A]"
                >
                  Teacher
                </Button>
              </ButtonGroup>
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};

export default ProfilePage;
