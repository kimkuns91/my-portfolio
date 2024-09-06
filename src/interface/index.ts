export interface Projects {
  id: number;
  title: string;
  description: string;
  link?: string;
  images: string[];
  created_at: string;
}

export interface ContactFormType {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}
