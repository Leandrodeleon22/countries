import { GoDotFill } from "react-icons/go";

type DropdownMenuProp = {
  name: string;
  indicator: JSX.Element;
  href: string;
};

const DropdownDownMenuName: DropdownMenuProp[] = [
  {
    name: "Africa",
    indicator: <GoDotFill />,
    href: "/africa",
  },

  {
    name: "America",
    indicator: <GoDotFill />,
    href: "/america",
  },
  {
    name: "Asia",
    indicator: <GoDotFill />,
    href: "/asia",
  },
  {
    name: "Europe",
    indicator: <GoDotFill />,
    href: "/europe",
  },
  {
    name: "Oceania",
    indicator: <GoDotFill />,
    href: "/oceania",
  },
];

export default DropdownDownMenuName;
