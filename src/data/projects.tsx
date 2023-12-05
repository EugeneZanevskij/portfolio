import { Project } from "../types";
import GoogleCalendar from "../assets/google-calendar-clone.jpg";
import PreviousPortfolio from "../assets/previous-portfolio.jpg";
import Shelter from "../assets/shelter.jpg";
import VirtualKeyboard from "../assets/virtual-keyboard.jpg";
import BeautySalonApp from "../assets/beauty-salon-app.jpg";
import SimpleBlog from "../assets/simple-blog.jpg";
import Ecom from "../assets/ecom.jpg";
import BBCNews from "../assets/bbc-news.jpg";
import IPApp from "../assets/ip-app.jpg";
import WatchlistTMDB from "../assets/watchlist-tmdb.jpg";
import RecipeApp from "../assets/recipe-app.jpg";
import Portfolio from "../assets/portfolio.jpg";

export const projects : Array<Project> = [
  {
    "title": "Google Calendar Clone",
    "imageSrc": GoogleCalendar,
    "description": "This project made using React as framework and Feature-Sliced Design (FSD) methodology (have identical appearance and retain all functionality)",
    "skills": ["React", "Context", "CSS", "BEM", "Feature-Sliced Design"],
    "demo": "https://google-calendar-eugenezanevskijs-projects.vercel.app/",
    "source": "https://github.com/EugeneZanevskij/google-calendar"
  },
  {
    "title": "Previous Portfolio",
    "imageSrc": PreviousPortfolio,
    "description": "Responsive Personal Portfolio Website Using HTML, SCSS & JavaScript",
    "skills": ["SCSS", "BEM", "JavaScript"],
    "demo": "https://eugenezanevskij.github.io/portfolio-page/",
    "source": "https://github.com/EugeneZanevskij/portfolio-page"
  },
  {
    "title": "Shelter",
    "imageSrc": Shelter,
    "description": "Responsive Shelter Website Using HTML, SCSS & JavaScript",
    "skills": ["SCSS", "BEM", "Figma", "JavaScript", "Webpack", "PerfectPixel"],
    "demo": "https://eugenezanevskij.github.io/shelter/",
    "source": "https://github.com/EugeneZanevskij/shelter"
  },
  {
    "title": "Virtual Keyboard",
    "imageSrc": VirtualKeyboard,
    "description": "Page used to emulate a standard keyboard by pressing keys, using keyboard or mouse",
    "skills": ["CSS", "BEM", "JavaScript", "ESLint"],
    "demo": "https://eugenezanevskij.github.io/virtual-keyboard/",
    "source": "https://github.com/EugeneZanevskij/virtual-keyboard"
  },
  {
    "title": "Beauty Salon App",
    "imageSrc": BeautySalonApp,
    "description": "Full stack application. App for managing beauty salon, its customers, appointments and services.",
    "skills": ["React", "CSS", "BEM", "Rest API", "Express"],
    "source": "https://github.com/EugeneZanevskij/beauty-salon-app"
  },
  {
    "title": "Simple Blog",
    "imageSrc": SimpleBlog,  
    "description": "Basic Blog Website using React and useContext hook with dark mode",
    "skills": ["React", "Context"],
    "demo": "https://react-simple-blog-eugenezanevskijs-projects.vercel.app/",
    "source": "https://github.com/EugeneZanevskij/react-simple-blog"
  },
  {
    "title": "E-commerce",
    "imageSrc": Ecom,  
    "description": "E-commerce Website using React and useContext hook for cart",
    "skills": ["React", "Context"],
    "demo": "https://ecom-first-eugenezanevskijs-projects.vercel.app/",
    "source": "https://github.com/EugeneZanevskij/ecom-first"
  },
  {
    "title": "BBC-news",
    "imageSrc": BBCNews,  
    "description": "BBC-news Website using React and Firebase for database and authentication",
    "skills": ["React", "Firebase", "Tailwind"],
    "source": "https://github.com/EugeneZanevskij/bbc-news"
  },
  {
    "title": "IP App",
    "imageSrc": IPApp,  
    "description": "BBC-news Website using React and Firebase for database and authentication",
    "skills": ["React", "React-Leaflet", "API"],
    "demo": "https://ip-app-eugenezanevskijs-projects.vercel.app/",
    "source": "https://github.com/EugeneZanevskij/bbc-news"
  },
  {
    "title": "Watchlist TMDB",
    "imageSrc": WatchlistTMDB,  
    "description": "App for keeping track of movies in your watchlist using TMDB API (use VPN to connect to API)",
    "skills": ["React", "Context", "LocalStorage", "API"],
    "demo": "https://watchlist-tmdb-eugenezanevskijs-projects.vercel.app/",
    "source": "https://github.com/EugeneZanevskij/watchlist-tmdb"
  },
  {
    "title": "Fullstack Recipe App",
    "imageSrc": RecipeApp,  
    "description": "Fullstack TypeScript Recipe App using React and Prisma for PostgreSQL database",
    "skills": ["React", "TypeScript", "Prisma", "PostgreSQL", "Rest API"],
    "source": "https://github.com/EugeneZanevskij/full-recipe"
  },
  {
    "title": "Portfolio",
    "imageSrc": Portfolio,  
    "description": "Fullstack TypeScript Portfolio using React to showcase my skills and info",
    "skills": ["React", "TypeScript", "Module CSS"],
    "source": "https://github.com/EugeneZanevskij/full-recipe"
  }
]