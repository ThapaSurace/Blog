"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "../Icons/MoonIcon";
import { SunIcon } from "../Icons/SunIcon";

const DarkThemeToggle = (props) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toogleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  if (!mounted) return null;
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Component {...getBaseProps()} onClick={toogleTheme}>
          <VisuallyHidden>
            <input {...getInputProps()} />
          </VisuallyHidden>
          <div
            {...getWrapperProps()}
            className={slots.wrapper({
              class: [
                "w-10 h-10",
                "flex items-center justify-center",
                "rounded-lg bg-default-100 hover:bg-default-200",
              ],
            })}
          >
            {isSelected ? <SunIcon /> : <MoonIcon />}
          </div>
        </Component>
      </div>
    </div>
  );
};

export default DarkThemeToggle;
