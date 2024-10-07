import project1 from "../assets/projects/portfolio-website.png";
import project2 from "../assets/projects/to-do-list.png";
import project3 from "../assets/projects/weatherapi.png";

export const HERO_CONTENT = `Welcome to my portfolio! Here, I've documented my projects, education, work experiences and my overall journey so far.`;



export const PROJECTS = [
  {
    title: "Personal Portfolio Website",
    image: project1,
    description:
      "A responsive portfolio website built with React.js and Tailwind CSS, showcasing my projects, education and contact info.",
    technologies: ["HTML", "React.js", "Tailwind CSS", "Node.js", "VS Code", "GitHub"], 
    github: "https://github.com/yourusername/portfolio-website", 
  },
  {
    title: "WeatherAPI Discord Bot",
    image: project3,
    description:
      "A Discord bot that provides real-time weather updates using the WeatherAPI. Users can get current weather information by typing commands.",
    technologies: ["Python", "Discord.py", "APIs", "GitHub", "VS Code"],
    link: "https://github.com/SpeedRelativity/WeatherBot/", 
  },
  {
    title: "Dynamic To-Do List Web App",
    image: project2,
    description:
      "A web to-do list app that takes dynamically adds a new item to the list, marks it done, and is also sorted by the date.",
    technologies: ["Python", "Discord.py", "APIs", "GitHub", "VS Code", "JavaScript", "HTML"],
    link: "https://github.com/SpeedRelativity/sorted-to-do-list-project", 
  },
];

export const CONTACT = {
  address: "San Lorenzo, CA, 94580",
  phoneNo: "+1 415-610-6914 ",
  email: "necharkc@gmail.com",
};
