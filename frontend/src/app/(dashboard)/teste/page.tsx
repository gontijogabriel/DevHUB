'use client';

import React, { useState } from "react";

const Teste = () => {
    const [selectedOption, setSelectedOption] = useState<string[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [showOptions, setShowOptions] = useState(false);

    const options = [
        "Opts",
        "Oss",
        "asdsdaasd",
        "Option ssssss4",
        "dsadadsasdasdsadads",
        "dsas asdasd",
        "dasasd",
        "dadsadsasdasd",
        "adsasdasaaaa"
    ];

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectChange = (option: string) => {
        if (!selectedOption.includes(option)) {
            setSelectedOption([...selectedOption, option]);
            setSearchTerm("");
        }
        setShowOptions(false);
    };

    const handleRemoveOption = (optionToRemove: string) => {
        setSelectedOption(selectedOption.filter(option => option !== optionToRemove));
    };

    return (
        <div className="container mx-auto p-10">
            <section className="p-4">
                <div className="relative">
                    <input
                        type="text"
                        id="search"
                        placeholder="Skills..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setShowOptions(true);
                        }}
                        onClick={() => setShowOptions(true)}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                    />

                    {showOptions && (
                        <ul className="absolute w-full border border-gray-300 rounded-md mt-1 bg-white max-h-40 overflow-auto shadow-lg z-10">
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((option, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSelectChange(option)}
                                        className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                                    >
                                        {option}
                                    </li>
                                ))
                            ) : (
                                <li className="p-2 text-gray-500">No results found</li>
                            )}
                        </ul>
                    )}
                </div>
            </section>

            {selectedOption.length > 0 && (
                <section className="p-2">
                    <ul className="flex flex-wrap gap-2">
                        {selectedOption.map((option, index) => (
                            <li
                                key={index}
                                className="border border-gray-400 rounded-md flex items-center gap-2 p-2"
                            >
                                {option}
                                <button
                                    onClick={() => handleRemoveOption(option)}
                                    className="px-2 border border-red-500 bg-red-500 text-white rounded-md"
                                >
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
};

export default Teste;
