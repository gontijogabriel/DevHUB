import Image from "next/image";
import NotFoundPic from '../../../../public/images/notfound.png';
import { IoAddCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Projetos = () => {

    const found = true

    return (
        <>
            <main className="container mx-auto w-full">

                {found == true ? (
                    <>
                        <section className="flex items-center justify-between p-2 gap-2 sm:gap-4 sm:p-2">

                            <div className="relative w-80">
                                <label htmlFor="Search" className="sr-only">Search</label>
                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Search for..."
                                    className="w-full rounded-md p-2.5 sm:text-sm outline-none dark:text-gray-900 dark:bg-gray-50 bg-gray-200"
                                />
                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="size-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <a href="#" className="dark:text-gray-900 rounded-md dark:bg-gray-50 bg-gray-200">
                                <span className="flex items-center p-2.5 gap-1">
                                    <IoAddCircleOutline size={25} />
                                    <span className="hidden sm:block">Novo Projeto</span>
                                </span>
                            </a>
                        </section>

                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">

                            <div className="max-w-lg mx-auto rounded-lg overflow-hidden dark:text-gray-900 dark:bg-gray-50 bg-gray-200">
                                <div className="px-6 py-4">
                                    <h2 className="text-xl font-bold">Nome do Projeto</h2>
                                    <p className="text-xs mb-4">01/09/2024</p>
                                    <div className="flex items-center mb-4">
                                        <img className="w-10 h-10 rounded-full mr-4" src="https://media.licdn.com/dms/image/v2/D4D03AQGta27cWiG5PA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683504701308?e=1731542400&v=beta&t=Rhc1lKYZMlJXAAF9sUmyxsRkINFTvZp4Pki6zjJg3GY" alt="Avatar do usuário" />
                                        <div className="text-sm">
                                            <p className="leading-none">João Silva</p>
                                            <p className="">Full Stack</p>
                                        </div>
                                    </div>
                                    <p className="text-base mb-4">
                                        Este projeto visa desenvolver uma aplicação web moderna para gerenciar tarefas em equipes distribuídas, com foco em escalabilidade e eficiência.
                                    </p>
                                    <h4 className="text-lg font-semibold">Procurando por</h4>
                                    <ul className="list-disc list-inside mb-4">
                                        <li>Full Stack</li>
                                        <li>Backend</li>
                                        <li>Frontend</li>
                                    </ul>
                                    <h4 className="text-lg font-semibold">Habilidades Necessárias</h4>
                                    <ul className="list-disc list-inside mb-4">
                                        <li>Controle de Versão com GitHub</li>
                                    </ul>
                                    <h4 className="text-lg font-semibold">Participantes</h4>
                                    <ul className="list-disc list-inside mb-4">
                                        <li>João Silva - Full Stack</li>
                                    </ul>
                                    <div className="flex justify-between space-x-4">
                                        <a href="#" className="flex items-center space-x-2 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                                            <FaRegHeart />
                                            <span>Like</span>
                                        </a>
                                        <a href="#" className="flex items-center space-x-2 bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105">
                                            <RiLogoutCircleRLine />
                                            <span>Participar</span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </section>
                    </>
                ) : (
                    <section className="mx-auto max-w-2xl p-4 sm:p-6 lg:p-8 text-center">
                        <span>
                            <h1 className="text-2xl font-bold mb-4">
                                Nenhum projeto encontrado!
                            </h1>
                            <a href="#" className="inline-block dark:text-gray-900 dark:bg-gray-50 bg-gray-200 text-gray-800 rounded-md shadow-md hover:bg-gray-300 transition-colors duration-300">
                                <span className="flex items-center p-2.5 gap-2">
                                    <IoAddCircleOutline size={25} />
                                    <span className="sm:inline-block text-base font-medium">Crie um novo projeto agora!</span>
                                </span>
                            </a>
                        </span>
                        <figure className="relative">
                            <Image
                                alt="Designed by Freepik"
                                src={NotFoundPic}
                                className="h-auto w-full object-cover sm:rounded-ss-[30px] md:rounded-ss-[60px]"
                            />
                            <figcaption className="text-center text-xs text-gray-500 mt-2">
                                Designed by <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-700">Freepik</a>
                            </figcaption>
                        </figure>
                    </section>
                )}
            </main>
        </>
    )
}

export default Projetos;