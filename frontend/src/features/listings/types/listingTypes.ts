export interface Category {
  id: number;
  name: string;
}

export interface Make {
  id: number;
  categoryId: number;
  name: string;
}

export interface Model {
  id: number;
  makeId: number;
  name: string;
}

export interface ListingImage {
  id: number;
  listingId: number;
  imageUrl: string;
  isMain: boolean;
}

export interface UserSummary {
  id: number;
  email: string;
  role: 'private' | 'dealer';
  phoneNumber?: string;
  createdAt: string;
}

export interface Listing {
  id: number;
  userId: number;
  categoryId: number;
  makeId: number;
  modelId: number;
  title: string;
  description: string;
  price: number;
  productionYear: number;
  mileage: number;
  fuelType: string;
  engineCapacity: number;
  enginePower: number;
  gearbox: string;
  bodyType: string;
  color: string;
  countryOfOrigin: string;
  steeringWheelSide?: string;
  condition: 'Nowy' | 'Używany' | string;
  location: string;
  status?: 'aktywne' | 'nieaktywne' | string;
  isFeatured: boolean;
  createdAt: string;

  // Relacje dodawane przez json-server (_expand / _embed)
  category?: Category;
  make?: Make;
  model?: Model;
  user?: UserSummary;
  images?: ListingImage[];
}
