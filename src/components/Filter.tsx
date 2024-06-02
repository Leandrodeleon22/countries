"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoIosArrowDown } from "react-icons/io";
import DropdownDownMenuName from "@/utils/links";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const [region, setRegion] = useState("");
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const pathname = usePathname();

  const handleSubmit = (filter: string) => {
    let params = new URLSearchParams(searchParams);

    params.set("region", filter);
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className=" h-[3rem] md:mb-[1rem] dark:bg-slate-700 rounded-md px-7 w-[13rem] dark:h-[3rem]  bg-white flex items-center outline-none drop-shadow-md">
        <p className="mr-4">Filter by Region</p>
        <IoIosArrowDown />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.RadioGroup
            // defaultValue={searchParams.get("query")?.toString()}
            value={region}
            onValueChange={setRegion}
            className="bg-white rounded-md mt-1 dark:bg-slate-700"
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
                <div
                  key={item.name}
                  // href={item.href}
                  className="hover:outline-offset-1 "
                  onClick={() => handleSubmit(item.name)}
                >
                  <DropdownMenu.RadioItem
                    className="flex h-[3rem] items-center w-[13rem] hover:outline dark:hover:outline-slate-50 outline-2 cursor-pointer s"
                    value={item.name}
                  >
                    {/* <DropdownMenu.ItemIndicator className="absolute left-[7px]">
                      {item.indicator}
                    </DropdownMenu.ItemIndicator> */}
                    <span className="ml-7"> {item.name}</span>
                  </DropdownMenu.RadioItem>
                </div>
              );
            })}
          </DropdownMenu.RadioGroup>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Filter;
