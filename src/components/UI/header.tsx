"use client";

import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import {Link, Button} from "@heroui/react";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { useState } from "react";
import RegistrationModal from "./modals/registrastion.modal";
import LoginModal from "./modals/login.modal";

export const Logo = () => {
  return (
    <Image src="/logo_food.png" alt={siteConfig.title} width={36} height={36} priority />
  );
};

export default function Header() {

    const pathname =usePathname();
    const [isRegistrationOpen,setIsRegistrationOpen]=useState(false);
    const [isLoginOpen,setIsLoginOpen]=useState(false);

    const getNavItems =() =>{
       return siteConfig.navItems.map((item)=>{
            const isActive= pathname===item.href;
        
        return (
                <NavbarItem key={item.href}>
          <Link href={item.href}
          className={`px-3 py-1
            ${isActive ? "text-blue-500" : "text-foreground"}
                hover:text-blue-300 hover:border
                hover:border-blue-300 hover:rounded-md
                transition-colors
                transition-border
                duration-200`}
            >
          
            {item.label}
          </Link>
        </NavbarItem>
        )})
    }

    

  return (
    <Navbar className={`h-[${layoutConfig.headerHeight}]`}>
      <NavbarBrand>
        <Link href="/" className="flex gap-1" >
        </Link>
        <Logo />
        <p className="font-bold text-inherit">{siteConfig.title}</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
       {getNavItems()}

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button 
            onPress={()=>setIsLoginOpen(true)}
          >
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            onPress={()=>setIsRegistrationOpen(true)}
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
        <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={()=>setIsRegistrationOpen(false)}
        />
       <LoginModal isOpen={isLoginOpen} onClose={()=>setIsLoginOpen(false)}/>
    </Navbar>
  );
}
