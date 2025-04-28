
interface ProjectData {
  name: string;
  description: string;
  descriptionPT: string;
  image: string;
  url: string;
  mobile?: boolean
}

export const projectsData: ProjectData[] = [
  {
    name: "Finance AI",
    description: "Finance AI is a financial management platform that uses AI to monitor your transactions and provide personalized insights, making it easier to control your budget.",
    descriptionPT: "A Finance AI é uma plataforma de gestão financeira que utiliza IA para monitorar suas movimentações, e oferecer insights personalizados, facilitando o controle do seu orçamento.",
    image: "/projects/finance_ai.png",
    url: "https://github.com/WDYitz/finance-ai"
  },
  {
    name: "Neutral Commerce",
    description: "Neutral Commerce is a platform that sells eletronics and gadgets.",
    image: "/projects/default_image.png",
    descriptionPT: "A Neutral Commerce é uma plataforma que vende eletrônicos e aparatos eletronicos.",
    url: "https://neutral-e-commerce.vercel.app/",
    mobile: true,
  },
  {
    name: "New Santos Food",
    description: "New Santos Food is a functional ifood clone that allows you to order food from your favorite restaurants.",
    descriptionPT: "A New Santos Food é um clone funcional do ifood que permite pedir comida de seus restaurantes favoritos (Todos os produtos são ficticios).",
    image: "/projects/default_image.png",
    url: "https://new-santos-food.vercel.app/",
  },
  {
    name: "Twitter Clone API",
    description: "This project is a Twitter clone API that allows you to create, read, update and delete tweets, create new tags and follow users, comment on tweets and like them, Using Clean Architecture principles and SOLID design patterns.",
    descriptionPT: "Esse projeto é uma API clone do Twitter que permite criar, ler, atualizar e deletar tweets, criar novas tags e seguir usuários, comentar em tweets e curtir, utilizando princípios de Arquitetura Limpa e padrões de design SOLID.",
    image: "/projects/default_image.png",
    url: "https://github.com/WDYitz/twitter-clone-api",
  },
  {
    name: "Entity Framework Setup",
    description: "This project is a simple setup of Entity Framework Core with a SQL Server database.",
    descriptionPT: "Esse projeto é um setup simples do Entity Framework Core com um banco de dados SQL Server.",
    image: "/projects/default_image.png",
    url: "https://github.com/WDYitz/EntityFrameworkSetup",
  },
  {
    name: "Rocket Coffee UI",
    description: "Rocket Coffee UI is a simple landing page.",
    descriptionPT: "Rocket Coffee UI é uma landing page simples.",
    image: "/projects/default_image.png",
    url: "https://wdyitz.github.io/RocketCoffeeUI/",
  },
  {
    name: "Event Manager",
    description: "This project is a simple event manager that allows you to create, read, update and delete events and create 'Attendees' for these events.",
    descriptionPT: "Um gerenciador de eventos que permite criar, ler, atualizar e deletar eventos e criar 'Participantes' para esses eventos.",
    image: "/projects/default_image.png",
    url: "https://github.com/WDYitz/gerenciar-eventos",
  },
  {
    name: "Spotify Clone",
    description: "This project is a Spotify UI clone.",
    descriptionPT: "Projeto clone da interface do Spotify.",
    image: "/projects/default_image.png",
    url: "https://github.com/WDYitz/spotify_clone",
  },
  {
    name: "Next Authentication",
    description: "This project is a simple authentication system using Next Auth.",
    descriptionPT: "Esse projeto é um sistema de autenticação simples utilizando Next Auth.",
    image: "/projects/default_image.png",
    url: "https://github.com/WDYitz/next-authentication",
  }
]