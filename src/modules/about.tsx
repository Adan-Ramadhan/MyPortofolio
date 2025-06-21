import { Link } from "react-router-dom";
const AboutModule = () => {
  return (
    <div className="w-full min-h-full">
      <div className="w-full md:w-1/2 md:mx-auto p-3 mb-10">
        <h3 className="font-semibold text-xl mb-3 underline underline-offset-4 decoration-3 decoration-second">About Me</h3>
        <p className="text-justify font-light mb-5">I'm Adan Ramadhan based on Cilegon Banten, i have skill in technology stack such as JavaScript, TypeScript, React, Next and Wordpress.</p>

        <Link to="/project" className="bg-primary rounded hover:bg-second font-semibold p-3 text-white">See Portofolio</Link>
      </div>
    </div>
  );
};

export default AboutModule;
