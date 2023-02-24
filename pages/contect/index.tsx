import { createElement, JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useRef } from "react";
import { content } from "../../utills/Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const { Contact } = content;
  const form = useRef(null as any);

 
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'service_0aexns9', 'template_pnpebp6', form.current, 'ckASLK0PJ4UrZkAUU'
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email submited successfully")
          form.current.reset();
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("network Error, please connect to internet");
        }
      );
  };

  return (
    <section className="bg-dark_primary text-black" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="text-xl font-bold text-slate-100" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle text-white" data-aos="fade-down">
          {Contact.subtitle}
        </h4>
     
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
          
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="border  focus:outline-none border-slate-600 p-3 rounded text-md font-bold "
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email"
              required
              className="border focus:outline-none border-slate-600 p-3 rounded font-bold"
            />
            <textarea
              name="message"
              placeholder="Tell me What you want..."
              className="border  focus:outline-none border-slate-600 p-3 rounded font-bold h-44"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-blue-500 rounded-md p-2 text-dark_primary"
            >
              Hit Me Up!
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {Contact.social_media.map((content: { icon: any; link: string | undefined; text: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, i: Key | null | undefined) => (
              <div
                key={i}
                data-aos="fade-down"
                className="flex items-center gap-2"
              >
                <h4 className="text-white">{createElement(content.icon)}</h4>
                <a className="font-md text-white" href={content.link} target="_blank" rel="noreferrer">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
