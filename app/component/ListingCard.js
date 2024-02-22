import { FaRegHeart } from "react-icons/fa";
import { ListingExploreMore } from "./Listing/ListingExploreMore";

export function ListingCard() {
  const information = [
    {
      image: "https://f.ptcdn.info/102/083/000/s85jq621m8vDFqmyF0t2q-o.png",
      post: "[Pantip Point] วาเลนไทน์นี้ อยากควงน้องเพี้ยนไปเดตที่ไหนดี ? 💕🥰",
      member: "สมาชิกหมายเลข 1989322",
      date: "21 ก.พ. 67",
      category: "แกลลอรี่",
    },
    {
      image: "https://f.ptcdn.info/236/083/000/s8w1c21mcn0IbrbPwn7Xg-o.jpg",
      post: "☀️ พี่แป้งชวนรีวิว “ครีมกันแดดตัวเด็ด“ ภาค 4 ลุ้นรับตุ๊กตาน้องเพี้ยนไซส์ใหญ่ ครีมกันแดด และพันทิปพอยท์ 🌤️",
      member: "สมาชิกหมายเลข 6489322",
      date: "20 ก.พ. 67",
      category: "แกลลอรี่",
    },
    {
      image: "https://f.ptcdn.info/617/082/000/s5jjj3hcfjr2Dof0812m-o.png",
      post: "สถานที่ท่องเที่ยวสุดโรแมนติกของคุณคือ … ❤ แชร์มาเลย ลุ้นรับ Pantip Point และของขวัญ",
      member: "สมาชิกหมายเลข 6689322",
      date: "20 ก.พ. 67",
      category: "แกลลอรี่",
    },
    {
      image: "https://f.ptcdn.info/176/083/000/s8ja8u18fkoBZrQ8UG3Ou-o.jpg",
      post: "สถานที่ท่องเที่ยวสุดโรแมนติกของคุณคือ … ❤ แชร์มาเลย ลุ้นรับ Pantip Point และของขวัญ",
      member: "สมาชิกหมายเลข 5389322",
      date: "19 ก.พ. 67",
      category: "ชายคา",
    },
    {
      image: "https://f.ptcdn.info/153/083/000/s8fdj0d9a1mFffFn8wIq-o.jpg",
      post: "🚩กิจกรรมแชร์ประสบการณ์ “จีบผ่านโซเชียลออนไลน์ VS จีบแบบเจอโดยบังเอิญ” ได้หรือโดนเท ตอบถูกใจ รับ Pantip point 150 คะแนน",
      member: "สมาชิกหมายเลข 2589322",
      date: "19 ก.พ. 67",
      category: "มาบุญครอง",
    },
    {
      image: "https://f.ptcdn.info/007/082/000/s2nc191schy1n4uqopP3L-o.jpg",
      post: "ข่าวดี! เพื่อนๆ สามารถสร้างรายได้ไปพร้อมกับใช้งาน Pantip ได้แล้วนะ",
      member: "สมาชิกหมายเลข 4774322",
      date: "19 ก.พ. 67",
      category: "ไกลบ้าน",
    },
    {
      image: "https://f.ptcdn.info/163/080/000/rrz1ua1xrxaDQ31hBUcA7-o.jpg",
      post: "พันทิปนานุกรม … ชวนมาดู Cover Design วันสำคัญ บนเว็บไซต์ Pantip",
      member: "สมาชิกหมายเลข 4649322",
      date: "18 ก.พ. 67",
      category: "การ์ตูน",
    },
    {
      image: "https://f.ptcdn.info/102/083/000/s85jq621m8vDFqmyF0t2q-o.png",
      post: "[Pantip Point] วาเลนไทน์นี้ อยากควงน้องเพี้ยนไปเดตที่ไหนดี ? 💕🥰",
      member: "สมาชิกหมายเลข 1989322",
      date: "21 ก.พ. 67",
      category: "แกลลอรี่",
    },
  ];

  return (
    <div className="pt-52 px-6 lg:px-10 py-4 col-span-1 text-base">
      <div className="gap-y-5 lg:gap-y-10 lg:gap-x-6 md:gap-4 grid md:grid-cols-2 lg:grid-cols-4">
        {information.map((item, index) => (
          <div key={index} className="group rounded-xl cursor-pointer">
            <div className="w-full relative overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt="Listing"
                className="object-cover 
                object-center 
                h-full 
                w-full 
                duration-300 
                group-hover:scale-110 
                transition"
              />
              <div className="absolute top-3 right-3 text-2xl text-white">
                <FaRegHeart />
              </div>
            </div>
            <div className="pt-3 text-lg lg:text-base">
              <div className="font-semibold">
                {/* If the length of characters exceed 30 lenght ,it will hide and display '...' after the post */}
                {item.post.length > 30
                  ? `${item.post.substring(0, 30)}...`
                  : item.post}
              </div>
              <div className="font-light text-neutral-500">{item.member}</div>
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
