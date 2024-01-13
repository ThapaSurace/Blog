"use client";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { handleLogout } from "@/libs/action";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const UserMenu = ({ session }) => {
  console.log(session);
  return (
    <Menu as="div" className="relative">
      <div>
        <Menu.Button>
          <Image
            src={session.user.image}
            alt="/"
            className="rounded-full object-center object-cover"
            height={40}
            width={40}
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              <Link
                href="/bloglists"
                className="text-gray-700 block px-4 py-2 font-semibold text-sm hover:bg-gray-400/50 rounded-md text-center"
              >
                My Blogs
              </Link>
            </Menu.Item>
            <Menu.Item>
              <form action={handleLogout}>
                <button
                  className="text-gray-700 block px-4 py-2 font-semibold text-sm hover:bg-gray-400/50 rounded-md w-full text-center"
                  type="submit"
                >
                  logout
                </button>
              </form>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;
