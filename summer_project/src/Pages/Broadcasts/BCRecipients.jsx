import { useState } from "react";
import { Popover, PopoverTrigger, Button } from "@nextui-org/react";
import Select from "react-select";

const BCRecipients = () => {
  const [isMatchConOpen, setIsMatchConOpen] = useState(false); // Track if MatchCon is open
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option
  const [isEveryCustomerOpen, setIsEveryCustomerOpen] = useState(false);

  const levelOptions = [
    { value: "Silver", label: "Silver" },
    { value: "Gold", label: "Gold" },
    { value: "Platinum", label: "Platinum" },
    { value: "Diamond", label: "Diamond" },
  ];

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption ? selectedOption.value : null);
  };

  const handleSendByEmailClick = () => {
    setSelectedOption("email");
  };

  const handleSendByLevelClick = () => {
    setSelectedOption("level");
  };

  const handleEveryCustomerClick = () => {
    setIsMatchConOpen(false); // Close MatchCon when "Every customer" button is clicked
    setIsEveryCustomerOpen(isEveryCustomerOpen);
  };

  const handlePeopleMatchingConditionsClick = () => {
    setIsMatchConOpen(true); // Open MatchCon when "People matching conditions" button is clicked
     setIsEveryCustomerOpen(false);
  };

  return (
    <div>
      {/* Content */}
      <div className="mx-4 my-4">
        <div className="container mx-auto p-4 border border-gray-300 rounded-md">
          <h1 className="font-medium">
            Who should receive this newsletter?
          </h1>
          <div className="grid grid-cols-2 gap-2 my-4 items-center">
          <Popover
              isOpen={isMatchConOpen} // Use isMatchConOpen state to control the visibility of MatchCon
              onOpenChange={(open) => setIsMatchConOpen(open)}
            >
              <PopoverTrigger>
                <Button
                  className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium"
                  onClick={handlePeopleMatchingConditionsClick}
                >
                  People matching conditions
                </Button>
              </PopoverTrigger>
            </Popover>
            <Popover
              isOpen={isEveryCustomerOpen} // Use isEveryCustomerOpen state to control the visibility of Every customer popover
              onOpenChange={(open) => setIsEveryCustomerOpen(open)}
            >
              <PopoverTrigger>
                <Button
                  className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium"
                  onClick={handleEveryCustomerClick}
                >
                  Every customer
                </Button>
              </PopoverTrigger>
            </Popover>
          </div>
          {/* Show function */}
          {isMatchConOpen && ( // Render MatchCon only when isMatchConOpen is true
            <div id="MatchCon">
              <p className="text-xs italic">
                Use conditions to target the people who should receive this
                newsletter
              </p>
              <div className="flex-inline my-2">
                <button
                  onClick={handleSendByEmailClick}
                  className="border-2 font-medium rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white px-3 py-2 mx-3 my-2 text-sm"
                >
                  Send by Email
                </button>
                <button
                  onClick={handleSendByLevelClick}
                  className="border-2 font-medium rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white px-3 py-2 mx-3 my-2 text-sm"
                >
                  Send by level
                </button>
              </div>
              <div className="flex">
                {selectedOption === "email" && (
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Customer Email"
                    className="border border-gray-300 rounded-md p-2 my-3 w-1/4"
                  />
                )}
                {selectedOption === "level" && (
                  <Select
                    placeholder="Select Level"
                    options={levelOptions}
                    value={
                      levelOptions.find(
                        (option) => option.value === selectedOption
                      )
                    }
                    onChange={handleChange}
                    className="basic-multi-select ml-2 mt-2.5 w-max"
                  />
                )}
              </div>
            </div>
          )}
          <div className="mt-4">
            <h1 className="font-medium">Conditions blacklist</h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Add customer name"
              className="border border-gray-300 rounded-md p-2 my-3 w-1/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCRecipients;



// save this 