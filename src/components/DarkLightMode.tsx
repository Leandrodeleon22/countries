import { CiDark } from "react-icons/ci";
export default function DarkLightMode() {
  return (
    <div className="flex items-center ">
      <button>
        <CiDark size={20} />
      </button>
      <span className="ml-[.5rem] font-semibold">Dark Mode</span>
    </div>
  );
}
