import { BiSearch } from "react-icons/bi";
export function Search() {
  return (
    <div
      className=" 
      border-[1px]
      w-full 
      md:w-auto 
      py-2 
      rounded-full 
      shadow-sm 
      hover:shadow-md 
      transition 
      cursor-pointer 
      lg:h-12 
      lg:ms-20 "
    >
      <div
        className="
      flex
      flex-row
      items-center
      justify-between"
      >
        {/* mobile search  */}
        <div
          className="
          p-2
          rounded-full
          text-black 
          lg:hidden 
          text-2xl
          block 
          ms-3"
        >
          <BiSearch />
        </div>
        <div
          className="
        text-lg
        lg:text-sm
        font-semibold
        px-6 
        "
        >
          ค้นหา
        </div>
        <div
          className="
        hidden
        sm:block
        text-sm
        font-semibold
        px-6
        border-x-[1px]
        flex-1
        text-center
        "
        >
          My Feed
        </div>
        <div
          className="
        text-sm
        pl-6
        pr-2
        text-gray-600
        flex
        flex-row
        items-center
        gap-3
        
        "
        >
          <div className="hidden sm:block">Explore</div>
          <div
            className="
          p-2
          bg-rose-500
          rounded-full
          text-white hidden lg:block"
          >
            <BiSearch />
          </div>
        </div>
      </div>
    </div>
  );
}
