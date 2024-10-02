import { Typography } from "@mui/material";
import React from "react";
import "../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Typography
        variant="title"
        style={{
          fontSize: "40px !important",
        }}
      >
        My tee time w
      </Typography>
      <main>{children}</main>
    </div>
  );
}
