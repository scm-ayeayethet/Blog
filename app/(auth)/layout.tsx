import Link from "next/link";
import React, { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div>
      <div className="w-full h-[56px] bg-slate-400 text-white flex items-center px-16">
        <Link href="/">Logo</Link>
      </div>
      {children}
    </div>
  );
}
