import { useState, useEffect } from "react";
import { Popover, PopoverTrigger, Button } from "@nextui-org/react";
import Select from "react-select";

const BCRecipients = ({ setRecipientTitle, selectedLevel, setSelectedLevel, email ,setTag, tag , setEmail, blacklist, setBlacklist }) => {
  const [isMatchConOpen, setIsMatchConOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(email ? "email" : selectedLevel ? "level" : null);
  const [isEveryCustomerOpen, setIsEveryCustomerOpen] = useState(false);

  const levelOptions = [
    { value: "Silver", label: "Silver" },
    { value: "Gold", label: "Gold" },
    { value: "Platinum", label: "Platinum" },
    { value: "Diamond", label: "Diamond" },
  ];

  useEffect(() => {
    if (selectedOption === "level" && selectedLevel) {
      console.log(`Selected option: Level: ${selectedLevel.value}`);
    } else if (selectedOption) {
      console.log(`Selected option: ${selectedOption}`);
    }
  }, [selectedOption, selectedLevel]);

  const handleChange = (option) => {
    setSelectedLevel(option);
    if (option) {
      setRecipientTitle(`Send by Level: ${option.value}`);
      setSelectedOption("level");
    }
  };

  const handleSendByEmailClick = () => {
    setSelectedOption("email");
    setRecipientTitle("Send by Email");
    setSelectedLevel(null); // Clear the level if sending by email
  };

  const handleSendByLevelClick = () => {
    setSelectedOption("level");
    setRecipientTitle("Send by Level");
    setEmail(""); // Clear the email input
  };

  const handleEveryCustomerClick = () => {
    setIsMatchConOpen(false);
    setIsEveryCustomerOpen(true);
    setRecipientTitle("Every Customer");
    setSelectedOption(null);
    setSelectedLevel(null); // Clear the level if every customer
    setEmail(""); // Clear the email input
  };

  const handlePeopleMatchingConditionsClick = () => {
    setIsMatchConOpen(true);
    setIsEveryCustomerOpen(false);
    setRecipientTitle("People Matching Conditions");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setTimeout(() => {
      console.log("Customer Email:", e.target.value);
    }, 3000);
  };

  const handleBlacklistChange = (e) => {
    setBlacklist(e.target.value);
    setTimeout(() => {
      console.log("Conditions blacklist:", e.target.value);
    }, 3000);
  };
  const handleTag = (e) => {
    setTag(e.target.value);
    setTimeout(() => {
      console.log("Tag:", e.target.value);
    }, 3000);
  };

  return (
    <div>
      {/* Content */}
      <div className="mx-4 my-4">
        <div className="container mx-auto p-4 border border-gray-300 rounded-md">
          <h1 className="font-medium">Who should receive this newsletter?</h1>
          <div className="grid grid-cols-2 gap-2 my-4 items-center">
            <Popover isOpen={isMatchConOpen} onOpenChange={(open) => setIsMatchConOpen(open)}>
              <PopoverTrigger>
                <Button
                  className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium"
                  onClick={handlePeopleMatchingConditionsClick}
                >
                  People matching conditions
                </Button>
              </PopoverTrigger>
            </Popover>
            <Popover isOpen={isEveryCustomerOpen} onOpenChange={(open) => setIsEveryCustomerOpen(open)}>
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
          {isMatchConOpen && (
            <div id="MatchCon">
              <p className="text-xs italic">
                Use conditions to target the people who should receive this newsletter
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
                  Send by Level
                </button>
              </div>
              <div className="flex">
                {(selectedOption === "email" || email) && (
                  <input
                    type="email"
                    placeholder="Customer Email"
                    value={email}
                    onChange={handleEmailChange}
                    className="border border-gray-300 rounded-md p-2 my-3 w-1/4"
                  />
                )}
                {(selectedOption === "level" || selectedLevel) && (
                  <Select
                    // isMulti
                    placeholder="Select Level"
                    options={levelOptions}
                    value={selectedLevel}
                    onChange={handleChange}
                    className="basic-multi-select ml-2 mt-2.5 max-w-64 w-full"
                  />
                )}
              </div>
            </div>
          )}
            <div className="mt-4">
              <h1 className="font-medium">Conditions blacklist</h1>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Add customer name"
                  value={blacklist}
                  onChange={handleBlacklistChange}
                  className="border border-gray-300 rounded-md p-2 my-3 w-1/4"
                />
                <input type="text" 
                  placeholder="Input tags"
                  value={tag}
                  onChange={handleTag}
                  className="border border-gray-300 rounded-md p-2 my-3 w-1/6 ml-4"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BCRecipients;
