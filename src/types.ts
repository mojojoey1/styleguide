export interface TeamMember {
    name: string;
    title?: string;
    imageUrl?: string;
    isManager: boolean;
}

export interface Team {
    name: string;
    manager: TeamMember;
    members: TeamMember[];
}

export interface Organization {
    teams: Team[];
} 