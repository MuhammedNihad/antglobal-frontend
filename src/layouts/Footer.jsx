import { InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

import logo from "../assets/logo.webp";

export const Footer = () => {
  return (
    <footer className="body-font rounded-3xl bg-secondary-300 text-accent-950">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <a className="title-font flex items-center justify-center font-medium text-accent-950 md:justify-start">
          <img src={logo} alt="" className="m-auto w-12" />
          <span className="ml-3 text-xl font-bold uppercase">Ant Global</span>
        </a>
        <p className="mt-4 flex flex-wrap justify-center text-sm font-semibold text-accent-950 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-accent-950 sm:py-2 sm:pl-4">
          © {new Date().getFullYear()} Ant Global.
          <a
            href="https://muhammednihad.com"
            className="ml-1 italic text-accent-700 hover:text-accent-950"
            target="_blank"
            rel="noopener noreferrer"
          >
            Crafted by Muhammednihad.com
          </a>
        </p>
        <span className="mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
          <a
            href="www.instagram.com/"
            className="text-accent-950 hover:text-accent-700"
          >
            <InstagramLogo size={30} />
          </a>
          <a
            href="www.facebook.com"
            className="ml-3 text-accent-950 hover:text-accent-700"
          >
            <FacebookLogo size={30} />
          </a>
        </span>
      </div>
    </footer>
  );
};
