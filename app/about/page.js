"use client";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import authActions from "../redux/reducers/auth/actions";

const About = () => {
  const router = useRouter();
  const { setAccessToken } = authActions;

  const { accessToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

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
