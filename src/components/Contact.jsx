import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-primary primary-bg flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://submit-form.com/fjqdLiZg"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 accent-color text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Submit form below</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name or Organization"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button
          type="submit"
          className="text-white border-2 hover:bg-[#f7ccac] hover:border-[#f7ccac] hover:text-gray-900 px-4 py-3 my-8 mx-auto flex items-center"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
