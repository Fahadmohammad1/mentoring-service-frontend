import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Image from "next/image";
import tutorial from "../../assets/tutorial.png";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const TopCategories = () => {
  return (
    <section className="h-screen">
      <h1 className="text-3xl text-center text-black font-bold mb-10 mt-7">
        Top Categories to learn
      </h1>
      <div className="flex items-center gap-5">
        <div>
          <Image src={tutorial} width={450} height={400} alt="tutorial" />
        </div>
        <div className="border">
          <div>
            <Card className="" sx={{ minWidth: 275 }}>
              <CardContent className="">
                <h1>Programming</h1>
              </CardContent>
            </Card>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
