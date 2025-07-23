export interface Project {
  id: number;
  title: string;
  description: string;
  image: string | string[];
      features: string[];

  techStack: string[];
  size: 'large' | 'medium' | 'small';
}

export interface ProjectCardProps {
  title: string;
  image: string | string[]; 
  techStack: string[];
  size: "large" | "medium" | "small";
  onClick?: () => void;
}


export interface ProjectModalProps {
  selectedProject: {
    id: number;
    title: string;
    description: string;
    image: string | string[]; 
    features: string[];
    techStack: string[];
    size: 'large' | 'medium' | 'small';
  } | null;
  onClose: () => void;
}
