import { useState } from "react";

interface Social {
    platform: string;
    link: string;
}

interface SocialModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (social: Social) => void;
}

const SocialModal = ({ isOpen, onClose, onSave }: SocialModalProps) => {
    const [platform, setPlatform] = useState("");
    const [link, setLink] = useState("");

    const handleSave = () => {
        if (platform && link) {
            onSave({ platform, link });
            onClose();
        }
    };

    const sociais = [
        {
            social: 'GitHub',
        },
        {
            social: 'LinkedIn',
        },
        {
            social: 'Instagram',
        },
        {
            social: 'Twitter',
        },
        {
            social: 'website',
        }
    ]

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-lg font-bold mb-4">Adicionar Rede Social</h2>

                <div className="mb-4">
                    <label className="block text-sm">Plataforma</label>
                    <select
                        value={platform}
                        onChange={(e) => setPlatform(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none"
                    >
                        <option disabled>Selecione uma plataforma</option>
                        {sociais.map((social) => (
                            <option value={social.social}>{social.social}</option>
                        ))}

                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-sm">Link</label>
                    <input
                        type="text"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="w-full p-2 border rounded-md focus:outline-none"
                        placeholder="Ex: https://linkedin.com/in/seu-perfil"
                    />
                </div>

                <div className="flex justify-end gap-2">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">
                        Cancelar
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 bg-indigo-600 text-white rounded-md">
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialModal;
