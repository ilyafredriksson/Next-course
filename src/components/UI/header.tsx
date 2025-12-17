"use client";

import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import {Link, Button} from "@heroui/react";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { use, useState } from "react";
import RegistrationModal from "./modals/registrastion.modal";
import LoginModal from "./modals/login.modal";
import { useSession } from "next-auth/react";

export const Logo = () => {
  return (
    <Image src="/logo_food.png" alt={siteConfig.title} width={36} height={36} priority />
  );
};

export default function Header() {

    const pathname =usePathname();
const{data: session,status}=useSession();
const isAuth=status==="authenticated";

console.log("session",session);
console.log("status",status);

    const [isRegistrationOpen,setIsRegistrationOpen]=useState(false);
    const [isLoginOpen,setIsLoginOpen]=useState(false);

   const  handleSignOutFunc = async () => {
      try {
        const response = await fetch("/api/sign-out", { method: "POST" });
        if (!response.ok) {
          throw new Error("Failed to sign out");
        }
        console.log("Signed out successfully");
      } catch (error) {
        console.error("Error signing out:", error);
      }
   }
      

    const getNavItems = () => {
      return siteConfig.navItems.map((item, index) => {
        const isActive = pathname === item.href;
        const gradientColors = [
          "from-blue-500 to-purple-600",
          "from-green-500 to-teal-600",
          "from-pink-500 to-red-600",
        ];
        const gradient = gradientColors[index % gradientColors.length];

        return (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className={`px-4 py-2 bg-gradient-to-r ${gradient} text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 ${isActive ? "text-blue-500" : "text-foreground"}`}
            >
              {item.label}
            </Link>
          </NavbarItem>
        );
      });
    }
    

  return (
    <Navbar className={`h-[${layoutConfig.headerHeight}] border-b border-white/10 pb-3 bg-black`}>
      <NavbarBrand>
        <Link href="/" className="flex gap-1" >
        </Link>
        <Logo />
        <p className="text-white text-lg font-semibold ml-2">{siteConfig.title}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       {getNavItems()}

   
      </NavbarContent>
      <NavbarContent justify="end">
        {isAuth && <p>Hello ,{session?.user?.name}!</p>}
        {!isAuth ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="#" className="px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105" onClick={() => setIsLoginOpen(true)}>
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Button
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-red-600 text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
                onPress={() => setIsRegistrationOpen(true)}
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105" onClick={handleSignOutFunc}>
              Sign Out
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
        <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={()=>setIsRegistrationOpen(false)}
        />
       <LoginModal isOpen={isLoginOpen} onClose={()=>setIsLoginOpen(false)}/>
    </Navbar>
  );
}
