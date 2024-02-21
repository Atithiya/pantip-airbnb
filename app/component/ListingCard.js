import { FaRegHeart } from "react-icons/fa";
import { ListingExploreMore } from "./Listing/ListingExploreMore";

export function ListingCard() {
  const information = [
    {
      image:
        "https://i.pinimg.com/564x/82/97/ed/8297ed64a18fb7ba3a47b196776e4023.jpg",
      post: "ท่องเที่ยวหน้าหนาว",
      member: "สมาชิกหมายเลข 1989322",
      date: "21 ก.พ. 67",
      category: "แกลลอรี่",
    },
    {
      image: "https://f.ptcdn.info/201/082/000/s3j7i32den7U5HOveiz3M-o.jpg",
      post: "คุณยายวัย 79 ปี เที่ยวรอบโลก",
      member: "สมาชิกหมายเลข 6489322",
      date: "20 ก.พ. 67",
      category: "แกลลอรี่",
    },
    {
      image:
        "https://i.pinimg.com/564x/e5/cd/7a/e5cd7aef7a84def37f7cca2936a40a35.jpg",
      post: "ขอแชร์รูปจากเกาหลีครับ",
      member: "สมาชิกหมายเลข 6689322",
      date: "20 ก.พ. 67",
      category: "แกลลอรี่",
    },
    {
      image:
        "https://i.pinimg.com/564x/6c/d3/b3/6cd3b3afbbd9c44ea74b2f7f73511ce4.jpg",
      post: "แนะช่างนพล้างแอร์ บางซื่อ",
      member: "สมาชิกหมายเลข 5389322",
      date: "19 ก.พ. 67",
      category: "ชายคา",
    },
    {
      image:
        "https://i.pinimg.com/564x/7f/e1/d2/7fe1d2fd24ebbbdbacd15951950546c1.jpg",
      post: "รีวิว Iphone 15 Promax ",
      member: "สมาชิกหมายเลข 2589322",
      date: "19 ก.พ. 67",
      category: "มาบุญครอง",
    },
    {
      image:
        "https://i.pinimg.com/736x/69/ff/1b/69ff1b279cccb6e7807e5322eb962dff.jpg",
      post: "ส้มตำจากเยอรมัน",
      member: "สมาชิกหมายเลข 4774322",
      date: "19 ก.พ. 67",
      category: "ไกลบ้าน",
    },
    {
      image:
        "https://i.pinimg.com/564x/83/a6/2b/83a62b14544374dba5b2e362c05df2a0.jpg",
      post: "มีใครยังดูชินจังอยู่บ้างครับ",
      member: "สมาชิกหมายเลข 4649322",
      date: "18 ก.พ. 67",
      category: "การ์ตูน",
    },
    {
      image:
        "https://i.pinimg.com/736x/9c/04/11/9c04111ba071591f81a455f8e897c5df.jpg",
      post: "ภาคเหนือยังน่าอยู่ไหม",
      member: "สมาชิกหมายเลข 2959322",
      date: "18 ก.พ. 67",
      category: "ภูมิภาค",
    },
  ];

  return (
    <div className="px-6 lg:px-10 py-4 col-span-1 text-base">
      {/* Container for image grid */}
      <div className="gap-y-5 lg:gap-y-10 lg:gap-x-6 md:gap-4 grid md:grid-cols-2 lg:grid-cols-4 ">
        {/* Map through the images and render them */}
        {information.map((item, index) => (
          <div key={index} className="cursor-pointer group rounded-xl">
            <div className="w-full relative overflow-hidden rounded-xl">
              {/* Image */}
              <img
                src={item.image}
                alt="Listing"
                className="object-cover h-64 w-full duration-300 
                group-hover:scale-110 
                transition"
              />
              {/* Heart icon */}
              <div className="absolute top-3 right-3 text-2xl text-white">
                <FaRegHeart />
              </div>
            </div>
            {/* Description */}
            <div className="pt-3">
              <div className="font-semibold">{item.post}</div>
              <div className="font-light text-neutral-500 text">
                {item.member}
              </div>
              <div className="font-light text-neutral-500">{item.date}</div>
              <div className="font-semibold">{item.category}</div>
            </div>
          </div>
        ))}
      </div>
      <ListingExploreMore />
    </div>
  );
}
