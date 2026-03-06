
import { Room, Addon } from './types';

export const ROOMS: Room[] = [
  {
    id: 'salaar-studio',
    name: 'The Salaar Studio',
    image: 'https://images.unsplash.com/photo-1595764430415-e21b43d28ff5?q=80&w=1400&auto=format&fit=crop', // Industrial Studio Cinema
    price: 4999,
    basePackage: 6,
    maxCapacity: 80,
    extraAdultCharge: 299,
    extraChildCharge: 199,
    description: 'Premium studio-style private theatre perfect for group celebrations and friends gatherings.'
  },
  {
    id: 'hitman-show',
    name: 'The Hitman Show',
    image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1400&auto=format&fit=crop', // Sleek Cinema Show
    price: 2999,
    basePackage: 4,
    maxCapacity: 50,
    extraAdultCharge: 199,
    extraChildCharge: 99,
    description: 'Best for small events and surprise celebrations.'
  },
  {
    id: 'chhatrapathi-darbhar',
    name: 'The Chhatrapathi Shivaji Darbhar',
    image: 'https://images.unsplash.com/photo-1524492459426-030296340242?q=80&w=1400&auto=format&fit=crop', // Grand Indian Palace/Royal theme
    price: 14999,
    basePackage: 35,
    maxCapacity: 100,
    extraAdultCharge: 99,
    extraChildCharge: 99,
    description: 'Grand royal celebration hall ideal for big birthdays and large gatherings.'
  },
  {
    id: 'radhakrishna-bliss',
    name: 'Radhakrishna Bliss',
    image: 'https://images.unsplash.com/photo-1516589174184-c685266e48df?q=80&w=1400&auto=format&fit=crop', // Romantic Couple Bliss
    price: 1499,
    basePackage: 2,
    maxCapacity: 6,
    extraAdultCharge: 199,
    extraChildCharge: 99,
    description: 'Romantic couple-exclusive theatre designed for special moments.'
  }
];

export const ADDONS: Addon[] = [
  { id: 'fog', name: 'Fog Effect', price: 300, description: 'Cinematic fog entry' },
  { id: 'balloons', name: 'Extra Balloon Decoration', price: 300, description: 'Premium balloons' },
  { id: 'candles', name: 'Candle Path Decoration', price: 300, description: 'Romantic candle path' },
  { id: 'photography', name: 'Photography', price: 600, description: 'Professional shoot' },
  { id: 'videography', name: 'Videography', price: 1000, description: 'Event coverage' }
];

export const TIME_SLOTS = [
  "10:00 AM - 01:00 PM",
  "01:30 PM - 04:30 PM",
  "05:00 PM - 08:00 PM",
  "08:30 PM - 11:30 PM"
];

export const GOOGLE_FORM_PAYMENT_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSerbXyLaYyRgyynYqXDMmB-JcXvrlXXt45vVsFsH30jAtCMQg/viewform?usp=publish-editor";
