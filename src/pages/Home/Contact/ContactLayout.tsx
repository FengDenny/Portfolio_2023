import { Ref } from "react";
import contact from "@/assets/contact.png";
import darkContact from "@/assets/dark_contact.png";
import email from "@/assets/email.png";

import { FaSpinner } from "react-icons/fa";
import { useTheme } from "@/components/helper/ThemeContext";

type Props = {
  isLoading: boolean;
  error: boolean;
  messageSent: boolean;
  fullName: string;
  message: string;
  email: string;
  fullNameError: string;
  emailError: string;
  messageError: string;
  handleSend: (e: any) => void;
  setFullName: (value: string) => void;
  setMessage: (value: string) => void;
  setEmail: (value: string) => void;
  formRef: Ref<HTMLFormElement>;
};

const ContactLayout = ({
  handleSend,
  fullName,
  message,
  email,
  isLoading,
  messageSent,
  setFullName,
  setMessage,
  setEmail,
  formRef,
  fullNameError,
  emailError,
  messageError,
}: Props) => {
  const enabled =
    fullNameError.length === 0 &&
    messageError.length === 0 &&
    emailError.length === 0;
  const { theme } = useTheme();

  return (
    <section id="contact">
      <div className="mx-auto mt-40 flex w-4/6  flex-col  text-primary-100 dark:text-color-white">
        <h2 className="mx-auto text-3xl font-bold ">Connect with me</h2>
        <span className="mx-auto mt-1 w-44 border-b border-solid border-b-color-description"></span>
        <p className="description-text relative left-6  mx-auto mt-4 w-80 text-xl font-normal text-color-description sm:w-96">
          Currently looking for opportunities to learn and grow. If any, send me
          an{" "}
          <span className="font-bold text-primary-300 dark:text-color-white">
            email
          </span>{" "}
          or message me on
          <a
            href="https://www.linkedin.com/in/denny-feng/"
            className=" p-1  font-bold text-primary-300 underline transition-all delay-100 duration-100 ease-in hover:text-primary-pink
            dark:text-color-white hover:dark:text-primary-pink
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          . Looking forward to speaking with you!
        </p>
      </div>
      <div className="mx-auto mt-2 flex h-auto  w-5/6 flex-col  flex-wrap justify-between py-24 text-color-white sm:flex-row">
        <div className="relative top-6 mx-auto  h-auto w-72 md:w-80">
          {theme ? (
            <img src={contact} alt="contact me" />
          ) : (
            <img src={darkContact} alt="contact me" />
          )}
        </div>
        <form
          ref={formRef}
          className="relative top-4 left-4 mx-auto mt-10  flex h-auto w-96  flex-col rounded-lg bg-primary-300 p-10 shadow-lg shadow-primary-100 dark:bg-color-white  dark:shadow-primary-pink   sm:-top-6 sm:left-0 "
        >
          <h2 className="pb-6 text-color-white dark:text-primary-300">
            Send me an email
          </h2>
          <div className="flex w-72 flex-col">
            <label
              htmlFor="fullName"
              className="description-text  px-1 text-xl font-normal text-color-white dark:font-bold dark:text-color-description"
            >
              Full name
              <span className="text-rose-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="description-text h-9 rounded-sm border-b  border-solid border-b-primary-300  px-1 text-lg font-normal text-primary-300 
            caret-primary-pink-hover valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500"
              required
              pattern="[a-zA-Z ]+"
            />
            {fullNameError && (
              <span className="mt-1 text-sm text-rose-500">
                {fullNameError}
              </span>
            )}
          </div>
          <div className="mt-3 flex w-72 flex-col">
            <label
              htmlFor="fullName"
              className="description-text  px-1 text-xl font-normal text-color-white dark:font-bold dark:text-color-description"
            >
              Email Address
              <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="description-text h-9 rounded-sm border-b  border-solid border-b-primary-300  px-1 text-lg font-normal text-primary-300 
            caret-primary-pink-hover valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500"
              required
            />
            {emailError && (
              <span className="mt-1 text-sm text-rose-500">{emailError}</span>
            )}
          </div>
          <div className="mt-3 flex  w-72 flex-col">
            <label
              htmlFor="fullName"
              className="description-text  px-1 text-xl font-normal text-color-white dark:font-bold dark:text-color-description"
            >
              Message <span className="relative right-1 text-rose-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="description-text h-9 rounded-sm border-b  border-solid border-b-primary-300  px-1 text-lg font-normal text-primary-300 
            caret-primary-pink-hover valid:focus-visible:outline-emerald-600 invalid:focus-visible:outline-rose-500"
              required
            />
            {messageError && (
              <span className="mt-1 text-sm text-rose-500">{messageError}</span>
            )}
          </div>
          <div className="mt-3">
            {isLoading ? (
              <FaSpinner className="animate-spin text-2xl text-primary-pink" />
            ) : (
              <button
                className="h-8 w-32 rounded-md border border-solid border-primary-pink bg-primary-pink text-color-description shadow-2xl"
                onClick={(e) => handleSend(e)}
                disabled={
                  !enabled || !fullName || !email || !message || messageSent
                }
              >
                {messageSent ? "Message Sent" : "Send"}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactLayout;
