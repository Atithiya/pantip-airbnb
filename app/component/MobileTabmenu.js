import { IoIosSearch } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoPersonCircleOutline } from "react-icons/io5";
import React from "react";

export function MobileTabmenu() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg text-2xl">
      <div className="flex justify-around py-3">
        <div className="flex flex-col items-center">
          <IoIosSearch className="text-gray-500" />
          <div className="text-xs">สำรวจ</div>
        </div>
        <div className="flex flex-col items-center">
          <IoMdHeartEmpty className="text-gray-500" />
          <div className="text-xs">Explore</div>
        </div>
        <div className="flex flex-col items-center">
          <IoPersonCircleOutline className="text-gray-500" />
          <div className="text-xs">Profile</div>
        </div>
      </div>
    </div>
  );
}
