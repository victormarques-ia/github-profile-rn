export interface ProjectProps {
  name: string;
  html_url: string;
  language: string;
}

export interface UserProps {
  infos: {
    name: string;
    bio: string;
    imageUrl: string;
    url: string;
  };
  projects: Array<ProjectProps>;
}
