export type Role = 'CLIENT' | 'ITEMEDITOR' | 'ADMIN' | 'SUPERADMIN'

export interface User {
  id: string
  username: string
  email: string
  roles: Role[]
  created_at: string
}

export type SignupArgs = Pick<User, 'username' | 'email'> & { password: string }

export type SigninArgs = Omit<SignupArgs, 'username'>
