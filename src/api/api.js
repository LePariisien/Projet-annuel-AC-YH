import axios from 'axios';

// URL de l'API
const API_URL = 'http://localhost:3000'; // Remplacez par votre URL d'API

// Envoie une requête GET à l'API pour récupérer les clients
export const getClients = () => {
  return axios.get(`${API_URL}/ClientStorage`).then((response) => response.data);
};

// Envoie une requête POST à l'API pour ajouter un client
export const addClient = (clientData) => {
  return axios.post(`${API_URL}/ClientStorage`, clientData).then((response) => response.data);
};

// Autres fonctions pour gérer les autres opérations CRUD
// ...