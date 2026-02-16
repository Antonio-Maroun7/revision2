const { Pool } = require("pg");
const clientService = require("../services/client.service");

class clientController {
  static async getAllClients(req, res) {
    try {
      const client = await clientService.getAll();
      res.json(client);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async getClientById(req, res) {
    try {
      const client = await clientService.getById(req.params.id);
      res.json(client);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async createClient(req, res) {
    try {
      const client = await clientService.createClient(req.body);
      res.status(201).json(client);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async updateClient(req, res) {
    try {
      const client = await clientService.updateClient(req.params.id, req.body);
      res.status(201).json(client);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async deleteClient(req, res) {
    try {
      const client = await clientService.deleteClient(req.params.id);
      res.status(203).json(client);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }
}

module.exports = clientController;
