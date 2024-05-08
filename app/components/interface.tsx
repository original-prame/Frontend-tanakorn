export interface User {
  department: any;
  lastName: string;
  firstName: string;
  hair: { color: string };
  age: number;
  gender: string;
  id: string;
  name: string;
  email: string;
  address: {
    postalCode: string;
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    address: { postalCode: string };
    department: string;
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Department {
  department: string;
  male: number;
  female: number;
  ageRange: string;
  hair: { Black: number; Blond: number; Chestnut: number; Brown: number };
  addressUser: any;
}

export interface dataType {
  type: string;
  name: string;
}
