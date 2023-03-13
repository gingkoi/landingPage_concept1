import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="mt-5">
      <div className="flex flex-col xl:flex-row space-x-5 items-center">
        <div className="flex space-x-5">
          <AiFillFacebook
            size={30}
            className="hover:opacity-70 cursor-pointer"
          />
          <AiFillTwitterSquare
            size={30}
            className="hover:opacity-70 cursor-pointer"
          />
          <AiFillLinkedin
            size={30}
            className="hover:opacity-70 cursor-pointer"
          />
        </div>
        <div className="flex flex-col xl:flex-row xl:space-x-5 my-3">
          <a href="/" className="text-lg text-opacity-90 hover:underline">
            Privacy
          </a>
          <a href="/" className="text-lg text-opacity-90 hover:underline">
            Terms
          </a>
          <a href="/" className="text-lg text-opacity-90 hover:underline">
            Other projects
          </a>
          <a href="/" className="text-lg text-opacity-90 hover:underline">
            Help centre
          </a>
        </div>
      </div>
    </div>
  );
}
