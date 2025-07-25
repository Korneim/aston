type Geo = {
    lat: string;
    lng: string;
};
type Address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
};
type Company = {
    bs: string;
    catchPhrase: string;
    name: string;
};

export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    company: Company;
    phone?: string;
    website?: string;
    address: Address;
};
