import { User } from '../zodSchema/register';

const API_URL = 'https://assign-api.piton.com.tr';

// Simulated API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const registerUser = async (userData: User) => {
  try {
    // Try API first
    const response = await fetch(`${API_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    
    // Store in localStorage as fallback
    localStorage.setItem('userData', JSON.stringify(userData));
    return data;
  } catch (error) {
    // Fallback to localStorage if API fails
    console.warn('API registration failed, falling back to localStorage');
    localStorage.setItem('userData', JSON.stringify(userData));
    return userData;
  }
};

export const loginUser = async (credentials: { email: string; password: string }) => {
  try {
    // Try API first
    const response = await fetch(`${API_URL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Invalid email or password');
    }

    const data = await response.json();
    
    // Store login status in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('currentUser', JSON.stringify({
      name: data.name,
      email: data.email
    }));
    
    return data;
  } catch (error) {
    // Fallback to localStorage if API fails
    console.warn('API login failed, falling back to localStorage');
    const storedUserData = localStorage.getItem('userData');
    if (!storedUserData) {
      throw new Error('No registered user found');
    }

    const userData = JSON.parse(storedUserData);
    
    if (userData.email === credentials.email && userData.password === credentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', JSON.stringify({
        name: userData.name,
        email: userData.email
      }));
      return userData;
    }
    
    throw new Error('Invalid email or password');
  }
}; 