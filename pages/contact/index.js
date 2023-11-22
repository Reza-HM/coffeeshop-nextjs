import SectionHeader from "@/components/modules/SectionHeader/SectionHeader";
import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const addMessageHandler = async (event) => {
    event.preventDefault();

    const newMessageInfos = {
      name,
      email,
      subject,
      message,
    };

    const res = await fetch(`http://localhost:8000/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessageInfos),
    });
 
    if (res.ok) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      alert("New Message Sent!");
    }
  };

  return (
    <div className="container mt-60 mb-20">
      <SectionHeader title="CONTACT US" subtitle="Feel Free To Contact" />
      <div className="flex justify-center items-center gap-12 mt-12">
        <div className="flex flex-col gap-4 items-center min-w-[300px]">
          <FaLocationDot className="text-[#da9f5b] text-4xl" />
          <h3 className="text-3xl font-bold">Address</h3>
          <p>123 Street, New York, USA</p>
        </div>
        <div className="flex flex-col gap-4 items-center min-w-md min-w-[300px]">
          <FaPhone className="text-[#da9f5b] text-4xl" />
          <h3 className="text-3xl font-bold">Phone</h3>
          <p>+012 345 6789</p>
        </div>
        <div className="flex flex-col gap-4 items-center min-w-md min-w-[300px]">
          <MdOutlineEmail className="text-[#da9f5b] text-4xl" />
          <h3 className="text-3xl font-bold">Email</h3>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="flex items-center gap-8 mt-12">
        <div className="flex-1">
          <iframe
            className="w-full h-[443px] rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-8">
            <input
              type="text"
              className="w-full py-4 px-8 border border-slate-300 rounded-md outline-none focus:outline-none"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              type="text"
              className="w-full py-4 px-8 border border-slate-300 rounded-md outline-none focus:outline-none"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="text"
              className="w-full py-4 px-8 border border-slate-300 rounded-md outline-none focus:outline-none"
              placeholder="Subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
            <textarea
              type="text"
              className="w-full py-4 px-8 min-h-[5rem] max-h-[15rem] border border-slate-300 rounded-md outline-none focus:outline-none"
              placeholder="Message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <button
              className="p-4 bg-[#da9f5b] py-4 px-8 w-60 rounded-md"
              onClick={addMessageHandler}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
