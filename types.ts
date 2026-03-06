
export interface Room {
  id: string;
  name: string;
  image: string;
  price: number;
  basePackage: number;
  maxCapacity: number;
  extraAdultCharge: number;
  extraChildCharge: number;
  description: string;
}

export interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
}

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  roomId: string;
  date: string;
  timeSlot: string;
  adults: number;
  children: number;
  addons: string[];
  totalPrice: number;
  paymentOption: 'full' | 'half';
  paymentMethod: 'online' | 'manual';
  amountPaid: number;
  status: 'pending' | 'confirmed';
  createdAt: number;
}

export interface AdminCredentials {
  username: string;
  token: string;
}
