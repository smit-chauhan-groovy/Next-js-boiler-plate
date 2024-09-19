"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const withAuth = (Component) => {
  return (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = false;

      if (!isAuthenticated) {
        router.push("/");
      }
    }, [router]);

    return <Component {...props} />;
  };
};

export default withAuth;
