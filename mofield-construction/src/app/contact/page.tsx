"use client";

import {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { validateEmail } from "../../../libs/utils";
import { Bitter } from "next/font/google";

const bitter = Bitter({subsets: ["latin"] });

export default function Contact() {
   const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [modalFirstName, setModalFirstName] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputName: string) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, firstName, lastName, and message.
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "firstName") {
      setFirstName(inputValue);
    } else if (inputType === "lastName") {
      setLastName(inputValue);
    } else {
      setMessage(inputValue);
    }
    // Checking on every change to the inputs and displaying an error message if empty or not valid

    if (!(document.getElementById(`${inputName}`) as HTMLInputElement)?.value) {
      document.getElementById(`${inputName}Error`)!.textContent = "This is a required field.";
    } else {
      document.getElementById(`${inputName}Error`)!.textContent = "";
    }
    if (!email) {
      document.getElementById(`emailError`)!.textContent = "";
    } else if (!validateEmail(email)) {
      document.getElementById(`emailError`)!.textContent = "Please enter a valid email.";
    }
  };

  //   Checking everytime the cursor leaves the input to see if it is empty and displaying a required message if so
  const handleBlur = (inputName: string) => {
    if (!(document.getElementById(`${inputName}`) as HTMLInputElement)?.value) {
      document.getElementById(`${inputName}Error`)!.textContent = "This is a required field.";
    } else {
      document.getElementById(`${inputName}Error`)!.textContent = "";
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      setErrorMessage("Please complete all required sections of the form.");
      return;
    }

      const name = `${firstName} ${lastName}`;

      const subject = "Mofield Contact Form";
    try {
      //next line for testing locally
      const response = await fetch("http://localhost:3000/api/contact", {
      //next line for production
      // const response = await fetch("https://zacharywgibbs.com/api/sendmail", {
        method: "POST",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
        // body: name, email, subject, message,
      });
      if (response.status === 200) {
        console.log("Email sent!. \nResponse:", response);

        setModalFirstName(firstName);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");

        openModal();
      } else {
        console.log("Email not sent. \nResponse:", response);
      }
    } catch (error) {
      alert(`Error sending email: ${error}`);
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p className="text-2xl font-bold mb-4">Thanks for reaching out, {modalFirstName}!</p>
        <p className="text-lg mb-4">I&apos;ll review your message and get back to you as soon as possible.</p>{" "}
      </Modal> */}
      <div className="overflow-x-hidden">
        <div className="hero h-50 md:h-60 relative bg-heroLg bg-center">
        <div className="hero-overlay bg-black bg-opacity-45"></div>
            <h3 className={`text-6xl font-semibold text-primary dark:text-base-content py-12 ${bitter.className}`}>Contact</h3>
        </div>
        <div className="mx-8 mt-6 mb-24 sm:mx-20 lg:mx-32">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={`text-4xl md:text-6xl font-semibold py-4 md:py-12 ${bitter.className}`}
          >
            Get in Touch
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="flex justify-start text-left"
          >
            <form className="w-full" onSubmit={handleSubmit}>
              <p className="text-red-500 text-md font-semibold italic mb-4">{errorMessage}</p>
              <div className="flex flex-wrap pb-6">
                <div className="w-full md:w-1/2 md:pr-3 pb-6 md:pb-0">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="grid-first-name">
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-slate-200 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="firstName"
                    type="text"
                    placeholder="Jane"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => handleInputChange(e, "firstName")}
                    onBlur={() => handleBlur("firstName")}
                  />
                  <p id="firstNameError" className="text-red-500 text-xs italic"></p>
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="grid-last-name">
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full bg-slate-200 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => handleInputChange(e, "lastName")}
                    onBlur={() => handleBlur("lastName")}
                  />
                  <p id="lastNameError" className="text-red-500 text-xs italic"></p>
                </div>
              </div>
              <div className="flex flex-wrap pb-6">
                <div className="w-full">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="grid-password">
                    E-mail
                  </label>
                  <input
                    className="appearance-none block w-full bg-slate-200 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    placeholder="user@gmail.com"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => handleInputChange(e, "email")}
                    onBlur={()=>handleBlur("email")}
                  />
                  <p id="emailError" className="text-red-500 text-xs italic"></p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <label className="block uppercase tracking-wide text-md font-bold pb-2" htmlFor="grid-password">
                    Message
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-slate-200 border border-gray-200 rounded py-3 px-4 pb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    id="message"
                    name="message"
                    placeholder='Enter your message here...'
                    value={message}
                    onChange={(e) => handleInputChange(e, "message")}
                    onBlur={() => handleBlur("message")}
                  ></textarea>
                  <p id="messageError" className="text-red-500 text-xs italic"></p>
                </div>
              </div>
              <button
                className="btn btn-warning w-full my-6 py-2 text-xl font-bold rounded-full ease-in-out duration-300"
                type="submit"
              >
                Send
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
