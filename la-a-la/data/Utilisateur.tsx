// Mock user data for development and testing

export interface libelle {
  observation: string;
  action: string;
  approbation: string;
}

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  post: string;
  niveau: libelle;
  accessLevel: libelle;
  createdById: string;
  createdAt: string;
  updatedAt: string;
}

export const utilisateur: User = {
  _id: "ID_USER",
  email: "nouveau.utilisateur@example.com",
  firstName: "Jean",
  lastName: "Dupont",
  phone: "0123456789",
  address: "123 Rue Exemple",
  post: "Web dev",
  niveau: {
    observation: "E",
    action: "0",
    approbation: "0"
  },
  accessLevel: {
    observation: "E",
    action: "0",
    approbation: "0"
  },
  createdById: "ID_USER_CREATOR",
  createdAt: "2024-11-27T12:00:00.000Z",
  updatedAt: "2024-11-27T12:00:00.000Z"
};