import { Card, CardContent } from "@mui/material";
import React from "react";

type Overview = {
  title: string;
  icon: any;
  description: string;
};

const OverviewCard = ({ overview }: { overview: Overview }) => {
  return (
    <Card className="shadow-none mx-auto" sx={{ minWidth: 270, maxWidth: 320 }}>
      <CardContent className="flex flex-col items-center gap-y-3">
        <span className="text-9xl">{overview.icon}</span>
        <h3 className="font-bold text-lg text-[#F9A14A]">{overview.title}</h3>
        <p className="text-justify">{overview.description}</p>
      </CardContent>
    </Card>
  );
};

export default OverviewCard;
