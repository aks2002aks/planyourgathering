"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/user/signup/first");
  }, [router]);

  return null;
};

export default SignUp;
