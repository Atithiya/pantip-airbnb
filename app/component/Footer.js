import { GrLanguage } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
export function Footer() {
  const footerItems = [
    "กฎ กติกาและมารยาท",
    "คำแนะนำการโพสต์",
    "นโยบายเกี่ยวกับข้อมูลส่วนบุคคล",
    "สิทธิ์การใช้งานของสมาชิก",
    "ติดต่อทีมงาน Pantip",
    "ติดต่อลงโฆษณา",
    "ร่วมงานกับ Pantip",
    "Download App Pantip",
    "Pantip Certified Developer",
  ];

  return (
    <div className="text-sm bg-stone-100 px-5  lg:px-10 ">
      {/* Footer section 1  */}
      <div className="grid lg:grid-cols-3 py-5  lg:py-10 gap-3">
        {footerItems.map((item, index) => (
          <div key={index}>
            <div className="hover:link-hover cursor-pointer w-fit">{item}</div>
          </div>
        ))}
      </div>
      {/* Footer section 2  */}
      <div className="py-5 border-t-[1.5px] hidden lg:block ">
        <div>
          <div className=" flex justify-between">
            <div className="flex gap-2">
              <div>© 2024 Internet Marketing co., ltd</div>
              <div className=" flex"></div>
              <ul className="flex gap-2 ">
                <li className="">
                  <a>
                    ·{" "}
                    <span className="hover:link-hover cursor-pointer w-fit">
                      เงื่อนไข
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    ·{" "}
                    <span className="hover:link-hover cursor-pointer w-fit">
                      แผนผังเว็บไซต์
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    ·{" "}
                    <span className="hover:link-hover cursor-pointer w-fit">
                      ความเป็นส่วนตัว
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    ·{" "}
                    <span className="hover:link-hover cursor-pointer w-fit">
                      ทางเลือกความเป็นส่วนตัว
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 ">
              {/* Language box */}
              <div className="flex text-center gap-2">
                <div className="text-lg">
                  <GrLanguage />
                </div>
                <div>ไทย</div>
              </div>
              {/* End of Language box */}
              <div>
                <ul className="flex text-xl gap-4">
                  <li>
                    <a
                      href="https://www.facebook.com/pantipdotcom/"
                      target="_blank"
                    >
                      <IoLogoFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/Pantip1996" target="_blank">
                      <FaSquareTwitter />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/pantipdotcom"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@pantipchannel"
                      target="_blank"
                    >
                      <IoLogoYoutube />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@pantip1996"
                      target="_blank"
                    >
                      <FaTiktok />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
