/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
// import styles from "./styles";
import Link from "next/link";
// import classNames from 'classnames';
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const router = useRouter();

  //   if (!router.isReady) return null;

  return (
    <nav className="bg-yellow-400 fixed w-full z-20 top-0 left-0 border-yellow-200 drop-shadow-xl ">
      <div className="container mx-auto flex justify-center pt-4">
        <div>
          <Link href="/">
            <div className="h-[70.67] text-5xl font-bold">
              <div className="flex">
                <div>
                  <span className="text-black">Authentic</span>
                  <span className="text-white">Max</span>
                  <div className="font-extra-light text-right text-base -translate-y-5">
                    <p>.com</p>
                  </div>
                </div>
                <div className="font-extra-light text-right text-2xl translate-y-2">
                  <span>®</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
