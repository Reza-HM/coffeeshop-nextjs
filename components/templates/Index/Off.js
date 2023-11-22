import React, { useState } from "react";

const Off = () => {
  const [email, setEmail] = useState([]);

  const addEmail = async (event) => {
    event.preventDefault();

    const res = await fetch(`http://localhost:8000/newsLetters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.ok) {
      setEmail("");
      alert("You Added to the NewsLetter!");
    }
  };

  return (
    <div className="offer relative after:contents-[''] after:absolute after:bg-[url('/img/overlay-bottom.png')] after:bottom-px after:w-full after:h-4 after:left-0 after:z-10 before:contents-[''] before:absolute before:bg-[url('/img/overlay-top.png')] before:top-px before:w-full before:h-4 before:left-0 before:z-10 mt-40 flex flex-col gap-4 items-center py-32">
      <h1 className="text-[#da9f5b] text-7xl font-bold">50% OFF</h1>
      <h3 className="text-white text-4xl font-bold">Sunday Special Offer</h3>
      <h5 className="text-white text-xl font-bold">
        Only for Sunday from 1st Jan to 30th Jan 2045
      </h5>
      <div className="relative mt-8 bg-white w-96 py-4 px-8">
        <input
          type="text"
          className="bg-unset border-none outline-none focus:outline-none"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          className="absolute right-0 bg-[#da9f5b] p-4 top-0"
          onClick={addEmail}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Off;
