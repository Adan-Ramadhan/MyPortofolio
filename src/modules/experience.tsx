import { dataExprerience } from "../sources/experience";
import { TExperience } from "../types/experience";

const experiences: TExperience[] = dataExprerience;

if (!experiences) {
  console.log("data experience kosong");
}

const ExperienceList = () => {
  return (
    <>
      {experiences.length > 1 ? (
        experiences.map((item) => (
          <div key={item.title} className="mb-5">
            <h3 className="font-bold">{item.company}</h3>
            <p className="font-medium text-md mb-3">
              {item.title} - <span>({item.year})</span>
            </p>

            <ul>
              {item.jobdesk.map((job) => (
                <li key={job.id} className="font-light text-md">
                  - {job.title}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div>Belum ada experience.</div>
      )}
    </>
  );
};

const ExperienceModule = () => {
  return (
    <div className="w-full min-h-full">
      <div className="w-full md:w-1/2 md:mx-auto p-3">
        <h3 className="font-semibold text-xl mb-3 underline underline-offset-8 decoration-3 decoration-second">
          Work Experience
        </h3>

        <div>{ExperienceList()}</div>
      </div>
    </div>
  );
};

export default ExperienceModule;
