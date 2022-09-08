export interface IUsers {
    users: ICardUser[]
}

export interface IUser {
    user: ICardUser
}

export interface ICardUser {
    _id: string;
    avatar: string;
    name: string;
    gender: string;
    age: number;
    description: string;
    work?: string;
}
