import { SkillType } from "@/types/TypeData";

const Skill: React.FC<SkillType> = (skill) => {
    return (
        <span className="whitespace-nowrap rounded-full px-2.5 py-1 font-bold sm:text-sm text-xs text-gray-700 bg-gray-400">
            {skill.name}
        </span>
    );
};

export default Skill;