import Link from "next/link";
import DarkLightMode from "./DarkLightMode";

export default function Header() {
  return (
    <header className="flex justify-center dark:bg-slate-700">
      <div className="w-11/12 flex justify-between drop-shadow-md h-[4rem] items-center">
        <Link href="/" className="font-semibold text-[1.5rem] ">
          Where in the world?
        </Link>
        {/* <h1 className="font-semibold text-[1.5rem] ">Where in the world?</h1> */}
        <DarkLightMode />
      </div>
    </header>
  );
}
