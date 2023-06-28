"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { runFireworks } from "../lib/fireworks";
import Cookie from "js-cookie";

const Success = () => {
  useEffect(() => {
    const removeCookie = () => {
      Cookie.remove("user_id", { path: "" });
    };
    localStorage.clear();
    runFireworks();
    removeCookie();
  });
  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>

        <Link href="/">
          <button type="button" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
