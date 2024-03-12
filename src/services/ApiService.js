const baseURI = "http://localhost:6060/api"

export class Api {
  static getHeaders() {
    return {
      "Content-Type": "application/json",
    }
  }

  static async request(method = "TEST", endpoint, payload) {
    const reqOptions = {
      method: method,
      headers: this.getHeaders(),
      body: payload ? JSON.stringify(payload) : null
    }
    try {
      const resJson = await fetch(baseURI + endpoint, reqOptions)
      const res = await resJson.json()
      return res
    } catch (error) {
      return error.message
    }
  }
}