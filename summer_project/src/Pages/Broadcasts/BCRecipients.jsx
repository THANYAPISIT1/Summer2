import React from "react";
import {Popover, PopoverTrigger, Button} from "@nextui-org/react";

const BCRecipients = () => {



    const [isOpen, setIsOpen] = React.useState(false);

    

return (
        <div>   
            {/* Content */}
            <div className="mx-4 my-4">
                <div className="container mx-auto p-4 border border-gray-300 rounded-md">
                    <h1 className="font-medium">Who should receive this newsletter?</h1>
                    <div className="grid grid-cols-2 gap-2 my-4 items-center">
                        <Popover isOpen={isOpen} onOpenChange={(open) => setIsOpen(open)}>
                            <PopoverTrigger>
                                <Button className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium">
                                    People matching conditions
                                </Button>
                            </PopoverTrigger>
                        </Popover>
                        <Popover>
                            <PopoverTrigger>
                                <Button className="border p-2 hover:text-[#2C6F84] hover:border-[#2C6F84] font-medium">
                                    Every customer
                                </Button>
                            </PopoverTrigger>
                        </Popover>
                    </div>
                    {/* Show function */}
                    <div id="MatchCon" style={{ display: isOpen ? 'block' : 'none' }}>
                        <p className="text-xs italic">Use conditions to target the people who should receive this newsletter</p>
                        <div className="flex-inline my-2">
                            <button className="border-2 font-medium rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white px-3 py-2 mx-3 my-2 text-sm">Send by Email</button>
                            <button className="border-2 font-medium rounded-md bg-gray-200 hover:bg-gray-400 hover:text-white px-3 py-2 mx-3 my-2 text-sm">Send by level</button>
                        </div>
                        <div>
                            <input type="email" name="" id="" placeholder="Customer Email" className="border border-gray-300 rounded-md p-2 my-3 w-1/4" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1 className="font-medium">
                            Conditions blacklist
                        </h1>
                        <input type="text" name="" id="" placeholder="Add customer name" className="border border-gray-300 rounded-md p-2 my-3 w-1/4" />
                    </div>
                </div>
            </div>
        </div>
    );  
};

export default BCRecipients;