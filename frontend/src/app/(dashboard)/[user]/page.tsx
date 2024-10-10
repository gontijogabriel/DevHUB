'use client'

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UserType } from '@/types/TypeData';
import axios from 'axios';

import { GiStarsStack } from "react-icons/gi";
import { IoLogoGithub } from "react-icons/io";
import { LuUserPlus2 } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowRightSFill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

import Project from '@/components/Profile/Project';
import Skill from '@/components/Profile/Skill';
import Experience from '@/components/Profile/Experience';
import { useAuth } from '@/context/AuthContext';
import LinkedinIcon from '@/components/icons/LinkedinSVG';
import GitHubIcon from '@/components/icons/GitHubSVG';


interface Session {
    username: string;
    avatar: string;
}

interface SocialLink {
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    link: string;
}

const User = () => {
    const params = useParams();
    const user = params.user as string;
    const [userData, setUserData] = useState<UserType | null>(null);

    const { session } = useAuth() as {
        session: Session | null;
    };

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/users/${user}/`);
                console.log(response.data);
                setUserData(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        getUserData();
    }, [user]);

    const socialLinks: SocialLink[] = [
        {
            name: "GitHub",
            icon: GitHubIcon,
            link: "https://www.github.com",
        },
        {
            name: "LinkedIn",
            icon: LinkedinIcon,
            link: "https://www.linkedin.com",
        },
    ];

    if (!userData) return <p>Loading...</p>;

    return (
        <main className="container mx-auto sm:p-4 p-2 w-full flex flex-col items-center">
            <img
                alt={`${userData.first_name} ${userData.last_name}`}
                src={userData.avatar_url}
                className="w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-full bg-gradient-to-r dark:bg-gray-200 bg-gray-900 p-1"
            />

            <h1 className="mt-4 text-2xl font-bold">
                {userData.first_name} {userData.last_name}
            </h1>

            {userData.stack && <p>{userData.stack}</p>} {/* Mudança aqui para usar && */}

            {session?.username === user && (
                <a
                    href={`/${user}/edit`}
                    className="absolute top-18 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
                    aria-label="Editar Perfil"
                >
                    <FaEdit size={24} />
                </a>
            )}

            {/* Sociais */}
            <ul className="flex gap-4 py-4 pb-2">
                {socialLinks.map(({ name, icon: Icon, link }) => (
                    <li key={name}>
                        <a
                            href={link}
                            rel="noreferrer"
                            target="_blank"
                            className="transition hover:text-gray-700/75 dark:hover:text-gray-500"
                        >
                            <span className="sr-only">{name}</span>
                            <Icon className="sm:size-12 size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" />
                        </a>
                    </li>
                ))}
            </ul>

            <ul className="flex flex-wrap gap-2 mt-2 justify-center sm:max-w-lg">
                {userData.skills.map((skill, index) => (
                    <Skill key={index} name={skill} />
                ))}
            </ul>

            <p className="p-6 sm:p-8 text-center sm:text-lg text-sm">{userData.bio}</p>

            <section className="w-full flex flex-col gap-4 max-w-6xl">
                <details className="group">
                    <summary className="flex items-center justify-between p-4 bg-gray-300 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-400">
                        <div className="flex items-center gap-4 dark:text-zinc-900">
                            <GiStarsStack size={36} />
                            <h2 className="text-lg font-semibold dark:text-zinc-900">Experiência</h2>
                        </div>
                        <span className="transition-transform duration-300 group-open:rotate-90 dark:text-zinc-900">
                            <RiArrowRightSFill size={36} />
                        </span>
                    </summary>
                    <div className="px-4 py-2 flex flex-col gap-2">
                        {userData.experience.map((exp, index) => (
                            <Experience
                                key={index}
                                start_at={exp.start_at}
                                end_at={exp.end_at}
                                company={exp.company}
                                stack={exp.stack}
                                description={exp.description}
                            />
                        ))}
                    </div>
                </details>

                <details className="group">
                    <summary className="flex items-center justify-between p-4 bg-gray-300 rounded-md cursor-pointer transition-all duration-200 hover:bg-gray-400">
                        <div className="flex items-center gap-4 dark:text-zinc-900">
                            <IoLogoGithub size={36} />
                            <h2 className="text-lg font-semibold dark:text-zinc-900">Projetos</h2>
                        </div>
                        <span className="transition-transform duration-300 group-open:rotate-90 dark:text-zinc-900">
                            <RiArrowRightSFill size={36} />
                        </span>
                    </summary>
                    <div className="px-4 py-2 flex flex-col gap-2">
                        {userData.projects.map((project, index) => (
                            <Project
                                key={index}
                                link={project.link}
                                name={project.name}
                                descr={project.descr}
                                skills={project.skills}
                            />
                        ))}
                    </div>
                </details>
            </section>
        </main>
    );
};

export default User;