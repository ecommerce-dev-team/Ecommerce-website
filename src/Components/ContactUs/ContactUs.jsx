import React from "react";
import ContactUsCss from "./ContactUs.module.css";

import locationimg from "../images/Vector (1).png";
import calPhoneimg from "../images/Container.png";
import mailMessageImg from "../images/message.png";

export default function ContactUs() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className={ContactUsCss.contactUs_contant1}>
            <p className={ContactUsCss.contactUs_contant1_p1}>Get In Touch</p>
            <p className={ContactUsCss.contactUs_contant1_p2}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quaerat unde quam dolor culpa veritatis inventore, aut commodi eum
              veniam vel.
            </p>
          </div>
        </div>

        <div
          className={
            ContactUsCss.contactUs_contant2 + " flex justify-center text-center"
          }
        >
          <div className={ContactUsCss.contactUs_D1}>
            <div className="flex justify-center">
              <img className="mb-8" src={locationimg} alt="location" />
            </div>
            <p className={ContactUsCss.PLogo + " mb-1"}>
              102 Street 2714 Donovan
            </p>

            <p className={ContactUsCss.Plast}>
              Lorem ipsum dolar site amet discont
            </p>
          </div>

          <div className={ContactUsCss.contactUs_D1}>
            <div className="flex justify-center">
              <img className="mb-8" src={calPhoneimg} alt="calPhone" />
            </div>

            <p className={ContactUsCss.PLogo + " mb-1"}>+02 1234 567 88</p>

            <p className={ContactUsCss.Plast}>
              Lorem ipsum dolar site amet discont
            </p>
          </div>

          <div className={ContactUsCss.contactUs_D1}>
            <div className="flex justify-center">
              <img className="mb-8" src={mailMessageImg} alt="mailMessage" />
            </div>

            <p className={ContactUsCss.PLogo + " mb-1"}>info@example.com</p>

            <p className={ContactUsCss.Plast}>
              Lorem ipsum dolar site amet discont
            </p>
          </div>
        </div>

        <section
          className={
            ContactUsCss.SendUsDiv +
            " bg-white py-16 mt-12 px-4 sm:px-6 lg:px-8"
          }
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={ContactUsCss.contactUs_contant1_p1 + " mb-5"}>
              {" "}
              Send Us{" "}
            </h2>
            <p className={ContactUsCss.contactUs_contant1_p2Y + " mx-auto"}>
              Contact us for all your questions and opinions, or you can solve
              your problems in a shorter time with our contact offices.
            </p>
          </div>
          <hr className="border-t border-gray-300 mt-12 mb-12" />
          <form className="max-w-3xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="Name"
                  type="text"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email *{" "}
                </label>
                <input
                  id="Email"
                  type="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="PhoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Phone number{" "}
              </label>
              <input
                id="PhoneNumber"
                type="tel"
                className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>

            <div>
              <label
                htmlFor="Message"
                className="block text-sm font-medium text-gray-700"
              >
                Your message
              </label>
              <textarea
                id="Message"
                rows="5"
                className="mt-1 block w-full rounded-lg border border-gray-300 p-3 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            <button
              className={
                ContactUsCss.ButtomContact +
                " px-6 py-3 text-left text-white rounded-lg font-light hover:opacity-90 transition"
              }
              type="button"
              style={{ backgroundColor: "#35AFA0" }}
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
