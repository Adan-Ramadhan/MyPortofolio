const dataExprerience = [
  {
    title: "Wordpress/Web Developer",
    company: "Freelance",
    year: "2024 - Present",
    jobdesk: [
      {
        id: 1,
        title:
          "Create landing page, invitation wedding, company profile with Wordpress Elementor",
      },
      
    ],
  },
  {
    title: "Intern Wordpress Developer",
    company: "PT Artapuri Digital Mediatama",
    year: "Mei 2022 - Juli 2023",
    jobdesk: [
      {
        id: 1,
        title:
          "Responsible for developing responsive interfaces on websites with relevant design or UI/UX.",
      },
      {
        id: 2,
        title: "Create a custom landing page/website",
      },
      {
        id: 3,
        title: "Repairing errors on websites, plugins and database.",
      },
      {
        id: 4,
        title: "Manage website databases and migrate databases between hosting",
      },
      {
        id: 5,
        title: "Responsible for increasing website speed",
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="w-full min-h-full">
      <div className="w-full md:w-1/2 md:mx-auto p-3">
        <h3 className="font-semibold text-xl mb-3 underline underline-offset-8 decoration-3 decoration-second">
          Work Experience
        </h3>

        <div>
          {dataExprerience.map((item) => (
            <div key={item.title} className="mb-5">
              <h3 className="font-bold">{item.company}</h3>
              <p className="font-medium text-md mb-3">
                {item.title} - <span>({item.year})</span>
              </p>
      
              <ul >
                {item.jobdesk.map((job) => (
                  <li key={job.id} className="font-light text-md">- {job.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
