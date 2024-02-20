import { Logo } from "./Navbarcomponent/Logo";
import { Search } from "./Navbarcomponent/Search";
import { UserMenu } from "./Navbarcomponent/UserMenu";
export function Navbar() {
  return (
    <div className="fixed w-full z-10 shadow-sm">
      <div className="py-5 xl:px-10 md:px-10 sm:px-2 px-4 max-w-[2520px] mx-auto border-b-[1px] flex justify-between container">
        <Logo />
        <Search />
        <UserMenu />
      </div>
    </div>
  );
}
