
export enum UserRole {
  PARENT = 'PARENT',
  TUTOR = 'TUTOR',
  ADMIN = 'ADMIN'
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}
