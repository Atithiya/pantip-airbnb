import Image from "next/image";
import { Navbar } from "./component/Navbar";
import { Categories } from "./component/Navbarcomponent/Categories";
import { ListingCard } from "./component/ListingCard";
import { Footer } from "./component/Footer";
import { MobileFooter } from "./component/MobileFooter";

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Categories />
      <ListingCard />
      <Footer />
      <MobileFooter />
    </div>
  );
}
