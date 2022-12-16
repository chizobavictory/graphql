export interface Hotel{
  title: string;
  image: string;
  address: string;
  price: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number; 
}

export interface CreateHotel{
  input: Hotel
}

export interface ArgsforupdateHotel{
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number; 
}

export interface UpdateHotel{
  input: ArgsforupdateHotel
}

export interface DeleteHotel{
  id: string;
}

export interface User{
  fullName: string;
  email: string;
  phoneNumber: number;
  password: string;
}

export interface CreateUser{
  input: User
}

