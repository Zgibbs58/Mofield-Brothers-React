import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Footer = () => {
  return (
    <footer className="flex flex-col py-4 px-6 md:px-24 bg-yellow-950 dark:bg-base-200 text-gray-200 gap-3">
      <div className="grid md:grid-cols-2 items-center">
        <div className="hidden md:flex justify-start">
          <Image className="hidden md:block" src="/images/mofieldLogoWhite.png" alt="Mofield Brothers Contruction Logo" width={300} height={100} />
        </div>
        <nav className="grid grid-flow-col md:grid-cols-auto gap-x-3 lg:gap-x-6 justify-center md:justify-end">
          <NavLinks />
        </nav>
      </div>
      <div className="md:hidden flex justify-center">
        <Image src="/images/mofieldLogoWhite.png" alt="Mofield Brothers Contruction Logo" width={200} height={100} />
      </div>
      <aside className="flex flex-col justify-center text-center items-center">
        <p className="text-xs md:text-sm">© {new Date().getFullYear()} Mofield Brothers Contruction Co., LLC. All rights reserved.</p>
        <p className="text-xs md:text-sm">
          Website crafted by{" "}
          <a className="text-yellow-300" href="https://www.zacharywgibbs.com/">
            Zach Gibbs
          </a>{" "}
          - Elevate your online presence with my design and development services.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
