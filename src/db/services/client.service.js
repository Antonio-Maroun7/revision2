const pool = require("../pool");
const clientRepository = require("../repositories/client.repositories");

class clientService {
  static async getAll() {
    return await clientRepository.findAll();
  }

  static async getById(id) {
    const client = await clientRepository.findById(id);
    if (!client) {
      throw new Error("client not found");
    }
    return client;
  }

  static async createClient(data) {
    if (!data.name || !data.email) {
      throw new Error("name and email are required");
    }
    return await clientRepository.create(data);
  }

  static async updateClient(id, data) {
    if (!id || !data.name || !data.email) {
      throw new Error("id name and email are required");
    }
    return await clientRepository.update(id, data);
  }

  static async deleteClient(id) {
    if (!id) {
      throw new Error("id is required");
    }
    const client = await clientRepository.findById(id);
    if (!client) {
      throw new Error("client not found");
    }
    return await clientRepository.delete(id);
  }
}

module.exports = clientService;
