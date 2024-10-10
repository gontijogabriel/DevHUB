import Link from "next/link";
import { ProjectType } from "@/types/TypeData";
import { IoLogoGithub } from "react-icons/io";

const Project: React.FC<ProjectType> = ({ link, name, descr, skills }) => {
    return (

        <Link
            href={link}
            target="_blank"
            className="flex flex-col items-start p-2 dark:bg-gray-50 bg-gray-200 rounded-md hover:bg-gray-300"
        >
            <div>
                <h3 className="text-lg font-medium text-gray-900">{name}</h3>
                <p className="text-gray-700 text-sm">{descr}</p>
                <span className="flex flex-wrap gap-1 mt-1">
                    {skills.map((skill, index) => (
                        <span
                            key={index}
                            className="whitespace-nowrap rounded-full text-gray-700 px-2.5 font-bold py-0.5 text-xs bg-gray-400">
                            {skill}
                        </span>
                    ))}
                </span>
            </div>
        </Link>

    );
};

export default Project;
