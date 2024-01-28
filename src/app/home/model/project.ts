export interface Project {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    isFinished: boolean;
    description: string;
    evidenceURL: string;
    business: string;
    technologies: string[];
}