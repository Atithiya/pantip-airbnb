import { IoPersonCircleSharp } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
export function UserMenu() {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="
          hidden
          md:block
          text-sm 
          font-semibold 
          py-3 
          px-4 
          rounded-full 
          hover:bg-neutral-100 
          transition 
          cursor-pointer"
        >
          Airbnb your home
        </div>
        <div
          className="
          p-4
          md:py-1
          md:px-2
          border-[1px] 
          border-neutral-200 
          flex 
          flex-row 
          items-center 
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition
        
        "
        >
          <AiOutlineMenu />
          <div className="hidden md:block text-gray-500 text-4xl">
            <div className="rounded-full" height="30" width="50">
              <IoPersonCircleSharp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
