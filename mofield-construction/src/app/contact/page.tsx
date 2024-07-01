import { Bitter } from "next/font/google";
import ContactForm from "../../components/ContactForm";
import { Metadata } from "next";

export const meta: Metadata = {
  title: "Contact Us | Mofield Brothers Construction Company",
  description: "Contact us for a free estimate on your next project.",
  keywords: ["contact", "estimate", "project", "construction", "mofield", "mofield construction"],
  robots: "index, follow",
};

const bitter = Bitter({subsets: ["latin"] });

export default function Contact() {

  return (
    <>
      <main className="overflow-x-hidden">
        <div className="hero h-40 md:h-64 relative bg-heroLg bg-center">
        <div className="bg-yellow-800 bg-opacity-30 h-full w-full bg-gradient-to-br from-yellow-950 dark:from-stone-800 dark:bg-stone-900 dark:bg-opacity-40"></div>
            <h3 className={`text-4xl md:text-6xl font-semibold text-white py-12 ${bitter.className}`}>Contact</h3>
        </div>
        <div className="flex px-6 md:px-24">
           <ContactForm />
        </div>
      </main>
    </>
  );
}
