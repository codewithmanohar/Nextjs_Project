import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { imgs } from "@/lib/data";
import Image from "next/image";




export const Header = () => {
  return (
    <div className="w-full shadow-2xl backdrop-blur-md bg-white/30 border border-white/20 dark:bg-zinc-900/30 dark:border-white/10">
      <NavigationMenu className="w-full justify-center">
        <NavigationMenuList className="flex gap-10 px-8 py-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a href="/" target="_blank" className="text-6xl tracking-tight font-mono text-secondary">
                {/* <Image width={100} height={100} alt="logo" src={imgs.logo} /> */}
                CookMateAI
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
