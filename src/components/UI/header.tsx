"use client";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@heroui/navbar";
import {Link, Button} from "@heroui/react";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { use } from "react";

export const Logo = () => {
  return (
    <Image src="/logo_food.png" alt="logo food" width={36} height={36} priority />
  );
};

export default function Header() {

    const pathname =usePathname();

    const navItems=[
    {href:"/", label:"Recepies"},
    {href:"/ingridients", label:"Ingredients"},
    {href:"/about", label:"About Us"}
    ]


  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="flex gap-1" >
        </Link>
        <Logo />
        <p className="font-bold text-inherit">International Food</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navItems.map((item)=>{
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
        )})}

      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Button>
              Sign Up
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
