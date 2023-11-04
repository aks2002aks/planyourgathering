"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FirstSignup from "./first";
import SecondSignup from "./second";

const SignUp = () => {
  const [goBack, setGoBack] = useState(true);
  const [isVendorClicked, setIsVendorClicked] = useState(false);
  const [isCustomerClicked, setIsCustomerClicked] = useState(false);

  return (
    <div>
      {goBack ? (
        <FirstSignup
          isVendorClicked={isVendorClicked}
          setIsVendorClicked={setIsVendorClicked}
          setIsCustomerClicked={setIsCustomerClicked}
          isCustomerClicked={isCustomerClicked}
          setGoBack={setGoBack}
          goback={goBack}
        />
      ) : (
        <SecondSignup userType={isVendorClicked ? "Vendor" : "Customer"} setGoBack={setGoBack}
        goback={goBack} />
      )}
    </div>
  );
};

export default SignUp;
