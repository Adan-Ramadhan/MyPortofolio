import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const social = [
  {
    url: "https://instagram.com/adaan_ramadhan",
    icon: <FaInstagram />,
    title: "Instagram",
  },
  {
    url: "https://www.linkedin.com/in/ahmad-dhiauddin-syahrul-ramadhan-5a074025b/",
    icon: <FaLinkedin />,
    title: "Linkedin",
  },
  {
    url: "https://github.com/Adan-Ramadhan",
    icon: <FaGithub />,
    title: "Github",
  },
];

const Contact = () => {
  return (
    <div className="w-full min-h-full">
      <div className="w-full md:w-1/2 md:mx-auto p-3">
        <h3 className="font-semibold text-xl mb-3 underline underline-offset-8 decoration-3 decoration-second">Connect With Me</h3>
        {social.map((item) => (
          <div key={item.title} className="mb-2">
            <a href={item.url} target="_blank" className="flex group items-center gap-x-3">
              <span className="text-lg group-hover:text-second">{item.icon}</span>
              <p className="font-semibold group-hover:text-second">{item.title}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
