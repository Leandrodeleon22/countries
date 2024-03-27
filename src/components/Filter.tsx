"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import DropdownDownMenuName from "@/utils/links";

import { useState } from "react";
import Link from "next/link";

const Filter = () => {
  //   const [bookmarksChecked, setBookmarksChecked] = useState(true);
  //   const [urlsChecked, setUrlsChecked] = useState(false);

  const [region, setRegion] = useState("");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className=" h-[3rem] dark:bg-black rounded-md px-7 w-[13rem] dark:h-[3rem]  bg-white flex items-center outline-none drop-shadow-md">
        <p className="mr-4">Filter by Region</p>
        <IoIosArrowDown />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.RadioGroup
            value={region}
            onValueChange={setRegion}
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
                <Link
                  key={item.name}
                  href={item.href}
                  className="hover:outline-offset-1"
                >
                  <DropdownMenu.RadioItem
                    className="flex h-[3rem] items-center w-[13rem] hover:outline outline-2 cursor-pointer s"
                    value={item.name}
                  >
                    {/* <DropdownMenu.ItemIndicator className="absolute left-[7px]">
                      {item.indicator}
                    </DropdownMenu.ItemIndicator> */}
                    <span className="ml-7"> {item.name}</span>
                  </DropdownMenu.RadioItem>
                </Link>
              );
            })}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Filter;
