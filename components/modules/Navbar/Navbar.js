import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GoTriangleDown } from "react-icons/go";

const Navbar = () => {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  useEffect(() => {
    setSearch(route.query.q);
  }, []);

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode === 13) {
      if (search.trim()) {
        route.push(`/search?q=${search}`);
      }
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      route.push(`/search?q=${search}`);
    }
  };

  return (
    <div className="container flex justify-between items-center absolute z-10 pt-8 text-white">
      <div className="">
        <Link href="/">
          <h1 className="text-5xl font-black">NEXT-COFFEE</h1>
        </Link>
      </div>
      <div className="relative bg-white rounded-lg">
        <input
          type="text"
          className="bg-unset py-2 px-4 outline-none focus:outline-none text-black"
          placeholder="Search..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={searchHandlerWithEnter}
        />
        <button
          className="bg-[#da9f5b] absolute right-0 p-2 rounded-e-lg"
          onClick={searchHandler}
        >
          Find It
        </button>
      </div>
      <div className="">
        <ul className="flex items-center gap-8">
          <li className="text-xl font-bold text-[#da9f5b] hover:text-[#da9f5b] transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-xl font-bold hover:text-[#da9f5b] transition-all duration-300">
            <Link href="/about">About</Link>
          </li>
          <li className="text-xl font-bold hover:text-[#da9f5b] transition-all duration-300">
            <Link href="/services">Service</Link>
          </li>
          <li className="text-xl font-bold hover:text-[#da9f5b] transition-all duration-300">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="relative text-xl font-bold hover:text-[#da9f5b] transition-all duration-300">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setIsDropDownShown(!isDropDownShown)}
            >
              Page
              <GoTriangleDown />
            </Link>
            {isDropDownShown && (
              <ul
                className={`${
                  !isDropDownShown ? "hidden" : null
                } absolute bg-white text-black p-4 space-y-4 rounded-md mt-4`}
              >
                <li onClick={() => setIsDropDownShown(false)}>
                  <Link href="/reservation">Reservation</Link>
                </li>
                <li onClick={() => setIsDropDownShown(false)}>
                  <Link href="/testimonial">Testimonial</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="text-xl font-bold hover:text-[#da9f5b] transition-all duration-300">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
