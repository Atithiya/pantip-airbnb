import { Categories } from "./Navbarcomponent/Categories";
import { Logo } from "./Navbarcomponent/Logo";
import { Search } from "./Navbarcomponent/Search";
import { UserMenu } from "./Navbarcomponent/UserMenu";
export function Navbar() {
  return (
    <div className="fixed w-full shadow-sm top-0 bg-white z-10">
      <div className="py-5 xl:px-10 md:px-10 px-6   mx-auto border-b-[1px] flex justify-between">
        <Logo />
        <Search />
        <UserMenu />
      </div>
      <div>
        <Categories />
      </div>
    </div>
  );
}
