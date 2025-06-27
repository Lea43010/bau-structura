// src/config/api.ts
const API_BASE_URL = import.meta.env.PROD 
  ? 'https://bau-structura.de/api'    // Production: Dein Replit-Backend
  : '/api';                          // Development: Proxy über Vite

interface ApiOptions extends RequestInit {
  headers?: Record<string, string>;
}

export const apiCall = async <T = any>(
  endpoint: string, 
  options: ApiOptions = {}
): Promise<T> => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      credentials: 'include', // Wichtig für Session-Cookies
      ...options,
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API Call failed:', error);
    throw error;
  }
};

// Beispiel-API-Funktionen (anpassen an deine App)
export const authApi = {
  login: (credentials: {email: string, password: string}) => 
    apiCall('/auth/login', { 
      method: 'POST', 
      body: JSON.stringify(credentials) 
    }),
  
  logout: () => 
    apiCall('/auth/logout', { method: 'POST' }),
  
  getCurrentUser: () => 
    apiCall('/auth/me')
};

export const projectApi = {
  getAll: () => apiCall('/projects'),
  getById: (id: string) => apiCall(`/projects/${id}`),
  create: (data: any) => apiCall('/projects', { 
    method: 'POST', 
    body: JSON.stringify(data) 
  })
};