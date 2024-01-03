"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Link from "next/link";
import DarkThemeToggle from "../DarkTheme/DarkThemeToggle";
import { menuItems } from "@/constants";
import { auth } from "@/app/libs/auth";
import { handleLogout } from "@/app/libs/action";
import AuthModal from "../AuthModal/AuthModal";

const NavBar = () => {
  const session = false;

  return (
    <>
      <Navbar disableAnimation isBordered maxWidth="xl">
        <NavbarContent justify="start">
          <NavbarBrand>
            <p className="font-dancing text-3xl">ZoroBlog</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent justify="center">
          {menuItems.map((item, index) => (
            <NavbarItem className="hidden md:flex" key={index}>
              <Link href={item.path}>{item.name}</Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          {session ? (
            <form action={handleLogout}>
              <Button type="submit">Logout</Button>
            </form>
          ) : (
            <>
              <NavbarItem className="hidden md:flex">
                <AuthModal data={"login"} />
              </NavbarItem>
              <NavbarItem className="hidden md:flex">
                <AuthModal data={"register"} />
              </NavbarItem>
            </>
          )}
          <NavbarItem className="hidden md:flex">
            <DarkThemeToggle />
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="md:hidden" justify="end">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link className="w-full" href={item.path} size="lg">
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavBar;
