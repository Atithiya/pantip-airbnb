import {
  GiBarn,
  GiCastle,
  GiCaveEntrance,
  GiChainMail,
  GiPhotoCamera,
  GiMicrophone,
  GiWindow,
  GiTv,
  GiSmartphone,
  GiHouse,
  GiCaesar,
} from "react-icons/gi";
import { BsChatLeftHeart } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

export function Categories() {
  const categories = [
    {
      label: "สวนลุมพินี",
      icon: BsChatLeftHeart,
    },
    {
      label: "แกลลอรี่",
      icon: GiChainMail,
    },
    {
      label: "สยามสแควร์",
      icon: MdOutlineVilla,
    },
    {
      label: "ภูมิภาค",
      icon: GiCaesar,
    },
    {
      label: "สินธร",
      icon: GiWindow,
    },
    {
      label: "การ์ตูน",
      icon: GiTv,
    },
    {
      label: "กรุงโซล",
      icon: GiMicrophone,
    },
    {
      label: "ศาสนา",
      icon: GiCastle,
    },
    {
      label: "ไกลบ้าน",
      icon: FaSkiing,
    },
    {
      label: "พันทิป",
      icon: GiCaveEntrance,
    },
    {
      label: "มาบุญครอง",
      icon: GiSmartphone,
    },
    {
      label: "ชายคา",
      icon: GiHouse,
    },
    {
      label: "กล้อง",
      icon: GiPhotoCamera,
    },
    {
      label: "เฉลิมกรุง",
      icon: GiBarn,
    },
    {
      label: "สีลม",
      icon: IoDiamond,
    },
  ];

  return (
    // overflow-x-auto is used to allow horizontal scrolling when the content inside the container exceeds its width
    // Catagories box
    <div className="w-full">
      <div className="pt-[90px] pb-4 lg:px-10 px-6 text-gray-500 ">
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto mx-auto">
          {/* Map each catagories */}
          {categories.map((item) => (
            <div
              key={item.label}
              className="gap-2  hover:cursor-pointer hover:text-gray-700 "
            >
              <div className="text-2xl flex justify-center w-20 lg:w-auto ">
                <item.icon />
              </div>
              <div className="text-center font-semibold text-sm lg:text-xs ">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
