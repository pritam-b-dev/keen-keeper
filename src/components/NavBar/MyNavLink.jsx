"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyNavLink = ({ href, icon, children }) => {
  const pathname = usePathname();
  return (
    <div>
      <Link
        onClick={() => document.activeElement.blur()}
        href={href}
        className={`font-semibold btn btn-ghost ${pathname === href ? "bg-[#244D3F] text-white" : ""}`}
      >
        <span className="flex gap-1 justify-center items-center">
          {icon} {children}
        </span>
      </Link>
    </div>
  );
};

export default MyNavLink;
