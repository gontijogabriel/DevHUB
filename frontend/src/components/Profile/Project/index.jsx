import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";

const Project = ({ project }) => {
    return (
        <Link
            href={project.link}
            className="flex items-start gap-4 p-2 dark:bg-gray-50 bg-gray-200 rounded-lg"
        >
            <div className="rounded-lg p-2 bg-blue-600 text-white">
                <IoLogoGithub size={40} />
            </div>
            <div>
                <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                <p className="text-gray-700 font-extrabold">{project.descr}</p>
                <span className="flex flex-wrap gap-1 mt-1">
                    {project.skills.forEach((skill, index) => {
                        <span key={index} className="whitespace-nowrap rounded-full text-gray-700 px-2.5 font-bold py-0.5 text-xs bg-gray-400">
                            {skill}
                        </span>
                    })}
                </span>
            </div>
        </Link>
    );
};

export default Project;
