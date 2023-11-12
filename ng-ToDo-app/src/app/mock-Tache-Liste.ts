import { Tache } from "./Tache";
import { Etat } from "./TacheEtatEnum";
import { Priorite } from "./TachePrioriteEnum";

export const TACHES: Tache[] = [
    {
        id: 1,
        description: "Analyse des bésoins fonctionnelles",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  Etat.EnCours,
        prioriteEncour : Priorite.Moyen

    },

    {
        id: 2,
        description: "Définir l'architecture Projet",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  Etat.EnAttente,
        prioriteEncour : Priorite.Faible

    },
    {
        id: 3,
        description: "Renforcer l'ergonomie des fonctionnalité ",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  Etat.EnCours,
        prioriteEncour :Priorite.Eleve

    },
    {
        id: 4,
        description: "Définir les besoins d'importance Jira",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  Etat.EnAttente,
        prioriteEncour :Priorite.Faible

    },
    {
        id: 5,
        description: "Construire l'infratructure du projet",
        isActive: true,
        dateCreation: new Date,
        EtatEncour: Etat.Fait,
        prioriteEncour : Priorite.Moyen

    },
    {
        id: 6,
        description: "Création des nouvelles API",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:   Etat.EnCours,
        prioriteEncour : Priorite.Moyen

    },
    {
        id: 7,
        description: "Analyse des dysfonctionnements differents bugs",
        isActive: true,
        dateCreation: new Date,
        EtatEncour: Etat.EnCours,
        prioriteEncour :Priorite.Eleve

    },
    {
        id: 8,
        description: "Faire des testes fonctionnelles de l'application",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  Etat.EnCours,
        prioriteEncour : Priorite.Moyen

    },
    {
        id: 9,
        description: " Préparation l'interface de l'application",
        isActive: true,
        dateCreation: new Date,
        EtatEncour:  Etat.EnCours,
        prioriteEncour : Priorite.Moyen

    },
];
