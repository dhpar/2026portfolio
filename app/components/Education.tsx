import resume from "../data/resume.json";

export function Education () {
  return (
    <>
        <h4>{resume.education.degree}</h4>
        <h5 className="italic">{resume.education.institution}</h5> 
        <p>{resume.education.graduationYear}</p>
        <p>Focus: {resume.education.focus}</p>
    </>
  );
}
