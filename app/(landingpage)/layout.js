import { Typography } from "@mui/material";
import React from "react";
import "../globals.css";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Typography
        style={{
          fontSize: "40px !important",
          fontFamily: "var(--font-geist-sans)",
        }}
      >
        My tee time w
      </Typography>
      <main>{children}</main>
    </div>
  );
}
