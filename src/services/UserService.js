import { Api } from "./ApiService";

export class UserService {

  static async getUser(id) {
    return await Api.request("GET", id ? `/user/${id}` : '/user')
  }

}