"use client";

import React from "react";
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SecondSignup = () => {
  const userType = useSearchParams().get("user-type");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateFirstName = () => {
    if (firstName.length <= 0) {
      setFirstNameError("First name is required");
    } else {
      setFirstNameError("");
    }
  };

  const validateLastName = () => {
    if (lastName.length <= 0) {
      setLastNameError("Last name is required");
    } else {
      setLastNameError("");
    }
  };

  const validatePhoneNumber = () => {
    if (phoneNumber.length <= 0) {
      setPhoneNumberError("Phone number is required");
    } else if (!/^\+\d{2}\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Invalid phone number format");
    } else {
      setPhoneNumberError("");
    }
  };

  const validateEmail = () => {
    if (email.length <= 0) {
      setEmailError("Email address is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address format");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.length <= 0) {
      setPasswordError("Password is required");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        password
      )
    ) {
      setPasswordError(
        "Password must contain at least one uppercase letter, one lowercase letter, and one special character"
      );
    } else {
      setPasswordError("");
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.length <= 0) {
      setConfirmPasswordError("Confirm password is required");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateFirstName();
    validateLastName();
    validatePhoneNumber();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
    // If all fields are valid, submit the form
    if (
      firstNameError.length > 0 &&
      lastNameError.length > 0 &&
      phoneNumberError.length > 0 &&
      emailError.length > 0 &&
      passwordError.length > 0 &&
      confirmPasswordError.length > 0
    ) {
      console.log(
        JSON.stringify({
          userType,
          firstName,
          lastName,
          phoneNumber,
          email,
          password,
          confirmPassword,
        })
      );
    }
  };

  return (
    <div>
      <section className="bg-white ">
        <div className="flex justify-center min-h-screen flex-col lg:flex-row">
          <motion.div
            className="flex bg-cover  lg:w-2/5 z-1 h-[40vh] md:h-[50vh] lg:h-screen"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/pw/ADCreHcXQ2o7yD5eArSi2veeASKpwuNjWlAFnUViS8BiEpgdmJeJ12rKpU8jYCQvr36PJ9NwORQiELHmxI2Lt5vsVzpkoblKXsTLqxSRjp2RkBrjA9iw5Q94Pv0Ssr67CgKEH7pvdfRpD_keUbv0ru0ODY0AZw=w1808-h1205-s-no-gm?authuser=0')",
              backgroundPosition: "50% 50%",
              backgroundSize: "cover",
            }}
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          ></motion.div>

          <div className="flex items-center w-full  p-8 mx-auto lg:px-12 lg:w-3/5 bg-white z-10">
            <div className="w-full">
              <motion.div
                className="flex items-start  pt-2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  className="rounded-full bg-gray-200 p-2 mr-4"
                  href={"/user/signup/first"}
                >
                  <FiArrowLeft size={24} />
                </Link>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={60}
                  height={60}
                  className="mr-4"
                />
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize pt-2">
                  PLAN YOUR GATHERING
                </h1>
              </motion.div>

              <p className="mt-4 text-gray-500 ">
                Let’s get you all set up so you can verify your personal account
                and begin setting up your profile.
              </p>

              <div className="mt-6">
                <h1 className="text-gray-500 font-bold">
                  Creating account for - {userType}
                </h1>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    First Name
                  </label>

                  <input
                    name="firstName"
                    type="text"
                    placeholder="John"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    onBlur={validateFirstName}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      firstNameError ? "border-red-500" : "border-gray-200"
                    } rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                  {firstNameError && (
                    <p className="mt-2 text-sm text-red-500">
                      {firstNameError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Last name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Snow"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    onBlur={validateLastName}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      lastNameError ? "border-red-500" : "border-gray-200"
                    } rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                  {lastNameError && (
                    <p className="mt-2 text-sm text-red-500">{lastNameError}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Phone number
                  </label>
                  <input
                    name="phoneNumber"
                    type="text"
                    placeholder="+91-XX-XXXX-XXXX"
                    value={phoneNumber}
                    onChange={(event) => setPhoneNumber(event.target.value)}
                    onBlur={validatePhoneNumber}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      phoneNumberError ? "border-red-500" : "border-gray-200"
                    } rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                  {phoneNumberError && (
                    <p className="mt-2 text-sm text-red-500">
                      {phoneNumberError}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Email address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="johnsnow@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onBlur={validateEmail}
                    className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                      emailError ? "border-red-500" : "border-gray-200"
                    } rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                  {emailError && (
                    <p className="mt-2 text-sm text-red-500">{emailError}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      onBlur={validatePassword}
                      className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                        passwordError ? "border-red-500" : "border-gray-200"
                      } rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                    >
                      {showPassword ? (
                        <FiEyeOff size={20} />
                      ) : (
                        <FiEye size={20} />
                      )}
                    </button>
                  </div>
                  {passwordError && (
                    <p className="mt-2 text-sm text-red-500">{passwordError}</p>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 ">
                    Confirm password
                  </label>
                  <div className="relative">
                    <input
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={confirmPassword}
                      onChange={(event) =>
                        setConfirmPassword(event.target.value)
                      }
                      onBlur={validateConfirmPassword}
                      className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                        confirmPasswordError
                          ? "border-red-500"
                          : "border-gray-200"
                      } rounded-lg  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none"
                    >
                      {showPassword ? (
                        <FiEyeOff size={20} />
                      ) : (
                        <FiEye size={20} />
                      )}
                    </button>
                  </div>
                  {confirmPasswordError && (
                    <p className="mt-2 text-sm text-red-500">
                      {confirmPasswordError}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-center col-span-1 md:col-span-2">
                  <button className="flex items-center px-6 py-3 text-sm tracking-wide capitalize transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50">
                    <span>Sign Up </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 rtl:-scale-x-100"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecondSignup;
