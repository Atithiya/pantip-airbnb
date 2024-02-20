import { GrLanguage } from "react-icons/gr";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
export function MobileFooter() {
  return (
    <div className="p-5 px-6 text-sm lg:hidden block bg-stone-100">
      <div className="py-5 border-t-[1.5px] ">
        {/* Language box */}
        <div className="flex text-center gap-2">
          <div className="text-lg">
            <GrLanguage />
          </div>
          <div>ไทย</div>
        </div>
        {/* End of Language box */}
      </div>

      <div className="flex gap-2">
        <div>© 2024 Internet Marketing co., ltd</div>
      </div>
      {/* Social box */}
      <div>
        <ul className="flex text-xl gap-4 mt-5 ">
          <li>
            <a href="https://www.facebook.com/pantipdotcom/" target="_blank">
              <IoLogoFacebook />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Pantip1996" target="_blank">
              <FaSquareTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/pantipdotcom" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@pantipchannel" target="_blank">
              <IoLogoYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@pantip1996" target="_blank">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
