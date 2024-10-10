
export type SkillType = {
    name: string;
};

export type ProjectType = {
    link: string;
    name: string;
    descr: string;
    skills: string[];
};

export type ExperienceType = {
    start_at: string;
    end_at?: string;
    company: string;
    stack?: string;
    description: string;
};

export type UserType = {
    first_name: string;
    last_name: string;
    avatar_url: string;
    stack: string;
    bio: string;
    skills: string[];
    projects: ProjectType[];
    experience: ExperienceType[];
};
