import { Tache } from "./Tache";

export const TACHES: Tache[] = [
    {
        id: 1,
        description: "Analyse des bésoins fonctionnelles",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  "En cours", 
        prioriteEncour : "Moyen"

    },

    {
        id: 2,
        description: "Définir l'architecture Projet",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  "En Attente",
        prioriteEncour : "Faible"

    },
    {
        id: 3,
        description: "Renforcer l'ergonomie des fonctionnalité ",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  "En cours", 
        prioriteEncour :"Eleve", 

    },
    {
        id: 4,
        description: "Définir les besoins d'importance Jira",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  "En Attente",
        prioriteEncour : "Faible"

    },
    {
        id: 5,
        description: "Construire l'infratructure du projet",
        isActive: true,
        dateCreation: new Date,
        EtatEncour: "Fait", 
        prioriteEncour : "Moyen", 

    },
    {
        id: 6,
        description: "Création des nouvelles API",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  "En cours",
        prioriteEncour : "Moyen", 

    },
    {
        id: 7,
        description: "Analyse des dysfonctionnements differents bugs",
        isActive: true,
        dateCreation: new Date,
        EtatEncour: "En cours",
        prioriteEncour :"Eleve",

    },
    {
        id: 8,
        description: "Faire des testes fonctionnelles de l'application",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  "En cours",
        prioriteEncour : "Moyen",

    },
    {
        id: 9,
        description: " Préparation l'interface de l'application",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  "En cours", 
        prioriteEncour : "Moyen", 

    },
];
