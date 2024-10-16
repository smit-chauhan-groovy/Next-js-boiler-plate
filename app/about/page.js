"use client";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <Typography variant="h1">About</Typography>
      <Button
        onClick={() => {
          const queryParams = new URLSearchParams({
            id: "123",
            name: "John Doe",
          });
          router.push(`/demo?${queryParams.toString()}`);
        }}
      >
        Click
      </Button>
    </div>
  );
};

export default About;
