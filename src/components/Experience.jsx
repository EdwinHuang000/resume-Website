function Experience() {
  return (
    <div id="experience" className="py-10 bg-[#232325]">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Experience</span>
      </h2>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p className="font-bold">Web Developer Intern</p>
        <p className="text-gray-400">iBuild.com (2023.03-2023.05)</p>
        <ul className="text-gray-500 list-disc list-inside mt-2">
          <li>
            Developed custom WordPress themes and plugins, contributing to over
            50 product pages.
          </li>
          <li>
            Used AWS services (EC2, S3, LightSail, RDS) for web hosting and data
            management.
          </li>
          <li>
            Conducted code reviews, improving code quality across 40+ pull
            requests.
          </li>
          <li>
            Collaborated effectively with the team lead in daily meetings.
          </li>
        </ul>
      </div>
      <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>
      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p className="font-bold">Full Stack Developer Intern</p>
        <p className="text-gray-400">Rescorter.app (2023.07-2023.11)</p>
        <ul className="text-gray-500 list-disc list-inside mt-2">
          <li>
            Contributed to tasks using Django, ReactJS, Redux, and PostgreSQL.
          </li>
          <li>
            Developed user-friendly interfaces with ReactJS and Bootstrap,
            managing state with Redux.
          </li>
          <li>
            Participated in the full development lifecycle, including code
            reviews and testing.
          </li>
          <li>
            Collaborated effectively in daily stand-ups and team environments.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
