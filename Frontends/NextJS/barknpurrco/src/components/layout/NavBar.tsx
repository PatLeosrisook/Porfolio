"use client";
import { navigation } from "@/constants/navigations";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BREAKPOINTS } from "./breakpoints";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  const [deviceSize, setDeviceSize] = useState(320);
  function renderNavigation() {
    if (deviceSize >= BREAKPOINTS.MOBILE) {
      return (
        <>
          <ul>
            {navigation.map((nav) => {
              return (
                <Link key={nav.name} className={nav.style} href={nav.link}>
                  {nav.name}
                </Link>
              );
            })}
          </ul>
          <div className="flex flex-row items-center justify-center"></div>
        </>
      );
    } else {
      return <FontAwesomeIcon icon={faBars} />;
    }
  }
  useEffect(() => {
    function handleResize() {
      setDeviceSize(window.innerWidth);
    }

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <nav className="w-full h-[20vh] flex flex-row justify-between items-start text-black pt-8 px-4">
      <p className="font-bold uppercase">BarknPurr co.</p>
      {renderNavigation()}
    </nav>
  );
}
