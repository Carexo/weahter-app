import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <h2
      style={{
        margin: "0",
        position: "absolute",
        top: "0",
        zIndex: 100,
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      404 - Page Not Found
    </h2>
  );
};

export default Custom404;
