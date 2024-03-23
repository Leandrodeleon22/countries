import { GoDotFill } from "react-icons/go";

type DropdownMenuProp = {
  name: string;
  indicator: JSX.Element;
};

const DropdownDownMenuName: DropdownMenuProp[] = [
  {
    name: "All",
    indicator: <GoDotFill />,
  },
  {
    name: "Africa",
    indicator: <GoDotFill />,
  },

  {
    name: "America",
    indicator: <GoDotFill />,
  },
  {
    name: "Asia",
    indicator: <GoDotFill />,
  },
  {
    name: "Europe",
    indicator: <GoDotFill />,
  },
  {
    name: "Oceania",
    indicator: <GoDotFill />,
  },
];

export default DropdownDownMenuName;
