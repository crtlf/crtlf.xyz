import * as React from 'react'
import Project from './Project'

const ProjectList: React.FC = () => {
  return (
    <section className="project-list">
      <Project
        name="Paysan Breton"
        startDate="2017"
        endDate="Aujourd'hui"
        introduction="Depuis 2017, j'ai l'honneur de collaborer avec Paysan Breton, une entreprise de premier plan dans le domaine des produits laitiers. Mon parcours a débuté en tant que développeur au sein d'une entreprise, contribuant à faire évoluer la plateforme Drupal au fil des années. Aujourd'hui, en tant que développeur web freelance, je continue à soutenir et à améliorer cette expérience en ligne emblématique pour Paysan Breton."
        url="https://www.paysanbreton.com"
        domain="paysanbreton.com"
      />

      <Project
        name="AI Days"
        startDate="2022"
        endDate="Aujourd'hui"
        introduction="Depuis deux ans, j'ai le plaisir de travailler sur le site web d'AI Days, un événement dédié à l'intelligence artificielle qui propose des conférences, des ateliers et des visites de laboratoires. Cet événement dynamique se déroule dans les locaux de la French Tech Brest, et j'ai contribué à développer et à entretenir le site web, offrant aux participants un accès pratique à ses informations et à son programme."
        url="https://www.ai-days.bzh"
        domain="ai-days.bzh"
      />

      <Project
        name="Forêt Bois"
        startDate="2022"
        endDate="Aujourd'hui"
        introduction="Forêt Bois est l'accélérateur de compétences du Pays de Brest, axé sur la structuration de la filière forêt-bois. Il réunit les acteurs de l'amont à l'aval, avec pour priorités le développement du bois d'œuvre et d'une gestion forestière durable, en circuit court. Depuis 2 ans, j'ai géré le développement du projet, basé sur Drupal 10, en mettant en place un outil d'import de contenus performant, favorisant une gestion efficace des projets liés au bois."
        url="https://foretbois-paysdebrest.bzh"
        domain="foretbois-paysdebrest.bzh"
      />
    </section>
  )
}

export default ProjectList
