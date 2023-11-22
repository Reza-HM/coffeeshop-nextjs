import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState("");

  const reserveHandler = async (event) => {
    event.preventDefault();

    const newReserveInfos = {
      name,
      email,
      date,
      time,
      persons,
    };

    const res = await fetch(`http://localhost:8000/reserves`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReserveInfos),
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setDate("");
      setTime("");
      setPersons("");
      alert("Reserved Successfully ✅");
    }
  };

  return (
    <div className="container mt-60">
      <div className="offer relative after:contents-[''] after:absolute after:bg-[url('/img/overlay-bottom.png')] after:bottom-px after:w-full after:h-4 after:left-0 after:z-10 before:contents-[''] before:absolute before:bg-[url('/img/overlay-top.png')] before:top-px before:w-full before:h-4 before:left-0 before:z-10 flex items-center gap-8">
        <div className="flex-1 flex flex-col gap-6 text-white py-32 px-16">
          <h4 className="text-7xl text-[#da9f5b] font-bold">30% OFF</h4>
          <h6 className="text-justify max-w-sm text-4xl font-bold">
            For Online Reservation
          </h6>
          <p className="text-justify max-w-sm">
            Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut
            sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam.
            Ea et erat ut sed diam sea
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-4 text-xl">
              <FaCheck className="text-[#da9f5b]" /> Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaCheck className="text-[#da9f5b]" /> Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FaCheck className="text-[#da9f5b]" /> Lorem ipsum dolor sit amet
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-[#33211dcc]  py-32 px-16">
          <h1 className="text-5xl font-bold text-white text-center">
            Book Your Table
          </h1>
          <div className="mt-8">
            <form action="" className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="py-2 px-6 w-full outline-none focus:outline-none border-2 bg-transparent border-[#da9f5b] text-white focus:ring-4 ring-[#da9f5b]/70"
              />
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="py-2 px-6 w-full outline-none focus:outline-none border-2 bg-transparent border-[#da9f5b] text-white focus:ring-4 ring-[#da9f5b]/70"
              />
              <input
                type="text"
                placeholder="Date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="py-2 px-6 w-full outline-none focus:outline-none border-2 bg-transparent border-[#da9f5b] text-white focus:ring-4 ring-[#da9f5b]/70"
              />
              <input
                type="text"
                placeholder="Time"
                value={time}
                onChange={(event) => setTime(event.target.value)}
                className="py-2 px-6 w-full outline-none focus:outline-none border-2 bg-transparent border-[#da9f5b] text-white focus:ring-4 ring-[#da9f5b]/70"
              />
              <select
                name=""
                defaultValue="-1"
                id=""
                value={persons}
                onChange={(event) => setPersons(event.target.value)}
                className="py-2 px-6 w-full outline-none focus:outline-none border-2 bg-transparent border-[#da9f5b] text-[#495057] focus:ring-4 ring-[#da9f5b]/70"
              >
                <option value="-1">Person</option>
                <option value="1">Person 1</option>
                <option value="2">Person 2</option>
                <option value="3">Person 3</option>
                <option value="4">Person 4</option>
              </select>
              <button
                className="py-2 px-6 w-full bg-[#da9f5b] hover:bg-[#da9f5b]/90 transition-all duration-200"
                onClick={reserveHandler}
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
