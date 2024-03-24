import { Api } from './ApiService'

export class CardService {

  static async getCard(id) {
    return await Api.request("GET", id ? `/card/${id}` : "/card")
  }

  static async createCard(data) {
    return await Api.request("POST", "/card/", data)
  }

  static async deleteCard(id) {
    return await Api.request("DELETE", `/card/${id}`)
  }

  static async updateCard(data) {
    return await Api.request("PUT", `/card/${data?.id}`, data)
  }

  static async getCardByUser(id) {
    return await Api.request("GET", `/card/user/${id}`)
  }
}