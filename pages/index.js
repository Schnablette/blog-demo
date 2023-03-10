import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useMediaQuery } from "react-responsive";

import profilePic from "../public/AxeSquare.jpg";
import { NavButton } from "../components/NavButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const pages = ["All Posts", "About the Author", "Autograph It"];
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const [active, setActive] = useState(pages[0]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    isMobile ? setOpen(false) : setOpen(true);
  }, [isMobile]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex">
        <nav className="bg-ocean-900 relative p-3 md:min-h-screen md:w-[250px]">
          <Image
            className="w-10 absolute top-2 left-2 rounded-xl md:relative md:w-[100px] md:top-0 md:left-0 md:m-4"
            alt="Ann's face. She is wearing a bucket hat."
            src={profilePic}
          />
          {isMobile && (
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <XMarkIcon className="w-12 text-white absolute top-2 right-2 hover:bg-ocean-600 p-2 rounded-full" />
              ) : (
                <Bars3Icon className="w-12 text-white absolute top-2 right-2 hover:bg-ocean-600 p-2 rounded-full" />
              )}
            </button>
          )}
          <Link
            href="https://linkedin.com/in/annschnabel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-white text-xl font-bold hover:underline text-center md:text-left md:ml-4">
              Ann Schnabel
            </p>
          </Link>
          <Link
            href="https://twitter.com/schnablette"
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-ocean-200 text-sm hover:underline text-center mb-4 md:text-left md:ml-4 md:mb-10">
              @Schnablette
            </p>
          </Link>
          {open &&
            pages.map((page) => {
              return (
                <NavButton
                  active={active}
                  key={page}
                  page={page}
                  setActive={setActive}
                />
              );
            })}
        </nav>
        <main className="p-10"> Main Content</main>
      </div>
    </>
  );
}
