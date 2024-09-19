"use client";
import React from "react";
import styles from "./style";
import withAuth from "../Components/authComponent/index";

const demo = () => {
  const classes = styles();
  return <div className={classes.text}>demo</div>;
};

export default withAuth(demo);
