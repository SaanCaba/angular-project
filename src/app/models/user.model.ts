export interface User{
    id:string
    name: string,
    password: string,
    email: string
}

export interface CreateUserDTO extends Omit<User, 'id'>{
    
} 
