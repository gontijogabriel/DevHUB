import React, { useState } from "react";

interface Experience {
  company: string;
  type: string;
  start: string;
  end: string;
  description: string;
  current: boolean;
}

interface ExpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (experience: Experience) => void;
}

const ExpModal: React.FC<ExpModalProps> = ({ isOpen, onClose, onSave }) => {
  const [experience, setExperience] = useState<Experience>({
    company: "",
    type: "",
    start: "",
    end: "",
    description: "",
    current: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setExperience((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExperience((prev) => ({ ...prev, current: e.target.checked }));
  };

  const handleSave = () => {
    onSave(experience);
    onClose();
    setExperience({ company: "", type: "", start: "", end: "", description: "", current: false }); // Limpa o formulário
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h3 className="text-lg font-bold mb-4">Adicionar Experiência</h3>

        <div className="grid grid-cols-1 gap-4">
          <input
            id="company"
            placeholder="Empresa"
            className="w-full rounded-lg border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
            value={experience.company}
            onChange={handleInputChange}
          />

          <input
            id="type"
            placeholder="Tipo (ex: Tempo integral)"
            className="w-full rounded-lg border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
            value={experience.type}
            onChange={handleInputChange}
          />

          <input
            id="start"
            placeholder="Data de Início"
            type="date"
            className="w-full rounded-lg border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
            value={experience.start}
            onChange={handleInputChange}
          />

          <div className="flex items-center">
            <input
              id="end"
              placeholder="Data de Final"
              type="date"
              className="w-full rounded-lg border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
              value={experience.end}
              onChange={handleInputChange}
              disabled={experience.current} // Desabilita se a experiência estiver marcada como "Atual"
            />
            <label className="ml-2">
              <input
                type="checkbox"
                checked={experience.current}
                onChange={handleCheckboxChange}
              />
              Atual
            </label>
          </div>

          <textarea
            id="description"
            placeholder="Descrição da Experiência"
            className="w-full rounded-lg border-gray-300 p-3 text-sm focus:outline-none focus:ring focus:ring-indigo-200"
            value={experience.description}
            onChange={handleInputChange}
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleSave}
          >
            Salvar
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExpModal;