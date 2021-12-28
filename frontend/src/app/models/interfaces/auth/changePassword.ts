/* 
  NOTE: this interface is implemented in
  frontend\src\app\services\auth\auth.service.ts
  frontend\src\app\services\token\token.service.ts
*/
export interface ChangePasswordInterface {
  _id?: string
  email: string,
  password: string,
  newPassword: string,
  confirmPassword: string,
  // token: string
};