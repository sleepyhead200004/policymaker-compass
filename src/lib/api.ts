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

// Auth Types
export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  _id: string;
  username: string;
  token: string;
}

// Helper to get auth header
const getAuthHeader = (): HeadersInit => {
  const token = sessionStorage.getItem('admin_token');
  return token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
};

// Auth API
export const authApi = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Invalid username or password');
    }
    return response.json();
  },

  logout: () => {
    sessionStorage.removeItem('admin_token');
    sessionStorage.removeItem('admin_user');
  },

  isAuthenticated: (): boolean => {
    return !!sessionStorage.getItem('admin_token');
  },

  getToken: (): string | null => {
    return sessionStorage.getItem('admin_token');
  },
};

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

  create: async (blog: Omit<ApiBlog, '_id' | 'createdAt' | 'updatedAt' | 'created_date'>): Promise<ApiBlog> => {
    const response = await fetch(`${API_BASE_URL}/blogs`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: JSON.stringify(blog),
    });
    if (!response.ok) throw new Error('Failed to create blog');
    return response.json();
  },

  update: async (id: string, blog: Partial<ApiBlog>): Promise<ApiBlog> => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: 'PUT',
      headers: getAuthHeader(),
      body: JSON.stringify(blog),
    });
    if (!response.ok) throw new Error('Failed to update blog');
    return response.json();
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/blogs/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    if (!response.ok) throw new Error('Failed to delete blog');
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

  create: async (member: Omit<ApiTeamMember, '_id' | 'createdAt' | 'updatedAt'>): Promise<ApiTeamMember> => {
    const response = await fetch(`${API_BASE_URL}/team`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: JSON.stringify(member),
    });
    if (!response.ok) throw new Error('Failed to create team member');
    return response.json();
  },

  update: async (id: string, member: Partial<ApiTeamMember>): Promise<ApiTeamMember> => {
    const response = await fetch(`${API_BASE_URL}/team/${id}`, {
      method: 'PUT',
      headers: getAuthHeader(),
      body: JSON.stringify(member),
    });
    if (!response.ok) throw new Error('Failed to update team member');
    return response.json();
  },

  delete: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/team/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    if (!response.ok) throw new Error('Failed to delete team member');
  },
};
