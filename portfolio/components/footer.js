import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import signature from "../assets/Signature.png";

const getQuote = (pathname) => {
  switch (pathname) {
    case "/bio":
      return "Order and simplification are the first steps toward the mastery of a subject.";
    case "/work":
      return "We are what we repeatedly do. Excellence is not an act, but a habit.";
    case "/":
      return "The future is now. It’s just not evenly distributed yet.";
    case "/languages":
      return "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.";
    case "/contact":
      return "On the Internet, nobody knows you're a dog.";
    case "/blog":
      return "/Because someone has to do it differently.";
    default:
      break;
  }
};

export const Footer = () => {
  const router = useRouter();

  return (
    <footer className="footer">
      <div className="quote">{getQuote(router.pathname)}</div>
      <Image className="signature" src={signature} alt="Jake's Signature" />
    </footer>
  );
};
