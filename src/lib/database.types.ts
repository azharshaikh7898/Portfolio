import { Timestamp } from 'firebase/firestore';

export interface Project {
  id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export interface Client {
  id: string;
  name: string;
  designation: string;
  description: string;
  image_url: string;
  created_at: Timestamp;
  updated_at: Timestamp;
}

export interface ContactForm {
  id: string;
  full_name: string;
  email: string;
  mobile_number: string;
  city: string;
  created_at: Timestamp;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  created_at: Timestamp;
}
