export interface User{
  fullName: string;
  email: string;
  phoneNumber: number;
  password: string;
}

export interface CreateUser{
  input: User
}

export interface updateUser{
  input: User;
  id: string;
}

export interface DeleteUser{
  id: string;
}

export interface Hotel{
  id: string;
  userId: string;
  description: string;
  image: string;
  address: string;
  price: number;
  numOfBeds: number;
  numOfBaths: number;
  ratings: number
}

export interface CreateHotel{
  input: Hotel
}

export interface ArgsforupdateHotel{
  id: string;
  userId: string;
  description: string;
  image: string;
  address: string;
  price: number;
  numOfBeds: number;
  numOfBaths: number;
  ratings: number
}

export interface UpdateHotel{
  input: ArgsforupdateHotel
}

export interface DeleteHotel{
  id: string;
}





