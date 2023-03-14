import React, { useRef } from "react";
import ContactIcons from "./common/ContactIcons";
import GmailIcon from "../assets/gmail.png";
import Tel from "../assets/contact.png";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import { useStateContext } from "../context/ContextProvider";

const Contact = () => {
  const { setNotification } = useStateContext();

  const form = useRef();

  const icons = [
    {
      iconText: GmailIcon,
      info: "josherias10@gmail.com",
    },
    {
      iconText: Tel,
      info: "+256 777 274857",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_SERVICE_ID}`,
        `${import.meta.env.VITE_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          setNotification("Email has been sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="flex flex-col items-center justify-center w-[100%] px-10 py-10 mb-5">
      <div className="md:w-[50%] flex flex-col">
        <h1 className="text-2xl md:text-3xl font-black text-gray-800 my-4 text-center">
          Get In Touch With Me
        </h1>
        <div className="flex flex-wrap m-auto gap-2">
          {icons.map((icon, index) => (
            <ContactIcons key={index} icon={icon.iconText} info={icon.info} />
          ))}
        </div>

        <form ref={form} className="mt-10" onSubmit={sendEmail}>
          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Name</label>
            <input
              type="text"
              className="border"
              placeholder="Your Name..."
              name="user_name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Email</label>
            <input
              type="email"
              className="border"
              placeholder="johndoe@gmail.com"
              name="user_email"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-500 text-sm">Message</label>
            <textarea type="email" className="border" name="message" />
          </div>

          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 mt-4 rounded flex gap-2"
          >
            Submit
            <SendIcon />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
