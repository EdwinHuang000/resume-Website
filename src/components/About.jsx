import aboutImg from "../assets/about4.jpeg";
function About() {
  return (
    <div className="py-10 text-white bg-[#232325] h-auto" id="about">
      <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="w-[400px] h-full">
          <img
            src={aboutImg}
            alt=""
            className="object-cover rounded-xl h-[300px] filter grayscale brightness-50 "
          />
        </div>
        <div className="p-3">
          <div className="text-gray-300 my-3 ">
            <h3 className="text-4xl font-semibold mb-5 mx-auto pl-6 ">
              About <span className="primary-text">Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos natus, beatae facilis rem delectus alias ipsa eaque in
              nostrum rerum distinctio hic. Obcaecati aperiam ullam dolorem
              reiciendis nam rerum optio!
            </p>
          </div>
        </div>
        <div className="flex mt-10 items-center gap-7">
          <div className="bg-[#333333] p-5 rounded-lg">
            <h3>
              11<span>+</span>
            </h3>
            <p>
              <span className="md:text-base text-xs">Projects</span>
            </p>
          </div>
          <div className="bg-[#333333] p-5 rounded-lg">
            <h3>
              1<span>+</span>
            </h3>
            <p>
              <span className="md:text-base text-xs">year experience</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
