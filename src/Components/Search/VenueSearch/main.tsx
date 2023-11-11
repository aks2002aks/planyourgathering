"use client";

import React, { useEffect, useState } from "react";
import SearchVenue from "./searchVenue";

enum BudgetType {
  PerPlate = "perPlate",
  PerDay = "perDay",
}
const Page = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedBudgetType, setSelectedBudgetType] = useState<BudgetType>(
    BudgetType.PerPlate
  );
  const [selectedBudget, setSelectedBudget] = useState<[number, number]>([
    0, 10000,
  ]);
  const [selectedGuestCount, setSelectedGuestCount] = useState<
    [number, number]
  >([0, 1000]);

  useEffect(() => {
    const handleGetCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          const data = await response.json();
          setSelectedCountry(data.countryName);
          setSelectedState(data.principalSubdivision);
          setSelectedCity(data.locality);
          console.log({ selectedCountry, selectedState, selectedCity });
        },
        (error) => {
          console.error(error);
        }
      );
    };

    handleGetCurrentLocation();
  }, [selectedCity, selectedCountry, selectedState]);

  return (
    <>
      <div>
        <SearchVenue
          selectedCity={selectedCity}
          selectedState={selectedState}
          selectedCountry={selectedCountry}
          selectedBudgetType={selectedBudgetType}
          selectedBudget={selectedBudget}
          selectedGuestCount={selectedGuestCount}
          setSelectedCountry={setSelectedCountry}
          setSelectedState={setSelectedState}
          setSelectedCity={setSelectedCity}
          setSelectedBudgetType={setSelectedBudgetType}
          setSelectedBudget={setSelectedBudget}
          setSelectedGuestCount={setSelectedGuestCount}
        />
        helolo world
      </div>
    </>
  );
};

export default Page;
