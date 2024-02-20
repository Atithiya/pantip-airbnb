import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

export function Categories() {
  const categories = [
    {
      label: "Beach",
      icon: TbBeach,
      description: "This property is close to the beach!",
    },
    {
      label: "Windmills",
      icon: GiWindmill,
      description: "This property has windmills!",
    },
    {
      label: "Modern",
      icon: MdOutlineVilla,
      description: "This property is modern!",
    },
    {
      label: "Countryside",
      icon: TbMountain,
      description: "This property is in the countryside!",
    },
    {
      label: "Pools",
      icon: TbPool,
      description: "This is property has a beautiful pool!",
    },
    {
      label: "Islands",
      icon: GiIsland,
      description: "This property is on an island!",
    },
    {
      label: "Lake",
      icon: GiBoatFishing,
      description: "This property is near a lake!",
    },
    {
      label: "Skiing",
      icon: FaSkiing,
      description: "This property has skiing activies!",
    },
    {
      label: "Castles",
      icon: GiCastle,
      description: "This property is an ancient castle!",
    },
    {
      label: "Caves",
      icon: GiCaveEntrance,
      description: "This property is in a spooky cave!",
    },
    {
      label: "Camping",
      icon: GiForestCamp,
      description: "This property offers camping activities!",
    },
    {
      label: "Arctic",
      icon: BsSnow,
      description: "This property is in arctic environment!",
    },
    {
      label: "Desert",
      icon: GiCactus,
      description: "This property is in the desert!",
    },
    {
      label: "Barns",
      icon: GiBarn,
      description: "This property is in a barn!",
    },
    {
      label: "Lux",
      icon: IoDiamond,
      description: "This property is brand new and luxurious!",
    },
  ];

  return (
    // overflow-x-auto is used to allow horizontal scrolling when the content inside the container exceeds its width
    // border-b-[1px] shadow-sm
    // Catagories box
    <div>
      <div className="pt-[90px] pb-4 lg:px-10 px-6 text-gray-500">
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
              <div className="text-center font-semibold text-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
