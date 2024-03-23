"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import DropdownDownMenuName from "@/utils/links";

import { useState } from "react";

const Filter = () => {
  //   const [bookmarksChecked, setBookmarksChecked] = useState(true);
  //   const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className=" h-[3rem] dark:bg-black rounded-md px-7 w-[13rem] dark:h-[3rem]  bg-white flex items-center outline-none drop-shadow-md">
        <p className="mr-4">Filter by Region</p>
        <IoIosArrowDown />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.RadioGroup
            value={person}
            onValueChange={setPerson}
            className="bg-white rounded-md mt-1 dark:bg-black"
          >
            {/* <DropdownMenu.RadioItem value="Africa">
              <DropdownMenu.ItemIndicator>@</DropdownMenu.ItemIndicator>
              {"Africa"}
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem value="colm">
              <DropdownMenu.ItemIndicator>@</DropdownMenu.ItemIndicator>
              America
            </DropdownMenu.RadioItem> */}

            {DropdownDownMenuName.map((item) => {
              return (
                <DropdownMenu.RadioItem
                  key={item.name}
                  className="flex h-[3rem] items-center w-[13rem]  cursor-pointer "
                  value={item.name}
                >
                  <DropdownMenu.ItemIndicator className="absolute left-[7px]">
                    {item.indicator}
                  </DropdownMenu.ItemIndicator>
                  <span className="ml-7"> {item.name}</span>
                </DropdownMenu.RadioItem>
              );
            })}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Filter;
