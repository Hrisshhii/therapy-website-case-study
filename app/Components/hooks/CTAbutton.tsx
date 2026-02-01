"use client";

import { useRouter } from "next/navigation";

type CTAButtonProps={
  children: React.ReactNode;
  className?:string;
};

export default function CTAButton({children,className=""}:CTAButtonProps){
  const router=useRouter();
  return (
    <button onClick={()=>router.push("/contact")} className={className}>{children}</button>
  );
}