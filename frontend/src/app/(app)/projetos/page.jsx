'use client'

import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoEnterOutline } from "react-icons/io5";

const Projetos = () => {


    return (
        <>
            <main className="container mx-auto w-full">

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


                <section className="px-2">

                    <div className="rounded-lg p-4 mx-auto mb-2 dark:text-gray-900 dark:bg-gray-50 bg-gray-200">
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-2 sm:mb-0">
                            <div className="mb-2">
                                <h2 className="text-2xl font-bold text-gray-800">Nome do Projeto</h2>
                                <p className="text-gray-500">01/09/2024</p>
                            </div>

                            <div className="flex items-center">
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Avatar do usuário"
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-800">João Silva</h3>
                                    <p className="text-gray-600">Full Stack Developer</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <p className="text-gray-600">
                                Este projeto visa desenvolver uma aplicação web moderna para gerenciar
                                tarefas em equipes distribuídas, com foco em escalabilidade e
                                eficiência.
                            </p>
                        </div>

                        <div className="mb-2">
                            <h3 className="text-xl font-semibold text-gray-800">Procurando por</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Full Stack Developer</li>
                                <li>Backend Developer</li>
                                <li>Frontend Developer</li>
                            </ul>
                        </div>

                        <div className="mb-2">
                            <h3 className="text-xl font-semibold text-gray-800">Habilidades Necessárias</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>Controle de versão com Git</li>
                                <li>Conhecimento em APIs RESTful</li>
                                <li>Experiência com Docker e Kubernetes</li>
                            </ul>
                        </div>

                        <div className="mb-2">
                            <h3 className="text-xl font-semibold text-gray-800">Participantes</h3>
                            <ul className="list-disc list-inside text-gray-600">
                                <li>João Silva - Full Stack Developer</li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-between">
                            <a href="#">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </a>

                            <a href="#">
                                <span className="flex gap-1 items-center">
                                    <IoEnterOutline size={40} />
                                    <p className="hidden sm:block font-bold text-lg">Participar</p>
                                </span>
                            </a>
                        </div>
                        
                    </div>

                </section>

            </main>
        </>
    )
}

export default Projetos;