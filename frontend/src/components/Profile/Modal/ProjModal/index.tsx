import React, { useState } from "react";
import SearchDropdown from "../../SearchDropdown";

interface ProjModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
}

interface Project {
  name: string;
  skills: string;
  description: string;
}

const ProjModal: React.FC<ProjModalProps> = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const skillsOptions = [
    "Python",
    "Django",
    "Django REST Framework",
    "Java",
    "JavaScript",
    "React"
  ];

  const handleRemoveSkill = (e: React.MouseEvent<HTMLButtonElement>, skillToRemove: string) => {
    e.preventDefault();
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleSelectSkill = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
      setSearchTerm("");
    }
  };

  if (!isOpen) return null;

  const handleSave = () => {
    const newProject = {
      name,
      skills,
      description,
    };

    onSave(newProject);
    onClose();
    setName("");
    setSkills("");
    setDescription("");
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 md:mx-0 md:w-2/3 lg:w-1/2">
        <div className="border-b border-gray-200 px-4 py-3 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Novo Projeto</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            ✖
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="border border-gray-300 rounded-lg">
            <label className="sr-only" htmlFor="project-name">Nome do Projeto</label>
            <input
              className="w-full rounded-lg border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Nome do Projeto"
              type="text"
              id="project-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="">
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

          <div className="border border-gray-300 rounded-lg">
            <label className="sr-only" htmlFor="project-description">Descrição</label>
            <textarea
              className="w-full rounded-lg border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Descrição do Projeto"
              rows={3}
              id="project-description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="px-4 py-3 border-t flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Fechar
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjModal;