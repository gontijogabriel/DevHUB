'use client';

import { useState } from "react";
import { motion } from "framer-motion";

const Cadastro = () => {
    const [isForm, setIsForm] = useState(false);

    const openForm = (value) => {
        setIsForm(!value);
    };

    return (
        <main className="container mx-auto h-screen flex items-center">

            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 flex flex-col">
                <motion.div
                    className="mx-auto max-w-lg text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="/">
                        <h1 className="font-jersey20 font-bold text-6xl md:text-7xl">
                            <span className="hidden md:inline">&lt;DevHUB/&gt;</span>
                            <span className="md:hidden">&lt;DH/&gt;</span>
                        </h1>
                    </a>

                    <p className="mt-4 text-gray-500">
                        <a
                            href="#"
                            rel="noreferrer"
                            target="_blank"
                            className="transition hover:text-gray-700/75 dark:hover:text-gray-500 flex items-center justify-around text-gray-900 bg-gray-300 p-2 rounded-lg"
                        >
                            <span className="sr-only">GitHub</span>
                            <svg className="size-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path
                                    fillRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Registre com GitHub!
                        </a>
                    </p>
                </motion.div>

                <motion.div
                    className="mt-4 mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.span
                        onClick={() => openForm(isForm)}
                        className="flex items-center gap-1 underline text-gray-500 cursor-pointer hover:text-gray-700"
                    >
                        <p>Ou pelo formulário</p>
                    </motion.span>
                </motion.div>

                {isForm && (
                    <motion.form
                        action="#"
                        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div>
                            <label htmlFor="text" className="sr-only">Username</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter username"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="sr-only">Repeat Password</label>
                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Repeat password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                                <input type="checkbox" name="" id="" />
                                <p>Accept</p>
                                <a className="underline" href="#">terms</a>
                            </span>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Register
                            </motion.button>
                        </div>
                    </motion.form>
                )}
            </div>
        </main>
    );
};

export default Cadastro;