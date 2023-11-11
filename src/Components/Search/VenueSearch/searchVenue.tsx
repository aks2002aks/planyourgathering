import { motion } from "framer-motion";
import SearchForm from "./searchForm";
import SearchFormMobile from "./searchFormMobile";

enum BudgetType {
  PerPlate = "perPlate",
  PerDay = "perDay",
}

interface SearchVenueProps {
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

const Page: React.FC<SearchVenueProps> = ({
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
  return (
    <div className="bg-white flex flex-row justify-center">
      <div className="bg-[#F5F5F5] w-full ">
        <div className="relative ">
          <motion.img
            className="lg:h-[406px] md:h-[306px] sm:h-[306px] h-[256px]   object-cover absolute w-full "
            alt="Rectangle"
            src={"/search.jpg"}
          />

          <svg
            width="2400"
            height="485"
            viewBox="0 0 2142 485"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-full sm:top-14 lg:top-48 "
          >
            <path
              d="M1 1V484H2141V1C1264.39 245.303 796.394 241.968 1 1Z"
              fill="#F5F5F5"
              stroke="#F5F5F5"
            />
          </svg>

          <div className="hidden sm:flex justify-center items-center h-screen">
            <div className="flex justify-center lg:max-w-4xl md:max-w-2xl sm:max-w-md sm:mt-12 md:mt-0">
              <SearchForm
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
            </div>
          </div>
        </div>
        <div className="flex sm:hidden">
          <SearchFormMobile
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
        </div>
      </div>
    </div>
  );
};

export default Page;
