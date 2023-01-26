export interface User{
    id:string
    name: string,
    password: string,
    email: string | any
}

export interface CreateUserDTO extends Omit<User, 'id'>{
    
} 
