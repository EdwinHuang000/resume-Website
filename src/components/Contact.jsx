function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-center  my-3 h-full sm:h-[70vh] items-center  "
    >
      <div className="flex flex-col sm:flex-row md:flex-row   max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 ">
          <div className="p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl text-white">
              Contact <span>Me</span>
            </h1>
            <p className="text-normal text-lg font-medium text-gray-400 mt-2">
              Let us contact on Linkeln <br />
              or send me an email
            </p>
            <div className="flex items-center mt-2 text-gray-400">
              <a href="/">✉️</a>
              <div className="ml-4 text-md tracking-">
                <p>Ziyang Huang</p>
              </div>
            </div>
          </div>
        </div>
        <form
          action=""
          method="post"
          className="p-6 flex flex-col justify-center max-w-[700px]"
        >
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
          </div>
          <div className="flex flex-col mt-2">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
          </div>
          <div className="flex flex-col mt-2">
            <textarea
              name="message"
              id="message"
              placeholder="your message"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <button
            type="submit"
            className=" bg-primary-color text-white py-3 px-6 rounded-lg mt-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
