import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { Heart } from "lucide-react";
import Link from "next/link";





export const Header = () => {
  return (
    <div className="shadow-xl backdrop-blur-md bg-white/30 border border-white/20 dark:bg-zinc-900/30 dark:border-white/10 fixed top-0 ">
      <NavigationMenu className=" w-full">
        <NavigationMenuList className="flex gap-10 items-center justify-between w-screen px-8 py-4">
        

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/" target="_blank" className="text-xl text-center tracking-wide font-mono text-secondary">
                {/* <Image width={100} height={100} alt="logo" src={imgs.logo} /> */}
                CookMateAI
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <div className="flex gap-5 items-center">
          <NavigationMenuItem>
            <Link 
              href="/favorite"
              className="text-md ">
              <span>Favorites</span>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link 
              href="/about"
              className="text-md ">
              <span>About</span>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link 
              href="/profile"
              className="text-md ">
              <span>profile</span>
            </Link>
          </NavigationMenuItem>
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
