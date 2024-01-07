
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import DarkThemeToggle from "../DarkTheme/DarkThemeToggle";
import { menuItems } from "@/constants";
import { auth } from "@/libs/auth";
import { handleLogout } from "@/libs/action";
import AuthModal from "../AuthModal/AuthModal";

const NavBar = async () => {
  const session = await auth();

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
              <Button type="submit" color="primary">Logout</Button>
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
          <NavbarItem className="md:flex">
            <DarkThemeToggle />
          </NavbarItem>
          <NavbarItem className="md:hidden">
          <NavbarMenuToggle />
          </NavbarItem>
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
