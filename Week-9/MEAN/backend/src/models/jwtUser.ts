import { userModel } from './userModel';
export interface jwtUser extends userModel {
    'iat': number,
    'exp': number
}