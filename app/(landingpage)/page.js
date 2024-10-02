"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "../store";
import { setAccessToken } from "../store/authSlice";

const LandingPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setAccessToken("smit"));
    console.log("hello");
  }, []);

  return (
    <div
      style={{
        fontFamily: "var(--ralway-bold)",
      }}
    >
      Landing page w
    </div>
  );
};

export default LandingPage;
