"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Filter = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className=" h-[3rem] rounded-md px-6 bg-white flex items-center outline-none">
        <button className="mr-4">Filter by Region</button>
        <IoIosArrowDown />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.RadioGroup value={person} onValueChange={setPerson}>
            <DropdownMenu.RadioItem value="Africa">
              <DropdownMenu.ItemIndicator>@</DropdownMenu.ItemIndicator>
              Africa
            </DropdownMenu.RadioItem>

            <DropdownMenu.RadioItem value="colm">
              <DropdownMenu.ItemIndicator>@</DropdownMenu.ItemIndicator>
              America
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Filter;
