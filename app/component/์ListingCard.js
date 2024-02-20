import { FaRegHeart } from "react-icons/fa";
import { ListingExploreMore } from "./Listing/ListingExploreMore";

export function ListingCard() {
  const information = [
    {
      image:
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
      location: "Europe, Croatia",
      description: "Beach",
      price: "$200",
    },
    {
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      location: "Europe, Croatia",
      description: "Beach",
      price: "$200",
    },
    {
      image:
        "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
      location: "Europe, Croatia",
      description: "Beach",
      price: "$200",
    },
    {
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      location: "Europe, Croatia",
      description: "Beach",
      price: "$200",
    },
    {
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      location: "Europe, Croatia",
      description: "Beach",
      price: "$200",
    },
    {
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      location: "Europe, Croatia",
      description: "Beach",
      price: "$200",
    },
    {
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      location: "Europe, Croatia",
      description: "Beach",
      price: "$200",
    },
    {
      image:
        "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
      location: "Europe, Croatia",
      description: "Beach",
      price: "$200",
    },
  ];

  return (
    <div className="px-4 lg:px-10 py-4 col-span-1">
      {/* Container for image grid */}
      <div className="gap-y-5 lg:gap-y-10 lg:gap-x-6 md:gap-4 grid md:grid-cols-2 lg:grid-cols-4 ">
        {/* Map through the images and render them */}
        {information.map((item, index) => (
          <div key={index}>
            <div className="w-full relative overflow-hidden rounded-xl cursor-pointer group">
              {/* Image */}
              <img
                src={item.image}
                alt="Listing"
                className="object-cover h-full w-full transition duration-300"
              />
              {/* Heart icon */}
              <div className="absolute top-3 right-3 text-2xl text-white">
                <FaRegHeart />
              </div>
            </div>
            {/* Description */}
            <div className="pt-3">
              <div className="font-semibold text-lg">{item.location}</div>
              <div className="font-light text-neutral-500 text">
                {item.description}
              </div>
              <div className="font-light text-neutral-500">
                {item.description}
              </div>
              <div className="font-semibold">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
      <ListingExploreMore />
    </div>
  );
}
