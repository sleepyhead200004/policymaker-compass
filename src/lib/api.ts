// API Configuration
// Update this URL to point to your backend API
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://your-api-url.com/api';

// Blog Types
export interface ApiBlog {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  author: string;
  read_time: string;
  tags: string[];
  created_date: string;
  createdAt: string;
  updatedAt: string;
}

// Team Types
export interface ApiTeamMember {
  _id: string;
  name: string;
  position: string;
  skills: string[];
  linkedin_link?: string;
  email?: string;
  createdAt: string;
  updatedAt: string;
}

// Blog API
export const blogApi = {
  getAll: async (): Promise<ApiBlog[]> => {
    const response = await fetch(`${API_BASE_URL}/blogs`);
    if (!response.ok) throw new Error('Failed to fetch blogs');
    return response.json();
  },

  getById: async (id: string): Promise<ApiBlog> => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`);
    if (!response.ok) throw new Error('Blog not found');
    return response.json();
  },

  getRecommendations: async (id: string): Promise<ApiBlog[]> => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}/recommendations`);
    if (!response.ok) throw new Error('Failed to fetch recommendations');
    return response.json();
  },
};

// Team API
export const teamApi = {
  getAll: async (): Promise<ApiTeamMember[]> => {
    const response = await fetch(`${API_BASE_URL}/team`);
    if (!response.ok) throw new Error('Failed to fetch team members');
    return response.json();
  },

  getById: async (id: string): Promise<ApiTeamMember> => {
    const response = await fetch(`${API_BASE_URL}/team/${id}`);
    if (!response.ok) throw new Error('Team member not found');
    return response.json();
  },
};
