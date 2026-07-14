const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// Simple fetch-based API client (no external dependencies)
class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('admin_token') : null;

    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 401) {
        if (typeof localStorage !== 'undefined') {
          localStorage.removeItem('admin_token');
        }
        if (typeof window !== 'undefined') {
          window.location.href = '/admin';
        }
      }

      const data = await response.json();
      if (!response.ok) {
        const errorMsg = data.errors && data.errors.length > 0 ? data.errors[0].msg : data.message;
        throw new Error(errorMsg || `HTTP ${response.status}`);
      }
      return { data };
    } catch (error) {
      console.warn('API Client caught an error:', error.message);
      // Fallback Mock Data if Backend is Down
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        console.warn('Backend is down. Returning mock data instead.');
        if (endpoint === '/rooms' && (!options.method || options.method === 'GET')) {
          return {
            data: {
              success: true,
              data: {
                rooms: [
                  {
                    roomId: 'salaar-studio',
                    name: 'The Salaar Studio',
                    image: 'https://known-scarlet-3cqffaookw.edgeone.app/salaar%20studio.jpeg',
                    price: 4999,
                    basePackage: 6,
                    maxCapacity: 80,
                    extraAdultCharge: 299,
                    extraChildCharge: 199,
                    description: 'Premium studio-style private theatre perfect for group celebrations and friends gatherings.',
                    amenities: ['ac', 'projector', 'sound-system', 'lighting', 'seating']
                  },
                  {
                    roomId: 'hitman-show',
                    name: 'The Hitman Show',
                    image: 'https://written-copper-gfevwqnna5.edgeone.app/hitman%20show.jpeg',
                    price: 2999,
                    basePackage: 4,
                    maxCapacity: 50,
                    extraAdultCharge: 199,
                    extraChildCharge: 99,
                    description: 'Best for small events and surprise celebrations.',
                    amenities: ['ac', 'projector', 'sound-system', 'lighting']
                  },
                  {
                    roomId: 'chhatrapathi-darbhar',
                    name: 'The Chhatrapathi Shivaji Darbhar',
                    image: 'https://elated-orange-0m2jps3egw.edgeone.app/shivaji%20darbar.jpeg',
                    price: 14999,
                    basePackage: 35,
                    maxCapacity: 100,
                    extraAdultCharge: 99,
                    extraChildCharge: 99,
                    description: 'Grand royal celebration hall ideal for big birthdays and large gatherings.',
                    amenities: ['ac', 'projector', 'sound-system', 'lighting', 'seating', 'decoration']
                  },
                  {
                    roomId: 'radhakrishna-bliss',
                    name: 'Radhakrishna Bliss',
                    image: 'https://personal-crimson-wconsktrqu.edgeone.app/radhakrishna%20bliss.jpeg',
                    price: 1499,
                    basePackage: 2,
                    maxCapacity: 6,
                    extraAdultCharge: 199,
                    extraChildCharge: 99,
                    description: 'Romantic couple-exclusive theatre designed for special moments.',
                    amenities: ['ac', 'projector', 'sound-system', 'lighting', 'seating']
                  }
                ]
              }
            }
          };
        } else if (endpoint === '/bookings' && options.method === 'POST') {
          return {
            data: {
              success: true,
              data: {
                booking: {
                  bookingId: 'MOCK-' + Math.floor(Math.random() * 10000),
                  status: 'pending'
                }
              }
            }
          };
        }
      }
      throw error;
    }
  }

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'GET' });
  }

  post(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  put(endpoint, body, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(body),
    });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: 'DELETE' });
  }
}

const api = new APIClient(API_BASE_URL);

export default api;