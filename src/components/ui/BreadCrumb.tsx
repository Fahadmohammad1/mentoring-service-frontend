import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";

const BreadCrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/profile"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Profile
        </Link>
        {...items.map((item, i) => (
          <Link
            key={i}
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href={item.link}
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            {item.label}
          </Link>
        ))}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCrumb;
