import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="relative w-full bg-base-200 flex items-center justify-center shadow-sm z-[50]">
      <div className="container flex items-center justify-between py-4">
        <div className="text-xl font-bold text-primary">Alacrity
        <span className="text-base-content"> | </span><span className="text-secondary">AirBox</span></div>
        <ul className="flex space-x-10 text-lg font-bold">
          <li>
            <a href="#">Stations</a>
          </li>
          <li>
            <a href="#">Map</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">DOCS</a>
          </li>
          <li>
            <a href="#">Push Notifications</a>
          </li>
          <li className="bg-secondary px-2 rounded-xl shadow-sm">
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
