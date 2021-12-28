/* 
  NOTE: this interface is implemented in
  frontend\src\app\services\auth\auth.service.ts
  frontend\src\app\services\token\token.service.ts
*/
export interface AuthInterface {
  _id?: string
  name: string,
  email: string,
  password: string,
  token: string
};

