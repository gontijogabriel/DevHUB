import { useState } from "react";

interface SearchDropdownProps {
    options: string[];
    onSelect: (option: string) => void;
}

const SearchDropdown = ({ options, onSelect }: SearchDropdownProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative">
            <div className="flex gap-2">
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
                    <button
                        type="button"
                        onClick={() => {
                            setSearchTerm("");
                            setShowOptions(false);
                        }}
                        className="px-4 border rounded-md bg-gray-200 hover:bg-gray-300"
                    >
                        X
                    </button>
                )}
            </div>

            {showOptions && (
                <ul className="absolute w-full border border-gray-300 rounded-md mt-1 bg-white max-h-40 overflow-auto shadow-lg z-10">
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                onClick={() => {
                                    onSelect(option);
                                    setSearchTerm("");
                                    setShowOptions(false);
                                }}
                                className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer"
                            >
                                {option}
                            </li>
                        ))
                    ) : (
                        <li className="p-2 text-gray-500">Nenhum resultado encontrado</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchDropdown;
