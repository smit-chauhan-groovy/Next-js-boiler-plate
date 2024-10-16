"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const isAuthenticated = false; // Replace with your actual authentication logic

      if (!isAuthenticated) {
        router.push("/");
      }
    }, [router]);

    return <Component {...props} />;
  };

  AuthenticatedComponent.displayName = `withAuth(${
    Component.displayName || Component.name || "Component"
  })`;

  return AuthenticatedComponent;
};

export default withAuth;
