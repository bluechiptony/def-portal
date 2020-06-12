export interface User {
  id?: any;
  firstName: string;
  lastName: string;
  emailAddress: string;
  accountType: AccountTypes;
}

export enum AccountTypes {
  SUPER_ADMINISTRATOR = 'SUPER ADMINISTRATOR',
  ADMINISTRATOR = 'ADMINISTRATOR',
  SUPERVISOR = 'SUPERVISOR',
  STAFF = 'STAFF',
}

export const users: User[] = [
  {
    id: '723467',
    firstName: 'James',
    lastName: 'McArdy',
    emailAddress: 'admin@admin.com',
    accountType: AccountTypes.ADMINISTRATOR,
  },
  {
    id: '23467',
    firstName: 'James',
    lastName: 'Ogebe',
    emailAddress: 'supervisor@admin.com',
    accountType: AccountTypes.SUPERVISOR,
  },
  {
    id: '83967',
    firstName: 'Sandra',
    lastName: 'Mohave',
    emailAddress: 'staff@admin.com',
    accountType: AccountTypes.STAFF,
  },
];
