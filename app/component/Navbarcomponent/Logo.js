import { FaAirbnb } from "react-icons/fa6";
export function Logo() {
  return (
    <div>
      <div className=" text-rose-500 lg:flex   font-extrabold hidden lg:block ">
        <div className="text-4xl ">
          <FaAirbnb />
        </div>
        <div className="text-2xl">pantip</div>
      </div>
    </div>
  );
}
