import { Api } from "./ApiService";

export class AuthService {

  static async login(data) {
    return await Api.request("POST", "/auth/email/login", data)
  }

  static async register(data) {
    return await Api.request("POST", "/auth/email/register", data)
  }

  static async confirmRegister(data) {
    return await Api.request("POST", "/auth/email/confirm", data)
  }

}