"use client";

import {useState, useEffect} from 'react'
import { motion } from "framer-motion";
import { validateEmail } from "../../libs/utils";
import { Bitter } from "next/font/google";
import ContactModal from "./ContactModal";
import Image from "next/image";

const bitter = Bitter({subsets: ["latin"] });

const Contact = () => {

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
    } else if ((document.getElementById(`${inputName}`) as HTMLInputElement)?.value && inputName !== "email") {
      document.getElementById(`${inputName}Error`)!.textContent = "";
    } else if (!validateEmail(email)) {
      document.getElementById(`emailError`)!.textContent = "Please enter a valid email.";
    } else if (validateEmail(email)) {
      document.getElementById(`emailError`)!.textContent = "";
    }
    
  };

  //   Checking everytime the cursor leaves the input to see if it is empty and displaying a required message if so
  const handleBlur = (inputName: string) => {
    if (!(document.getElementById(`${inputName}`) as HTMLInputElement)?.value) {
      document.getElementById(`${inputName}Error`)!.textContent = "This is a required field.";
    } else if ((document.getElementById(`${inputName}`) as HTMLInputElement)?.value && inputName !== "email") {
      document.getElementById(`${inputName}Error`)!.textContent = "";
    } else if (!validateEmail(email)) {
      document.getElementById(`emailError`)!.textContent = "Please enter a valid email.";
    } else if (validateEmail(email)) {
      document.getElementById(`emailError`)!.textContent = "";
    }
  };



  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    if (!name || !email || !message || !validateEmail(email)) {
      setErrorMessage("Please complete all required sections of the form.");
      return;
    }

    const subject = "Mofield Contact Form";

    try {
      //next line for testing locally
      // const response = await fetch("http://localhost:3000/api/contact", {
      //next line for production
      const response = await fetch("https://www.mofieldbrothers.com/api/contact", {
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
    <ContactModal isOpen={isModalOpen} onClose={closeModal}>
        <i className='text-6xl px-3 py-1 rounded-full bg-base-300 absolute top-[-28px] left-1/2 transform -translate-x-1/2'>&#x2714;</i>
        <p className="text-2xl sm:text-3xl font-bold mb-4">Thanks, {modalName}!</p>
        <p className="sm:text-lg">We&apos;ll review your message and get back to you as soon as possible.</p>{" "}
      </ContactModal>
    <motion.form initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }} className="w-full md:w-1/2 " onSubmit={handleSubmit}>
              <p className="text-red-500 text-md font-semibold italic mb-4">{errorMessage}</p>
              <div className="flex flex-wrap pb-4">
                <div className="w-full pb-2 md:pb-2">
                  <input
                    className="block w-full border-gray-800 dark:border-base-content border-b py-2 px-2 focus:outline-none bg-base-100"
                    id="name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete='name'
                    value={name}
                    onChange={(e) => handleInputChange(e, "name")}
                    onBlur={() => handleBlur("name")}
                  />
                  <p id="nameError" className="text-red-500 text-xs italic pt-1"></p>
                </div>
              </div>
              <div className="flex flex-wrap pb-8">
                <div className="w-full">
                  <input
                    className="block w-full border-gray-800 dark:border-base-content border-b py-2 px-2 focus:outline-none bg-base-100"
                    id="email"
                    placeholder="user@gmail.com"
                    type="email"
                    value={email}
                    name="email"
                    autoComplete='email'
                    onChange={(e) => handleInputChange(e, "email")}
                    onBlur={()=>handleBlur("email")}
                  />
                  <p id="emailError" className="text-red-500 text-xs italic pt-1"></p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <label className="block tracking-wide text-md pb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="no-resize appearance-none block w-full border border-gray-800 dark:border-base-content rounded py-3 px-4 pb-3 leading-tight h-48 resize-none focus:outline-none bg-base-100"
                    id="message"
                    name="message"
                    placeholder='Enter your message here...'
                    value={message}
                    onChange={(e) => handleInputChange(e, "message")}
                    onBlur={() => handleBlur("message")}
                  ></textarea>
                  <p id="messageError" className="text-red-500 text-xs italic pt-1"></p>
                </div>
              </div>
              <button
                className="text-base-content bg-primary dark:bg-base-content dark:text-secondary hover:bg-yellow-600 w-full my-6 py-2 text-xl font-bold rounded-full ease-in-out duration-300"
                type="submit"
              >
                Send
              </button>
            </motion.form>
    </>
  )
}

export default Contact