/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./styles";
import Link from "next/link";
// import classNames from 'classnames';
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const router = useRouter();

  //   if (!router.isReady) return null;

  return (
    <nav class=" bg-yellow-400 fixed w-full z-20 top-0 left-0 border-b border-yellow-200 ">
      <div class="container mx-auto flex justify-center">
        <div>
          <Link href="/">
            <div class="text-5xl font-bold hover:font-extra-bold">
              <div class="flex">
                <div>
                  <span class="text-black">Authentic</span>
                  <span class="text-white">Max</span>
                  <div class="text-right text-2xl">
                    <p class="">.com</p>
                  </div>
                </div>
                <div>
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
