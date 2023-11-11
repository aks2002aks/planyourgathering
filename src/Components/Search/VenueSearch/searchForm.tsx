import React, { useEffect, useState } from "react";
import Select from "react-select";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface Country {
  name: string;
  code: string;
}

interface State {
  name: string;
  code: string;
}

interface City {
  name: string;
}

enum BudgetType {
  PerPlate = "perPlate",
  PerDay = "perDay",
}

interface SearchFormProps {
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  selectedState: string;
  setSelectedState: React.Dispatch<React.SetStateAction<string>>;
  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;
  selectedBudgetType: BudgetType;
  selectedBudget: [number, number];
  selectedGuestCount: [number, number];
  setSelectedBudgetType: React.Dispatch<React.SetStateAction<BudgetType>>;
  setSelectedBudget: React.Dispatch<React.SetStateAction<[number, number]>>;
  setSelectedGuestCount: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const SearchForm: React.FC<SearchFormProps> = ({
  selectedCountry,
  setSelectedCountry,
  selectedState,
  setSelectedState,
  selectedCity,
  setSelectedCity,
  selectedBudgetType,
  selectedBudget,
  selectedGuestCount,
  setSelectedBudgetType,
  setSelectedBudget,
  setSelectedGuestCount,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const [states, setStates] = useState<State[]>([]);

  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(countries);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetch(`https://countriesnow.space/api/v0.1/countries/states`, {
        body: JSON.stringify({ country: selectedCountry }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          const states = data.data.states.map((state: any) => ({
            name: state.name,
            code: state.state_code,
          }));
          setStates(states);
          console.log(states);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      fetch(`https://countriesnow.space/api/v0.1/countries/state/cities`, {
        body: JSON.stringify({
          country: selectedCountry,
          state: selectedState,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const cities = data.data.map((city: any) => ({
            name: city,
          }));

          setCities(cities);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedState, selectedCountry]);

  const handleCountryChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption.label);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (selectedOption: any) => {
    setSelectedState(selectedOption.label);
    setSelectedCity("");
  };

  const handleCityChange = (selectedOption: any) => {
    setSelectedCity(selectedOption.label);
  };

  const handleGuestCountChange = (GuestCount: number | number[]) => {
    if (Array.isArray(GuestCount)) {
      setSelectedGuestCount(GuestCount as [number, number]);
    }
  };

  const handleBudgetChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange)) {
      setSelectedBudget(newRange as [number, number]);
    }
  };

  const handleBudgetTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedBudgetType(event.target.value as BudgetType);
    if (event.target.value === BudgetType.PerPlate) {
      setSelectedBudget([0, 10000]);
    } else {
      setSelectedBudget([0, 1000000]);
    }
  };

  const countryOptions = [
    { value: "", label: "Select Country", isDisabled: true },
    ...countries.map((country) => ({
      value: country.code,
      label: country.name,
    })),
  ];

  const stateOptions = [
    { value: "", label: "Select State", isDisabled: true },
    ...states.map((state) => ({
      value: state.code,
      label: state.name,
    })),
  ];

  const cityOptions = [
    { value: "", label: "Select City", isDisabled: true },
    ...cities.map((city) => ({
      value: city.name,
      label: city.name,
    })),
  ];

  const renderBudgetRangeInputs = () => {
    if (selectedBudgetType === BudgetType.PerPlate) {
      return (
        <>
          <Slider
            range
            value={selectedBudget}
            onChange={handleBudgetChange}
            min={0}
            max={10000}
            step={100}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span>{selectedBudget[0]}</span>
            <span>{selectedBudget[1]}</span>
          </div>
        </>
      );
    } else {
      // BudgetType.PerDay

      return (
        <>
          <Slider
            range
            value={selectedBudget}
            onChange={handleBudgetChange}
            min={0}
            max={1000000}
            step={50000}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span>{selectedBudget[0]}</span>
            <span>{selectedBudget[1]}</span>
          </div>
        </>
      );
    }
  };

  return (
    <section className=" p-6 bg-white rounded-md shadow-2xl z-20 shadow-red-200">
      <form className="grid gap-8 mt-4 grid-cols-6">
        <div className="mb-4">
          <label className="text-gray-700" htmlFor="country">
            Country
          </label>
          <Select
            id="Country"
            instanceId="Country"
            value={{ value: selectedCountry, label: selectedCountry }}
            onChange={handleCountryChange}
            options={countryOptions}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700" htmlFor="state">
            State
          </label>
          <Select
            id="State"
            instanceId="State"
            value={{ value: selectedState, label: selectedState }}
            onChange={handleStateChange}
            options={stateOptions}
          />
        </div>

        <div className="mb-4">
          <label className="text-gray-700" htmlFor="city">
            City
          </label>
          <Select
            id="City"
            instanceId="City"
            value={{ value: selectedCity, label: selectedCity }}
            onChange={handleCityChange}
            options={cityOptions}
          />
        </div>

        <div className="mb-4 space-y-2">
          <label className="text-gray-700 " htmlFor="budgetType">
            Budget Type
          </label>
          <div className="flex flex-col space-y-2">
            <label>
              <input
                type="radio"
                name="budgetType"
                value={BudgetType.PerPlate}
                checked={selectedBudgetType === BudgetType.PerPlate}
                onChange={handleBudgetTypeChange}
                className="mr-2"
              />
              Per Plate
            </label>
            <label>
              <input
                type="radio"
                name="budgetType"
                value={BudgetType.PerDay}
                checked={selectedBudgetType === BudgetType.PerDay}
                onChange={handleBudgetTypeChange}
                className="mr-2"
              />
              Per Day
            </label>
          </div>
        </div>

        <div className="mb-4 flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="budget">
            Budget
          </label>
          {renderBudgetRangeInputs()}
        </div>

        <div className="mb-4 flex flex-col space-y-2">
          <label className="text-gray-700" htmlFor="guestCount">
            Guest Count
          </label>
          <Slider
            range
            value={selectedGuestCount}
            onChange={handleGuestCountChange}
            min={0}
            max={10000}
            step={500}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <span>{selectedGuestCount[0]}</span>
            <span>{selectedGuestCount[1]}</span>
          </div>
        </div>

        <div className="flex justify-center items-center col-span-2 sm:col-span-3">
          <button
            type="submit"
            className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
