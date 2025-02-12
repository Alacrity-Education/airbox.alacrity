import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="realative">
        <div className="container mx-auto flex justify-between align-center py-4 bg-base-200 shadow-sm z-50 fixed inset-0">
            <div className="text-primary flex align-center justify-center">
                Alacrity | Airbox
            </div>
            <ul className="flex align-center justify-center">
                <li className="mx-4">
                    <a href="#">Stations</a>
                </li>
                <li className="mx-4">
                    <a href="#">Map</a>
                </li>
                <li className="mx-4">
                    <a href="#">Features</a>
                </li>
                <li className="mx-4">
                    <a href="#">Community</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}