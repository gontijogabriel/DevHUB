import { ExperienceType } from "@/types/TypeData";
import { GiStarsStack } from "react-icons/gi";


const Experience: React.FC<ExperienceType> = ({ start_at, end_at, company, stack, description }) => {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${month}/${year}`;
    };

    return (
        <div className="flex flex-col items-start gap-1 p-2 dark:bg-gray-50 bg-gray-200 rounded-md">
            <p className="text-gray-700 font-extrabold">{formatDate(start_at)} até {end_at ? formatDate(end_at) : 'Atual'}</p>
            <h3 className="text-lg font-medium text-gray-900">{company}</h3>
            <p className="text-gray-700 text-sm">{description}</p>
        </div>

    )
}

export default Experience