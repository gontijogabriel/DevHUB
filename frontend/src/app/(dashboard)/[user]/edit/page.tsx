'use client';

import ExpModal from "@/components/Profile/Modal/ExpModal";
import ProjModal from "@/components/Profile/Modal/ProjModal";
import SocialModal from "@/components/Profile/Modal/SocialModal";
import SearchDropdown from "@/components/Profile/SearchDropdown";
import { useAuth } from "@/context/AuthContext";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";

interface Project {
    name: string;
    skills: string;
    description: string;
}

interface Experience {
    company: string;
    type: string;
    start: string;
    end: string;
    description: string;
    current: boolean;
}

interface Session {
    username: string;
    avatar: string;
    first_name: string,
    last_name: string,
    email?: string
}


const Edit = () => {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isProjModalOpen, setIsProjModalOpen] = useState(false);
    const [projects, setProjects] = useState<Project[]>([]);
    const [isExpModalOpen, setIsExpModalOpen] = useState(false);
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
    const [socials, setSocials] = useState<{ platform: string; link: string }[]>([]);

    const { session } = useAuth() as {
        session: Session | null;
    };

    const skillsOptions = [
        "Python",
        "Django",
        "Django REST Framework",
        "Java",
        "JavaScript",
        "React"
    ];

    const handleSelectSkill = (skill: string) => {
        if (!selectedSkills.includes(skill)) {
            setSelectedSkills([...selectedSkills, skill]);
            setSearchTerm("");
        }
    };

    const handleRemoveSkill = (e: React.MouseEvent<HTMLButtonElement>, skillToRemove: string) => {
        e.preventDefault();
        setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
    };

    const ProjOpenModal = () => setIsProjModalOpen(true);
    const ProjCloseModal = () => setIsProjModalOpen(false);
    const ProjSaveProject = (project: Project) => {
        setProjects((prevProjects) => [...prevProjects, project]);
    };

    const handleDeleteProject = (index: number) => {
        setProjects((prevProjects) => prevProjects.filter((_, i) => i !== index));
    };

    const handleOpenExpModal = () => setIsExpModalOpen(true);
    const handleCloseExpModal = () => setIsExpModalOpen(false);
    const handleSaveExperience = (experience: Experience) => {
        setExperiences((prevExperiences) => [...prevExperiences, experience]);
    };

    const handleDeleteExperience = (index: number) => {
        setExperiences((prevExperiences) => prevExperiences.filter((_, i) => i !== index));
    };

    const SocialOpenModal = () => setIsSocialModalOpen(true);
    const SocialCloseModal = () => setIsSocialModalOpen(false);
    const SocialSaveSocial = (social: { platform: string; link: string }) => {
        setSocials((prevSocials) => [...prevSocials, social]);
    };

    const handleDeleteSocial = (index: number) => {
        setSocials((prevSocials) => prevSocials.filter((_, i) => i !== index));
    };

    const [bio, setBio] = useState("");
    const maxBioLength = 150;

    const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setBio(e.target.value);
    };

    return (
        <main className="container max-w-5xl mx-auto sm:p-4 p-2">
            <div className="p-4 sm:p-8 lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-6">

                    {/* Foto e Nome */}
                    {session && (
                        <div className="flex flex-col items-center">
                            <img src={session.avatar} alt={`${session.first_name}'s avatar`} className="rounded-full w-32 h-32" />
                            <h1 className="mt-4 text-2xl font-bold">
                                {session.first_name} {session.last_name}
                            </h1>
                        </div>
                    )}

                    {/* Email, Telefone, Sociais */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
                                placeholder="E-mail"
                                type="email"
                                id="email"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="phone">Telefone</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
                                placeholder="Telefone"
                                type="tel"
                                id="phone"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="lastname">GitHub</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
                                placeholder="GitHub"
                                type="text"
                                id="lastname"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="name">Linkedin</label>
                            <input
                                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
                                placeholder="Linkedin"
                                type="text"
                                id="name"
                            />
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col gap-6">
                        <div className="w-full flex justify-evenly gap-6 sm:text-base text-sm">
                            {/* Full Stack */}
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="skills"
                                    id="full-stack"
                                    value="full stack"
                                    className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="full-stack"
                                    className="ml-2 text-gray-700 font-medium cursor-pointer"
                                >
                                    Full Stack
                                </label>
                            </div>

                            {/* Backend */}
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="skills"
                                    id="backend"
                                    value="backend"
                                    className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="backend"
                                    className="ml-2 text-gray-700 font-medium cursor-pointer"
                                >
                                    Backend
                                </label>
                            </div>

                            {/* Frontend */}
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    name="skills"
                                    id="frontend"
                                    value="frontend"
                                    className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 focus:ring-indigo-500"
                                />
                                <label
                                    htmlFor="frontend"
                                    className="ml-2 text-gray-700 font-medium cursor-pointer"
                                >
                                    Frontend
                                </label>
                            </div>
                        </div>

                        <section className="w-full">
                            <div>
                                <SearchDropdown options={skillsOptions} onSelect={handleSelectSkill} />

                                {selectedSkills.length > 0 && (
                                    <ul className="flex flex-wrap gap-2">
                                        {selectedSkills.map((skill, index) => (
                                            <li key={index} className="border border-gray-300 rounded-md p-2">
                                                {skill}
                                                <button
                                                    onClick={(e) => handleRemoveSkill(e, skill)}
                                                    className="ml-2 px-2 bg-red-500 text-white rounded-md"
                                                >
                                                    X
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </section>
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="sr-only" htmlFor="message">Bio</label>
                        <textarea
                            className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
                            placeholder="Bio"
                            id="message"
                            maxLength={maxBioLength}
                            value={bio}
                            onChange={handleBioChange}
                        ></textarea>
                        <span className="text-sm pl-1">
                            {maxBioLength - bio.length} caracteres restantes
                        </span>
                    </div>

                    {/* Experiências */}
                    <div className="">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold">Experiências</h3>
                            <button
                                type="button"
                                onClick={handleOpenExpModal}
                                className="flex items-center sm:w-auto rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
                            >
                                <h3 className="mr-1 sm:block hidden">Adicionar</h3>
                                <FaRegSquarePlus size={16} />
                            </button>
                        </div>

                        {experiences.length > 0 ? (
                            experiences.map((experience, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between w-full sm:text-base text-sm border border-gray-300 p-3 rounded-md mb-2"
                                >
                                    <div className="flex flex-col">
                                        <p>{experience.company}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteExperience(index)}
                                        className="px-2 bg-red-500 text-white rounded-md"
                                    >
                                        Excluir
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">Nenhuma experiência adicionada ainda.</p>
                        )}
                    </div>

                    {/* Projetos */}
                    <div className="">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold">Projetos</h3>
                            <button
                                type="button"
                                onClick={ProjOpenModal}
                                className="flex items-center sm:w-auto rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
                            >
                                <h3 className="mr-1 sm:block hidden">Adicionar</h3>
                                <FaRegSquarePlus size={16} />
                            </button>
                        </div>

                        {projects.length > 0 ? (
                            projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between w-full sm:text-base text-sm border border-gray-300 p-3 rounded-md mb-2"
                                >
                                    <div className="flex flex-col">
                                        <p>{project.name}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteProject(index)}
                                        className="px-2 bg-red-500 text-white rounded-md"
                                    >
                                        Excluir
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-gray-500">Nenhum projeto adicionado ainda.</p>
                        )}
                    </div>

                </form>
            </div>
            <ExpModal isOpen={isExpModalOpen} onClose={handleCloseExpModal} onSave={handleSaveExperience} />
            <ProjModal isOpen={isProjModalOpen} onClose={ProjCloseModal} onSave={ProjSaveProject} />
            <SocialModal isOpen={isSocialModalOpen} onClose={SocialCloseModal} onSave={SocialSaveSocial} />
        </main>
    );
};

export default Edit;
