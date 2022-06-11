import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rkcy7zw",
        "template_e4ina2e",
        form.current,
        "zCunqb-mh2y3i0vAY"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully Send");
          e.target.reset();
        },
        (error) => {
          toast.error("Sorry Try Again");
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact">
      <h1 className="text-center text-5xl mt-10">Contact Me</h1>
      <div className="divider">
        <span className="text-2xl text-secondary">get in touch</span>
      </div>
      <div className="hero mt-10 pb-10">
        <div className="hero-content flex-col lg:flex-row lg:ml-20">
          <AnimationOnScroll initiallyVisible={true}
  animateOnce={true} animateIn="animate__fadeInLeft">
            <div className="text-left lg:text-left">
              <h1 className="text-5xl font-bold">Get in Touch</h1>
              <p className="py-6">
              If you like my work and want to avail my services then drop me a message using the contact form. <br /> <br />
              Or get in touch using my email or my contact number.</p>
              <div className="flex-row mb-4">
                <p className="text-xl">Name</p>
                <p>Muhammad Shafi</p>
              </div>
              <div className="flex-row mb-4">
                <p className="text-xl">Adress</p>
                <p>Chattogram, Bangladesh</p>
              </div>
              <div className="flex-row mb-4">
                <p className="text-xl">Email</p>
                <p>dev.muhammadshafi@gmail.com</p>
              </div>
              <div className="flex-row mb-4">
                <p className="text-xl">Phone</p>
                <p>0179*****13</p>
              </div>
            </div>
          </AnimationOnScroll>
          <div className="divider lg:mr-36 lg:divider-horizontal">Contact</div>
          <AnimationOnScroll initiallyVisible={true}
  animateOnce={true} animateIn="animate__fadeInRight">
            <form ref={form} onSubmit={sendEmail}>
              <div className="card flex-shrink-0 lg:w-96 lg:mr-20 max-w-sm">
                <div className="card-body">
                  <h3 className="text-xl">Let’s talk how I can help you!</h3>
                  <div className="form-control flex-row">
                    <input
                      required
                      type="text"
                      name="user_name"
                      placeholder="Name"
                      className="input input-bordered input-secondary w-full max-w-xs mr-4 bg-base-200"
                    />
                    <input
                      required
                      type="text"
                      name="user_email"
                      placeholder="Email"
                      className="input input-bordered input-secondary w-full max-w-xs bg-base-200"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      required
                      type="text"
                      placeholder="Subject"
                      className="input input-bordered input-secondary w-full max-w-xs bg-base-200"
                    />
                  </div>
                  <div className="form-control">
                    <textarea
                      name="message"
                      className="textarea textarea-secondary bg-base-200"
                      placeholder="Message.."
                      required
                    ></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button
                      type="submit"
                      value="Send"
                      className="btn btn-secondary text-white"
                    >
                      Send Message<span className="pl-4 text-xl"><IoIosSend /></span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </AnimationOnScroll>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
