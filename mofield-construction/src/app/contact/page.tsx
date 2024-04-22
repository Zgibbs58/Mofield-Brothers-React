"use client";

import {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { validateEmail } from "../../../libs/utils";
import { Bitter } from "next/font/google";
import Image from "next/image";

const bitter = Bitter({subsets: ["latin"] });

export default function Contact() {
   const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [modalName, setModalName] = useState("");

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
    } else if (inputType === "name") {
      setName(inputValue);
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
    if (!name || !email || !message) {
      setErrorMessage("Please complete all required sections of the form.");
      return;
    }

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

        setModalName(name);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName("");
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
        <div className="mx-8 mt-6 mb-24 px-6 md:px-12">
          {/* <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={`text-4xl md:text-6xl font-semibold py-4 md:py-12 ${bitter.className}`}
          >
            Get in Touch
          </motion.h3> */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className="flex justify-start text-left md:gap-8 lg:gap-16  py-12 md:py-24 flex-wrap md:flex-nowrap"
          >
            <div className='w-full md:w-1/2 flex flex-col text-left pb-4'>
              <h4 className={`text-4xl md:text-6xl font-semibold py-4 ${bitter.className}`}>Get in Touch</h4>
              <p className='text-md md:text-lg'>
                We're here to help with your construction needs! Whether you have questions about our services or want to discuss a potential project, feel free to reach out. We're just a message away and look forward to speaking with you.
              </p>
            </div>
            <form className="w-full md:w-1/2 " onSubmit={handleSubmit}>
              <p className="text-red-500 text-md font-semibold italic mb-4">{errorMessage}</p>
              <div className="flex flex-wrap pb-4">
                <div className="w-full pb-2 md:pb-2">
                  <input
                    className="block w-full border-gray-800 border-b py-2 px-2 focus:outline-none"
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => handleInputChange(e, "name")}
                    onBlur={() => handleBlur("name")}
                  />
                  <p id="nameError" className="text-red-500 text-xs italic"></p>
                </div>
              </div>
              <div className="flex flex-wrap pb-8">
                <div className="w-full">
                  <input
                    className="block w-full border-gray-800 border-b py-2 px-2 focus:outline-none"
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
                  <label className="block tracking-wide text-md pb-2" htmlFor="grid-password">
                    Message
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full border border-gray-800 rounded py-3 px-4 pb-3 leading-tight h-48 resize-none focus:outline-none"
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
            {/* <Image className="object-cover hidden lg:block" width={700} height={600} src={"/images/mike&RobertLg.jpg"} alt="Mofield brothers and dad"></Image> */}
          </motion.div>
        </div>
      </div>
    </>
  );
}
