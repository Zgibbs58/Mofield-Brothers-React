import { Bitter } from "next/font/google";
import ContactForm from "../../components/ContactForm";

const bitter = Bitter({subsets: ["latin"] });

export default function Contact() {

  return (
    <>
      <main className="overflow-x-hidden">
        <div className="hero h-50 md:h-60 relative bg-heroLg bg-center">
        <div className="hero-overlay bg-black bg-opacity-45"></div>
            <h3 className={`text-6xl font-semibold text-primary dark:text-base-content py-12 ${bitter.className}`}>Contact</h3>
        </div>
        <div className="mb-24 px-6 md:px-12">
          {/* <motion.h3
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={`text-4xl md:text-6xl font-semibold py-4 md:py-12 ${bitter.className}`}
          >
            Get in Touch
          </motion.h3> */}
          <div
            className="flex justify-start text-left md:gap-8 lg:gap-16  py-12 md:py-24 flex-wrap md:flex-nowrap"
          >
            <div className='w-full md:w-1/2 flex flex-col text-left pb-4'>
              <h4 className={`text-4xl md:text-6xl font-semibold py-4 ${bitter.className}`}>Get in Touch</h4>
              <p className='text-md md:text-lg'>
                We're here to help with your construction needs! Whether you have questions about our services or want to discuss a potential project, feel free to reach out. We're just a message away and look forward to speaking with you.
              </p>
            </div>
           <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
