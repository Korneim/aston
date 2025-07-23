import type { User } from '../api/userApi.ts';

export type MapUser = Omit<User, 'company' | 'address'> & {
    address: string;
    company: string;
};

export function mapUserInfo(user?: User): MapUser {
    if (user) {
        const { id, company, address, phone, username, name, website, email } = user;
        const mappedAddress = `г. ${address.city}, ул. ${address.street}`;
        const companyName = company.name;

        return {
            id,
            name,
            username,
            email,
            phone,
            website,
            address: mappedAddress,
            company: companyName,
        };
    } else
        return {
            id: 1,
            name: '',
            username: '',
            email: '',
            phone: '',
            website: '',
            address: '',
            company: '',
        };
}
