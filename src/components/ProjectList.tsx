import * as React from 'react'
import Project from './Project'

const ProjectList: React.FC = () => {
  return (
    <section id="projects" className="project-list">
      <Project
        name="Paysan Breton"
        startDate="2017"
        endDate="Aujourd'hui"
        introduction="Depuis 2017, j'ai l'honneur de collaborer avec Paysan Breton, une entreprise de premier plan dans le domaine des produits laitiers. Mon parcours a débuté en tant que développeur au sein d'une entreprise, contribuant à faire évoluer la plateforme Drupal au fil des années. Aujourd'hui, en tant que développeur web freelance, je continue à soutenir et à améliorer cette expérience en ligne emblématique pour Paysan Breton."
        pictures={[
          {
            url: "images/paysanbreton-1.png",
            alt: "Paysan Breton - 1"
          },
          {
            url: "images/paysanbreton-2.png",
            alt: "Paysan Breton - 2"
          },
          {
            url: "images/paysanbreton-3.png",
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
        introduction="Forêt Bois est l'accélérateur de compétences du Pays de Brest, axé sur la structuration de la filière forêt-bois. Il réunit les acteurs de l'amont à l'aval, avec pour priorités le développement du bois d'œuvre et d'une gestion forestière durable, en circuit court. Depuis 2 ans, j'ai géré le développement du projet, basé sur Drupal 10, en mettant en place un outil d'import de contenus performant, favorisant une gestion efficace des projets liés au bois."
        pictures={[
          {
            url: "images/foretbois-1.png",
            alt: "Forêt Bois - 1"
          },
          {
            url: "images/foretbois-2.png",
            alt: "Forêt Bois - 2"
          },
          {
            url: "images/foretbois-3.png",
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
        introduction="Depuis deux ans, j'ai le plaisir de travailler sur le site web d'AI Days, un événement dédié à l'intelligence artificielle qui propose des conférences, des ateliers et des visites de laboratoires. Cet événement dynamique se déroule dans les locaux de la French Tech Brest, et j'ai contribué à développer et à entretenir le site web, offrant aux participants un accès pratique à ses informations et à son programme."
        pictures={[
          {
            url: "images/aidays-1.png",
            alt: "AI Days - 1"
          },
          {
            url: "images/aidays-2.png",
            alt: "AI Days - 2"
          },
          {
            url: "images/aidays-3.png",
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
