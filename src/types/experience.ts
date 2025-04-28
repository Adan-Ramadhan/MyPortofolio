export type TExperience = {
    title: string;
    company: string;
    year: string;
    jobdesk: TJobdesk[];
}

type TJobdesk = {
    id: number;
    title: string
}