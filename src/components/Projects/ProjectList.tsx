import * as React from 'react'
import * as styles from './project.module.scss'
import Project from './Project'

const ProjectList: React.FC = () => {
  return (
    <section id="projects" className={styles.list}>
      <Project
        name="Paysan Breton"
        startDate="2017"
        endDate="2024"
        introduction="Pendant 7 ans, j'ai eu l'honneur de collaborer avec Paysan Breton, une entreprise de premier plan dans le domaine des produits laitiers. Mon parcours a débuté en tant que développeur au sein des entreprises Yellowcake, puis BeAble, contribuant à faire évoluer la plateforme Drupal au fil des années. Ensuite, en tant que développeur web freelance, j'ai continué à soutenir et à améliorer cette expérience en ligne emblématique pour Paysan Breton."
        pictures={[
          {
            url: "images/paysanbreton-1.webp",
            alt: "Paysan Breton - 1",
            copyright: "Mike & Cheese – Tous droits Paysan Breton",
          },
          {
            url: "images/paysanbreton-2.webp",
            alt: "Paysan Breton - 2"
          },
          {
            url: "images/paysanbreton-3.webp",
            alt: "Paysan Breton - 3"
          },
        ]}
        url="https://www.paysanbreton.com"
        domain="paysanbreton.com"
      />

      <Project
        name="Forêt Bois"
        startDate="2022"
        endDate="Aujourd'hui"
        introduction="Forêt Bois est l'accélérateur de compétences du Pays de Brest, axé sur la structuration de la filière forêt-bois. Il réunit les acteurs de l'amont à l'aval, avec pour priorités le développement du bois d'œuvre et d'une gestion forestière durable, en circuit court. Depuis 2 ans, je gère le développement du projet, basé sur Drupal 10, en mettant en place un outil d'import de contenus performant, favorisant une gestion efficace des projets liés au bois."
        pictures={[
          {
            url: "images/foretbois-1.webp",
            alt: "Forêt Bois - 1",
            copyright: "Forêt Bois"
          },
          {
            url: "images/foretbois-2.webp",
            alt: "Forêt Bois - 2"
          },
          {
            url: "images/foretbois-3.webp",
            alt: "Forêt Bois - 3"
          },
        ]}
        url="https://foretbois-paysdebrest.bzh"
        domain="foretbois-paysdebrest.bzh"
      />

      <Project
        name="AI Days"
        startDate="2022"
        endDate="Aujourd'hui"
        introduction="Depuis deux ans, j'ai le plaisir de travailler sur le site web d'AI Days, un événement dédié à l'intelligence artificielle qui propose des conférences, des ateliers et des visites de laboratoires se déroulant dans les locaux de la French Tech Brest. J'ai contribué à développer et à entretenir le site web lors des éditions 2022 et 2023, offrant aux participants un accès pratique à ses informations et à son programme."
        pictures={[
          {
            url: "images/aidays-1.webp",
            alt: "AI Days - 1",
            copyright: "AI Days"
          },
          {
            url: "images/aidays-2.webp",
            alt: "AI Days - 2"
          },
          {
            url: "images/aidays-3.webp",
            alt: "AI Days - 3"
          },
        ]}
        url="https://www.ai-days.bzh"
        domain="ai-days.bzh"
      />
    </section>
  )
}

export default ProjectList
