"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import fa_styles from "@fortawesome/fontawesome-svg-core/styles.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import GuestDropdown from "./GuestDropdown/GuestDropdown";

function Navbar({ user, signOutAction }) {
  const [hideMenu, setHideMenu] = useState(true);
  const pathname = usePathname();
  return (
    <header style={{ direction: "rtl" }}>
      <div className="container header-items" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>لوگو</h2>
        <nav className={`navbar ${hideMenu ? "hide-menu" : "show-menu"}`}>
          <ul style={{ display: "flex", gap: "60px", listStyle: "none", padding: 0, margin: 0 }}>
            <li>
              <Link className={pathname === "/" ? "active" : ""} href="/" onClick={() => setHideMenu(true)}>
                صفحه اصلی
              </Link>
            </li>
            <li>
              <Link className={pathname.includes("rooms") ? "active" : ""} href="/rooms" onClick={() => setHideMenu(true)}>
                اقامتگاه ها
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className={pathname === "/contact" ? "active" : ""} onClick={() => setHideMenu(true)}>
                تماس با ما
              </Link>
            </li>
            <li>
              {user ? (
                <GuestDropdown user={user} signOutAction={signOutAction} />
              ) : (
                <Link className={pathname.includes("account") || pathname === "/signin" ? "active" : ""} href="/signin" onClick={() => setHideMenu(true)}>
                  مهمان
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <button onClick={() => setHideMenu(!hideMenu)} className="toggle-menu-button" style={{ marginLeft: "0" }}>
          <FontAwesomeIcon icon={hideMenu ? faBars : faClose} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
