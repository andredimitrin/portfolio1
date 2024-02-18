import {FaReact, FaNodeJs,} from 'react-icons/fa';
import {SiJavascript, SiTypescript,SiExpress} from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';

export const Skills = [
    {
        id:0,
        tech:'React',
        icon:<FaReact />
    },
    {
        id:1,
        tech:'NodeJS',
        icon:<FaNodeJs />
    },
    {
        id:2,
        tech:'Express',
        icon:<SiExpress />
    },
    {
        id:3,
        tech:'Javascript',
        icon:<SiJavascript />
    },
    {
        id:4,
        tech:'Typescript',
        icon:<SiTypescript />
    },
    {
        id:5,
        tech:'NextJS',
        icon:<TbBrandNextjs />
    },

]

export const projectDetails = [
    {
        id:0,
        project_name:"",
        project_desc:"",
        tech_stack:['React.JS', 'Firebase','Tailwind'],
        project_img:Project1,
        project_url:"https://google.com",
        reverse: false,

    },
    {
        id:1,
        project_name:"Animax",
        project_desc:"An Anime Streaming Platform",
        tech_stack:['React.JS', 'Firebase'],
        project_img:Project2,
        project_url:"https://google.com",
        reverse: true,
    },  

]

export const navLinks = [
    {
        id:0,
        name:"Home",
        href:'Home'
    },
    {
        id:1,
        name:"Minhas Habilidades",
        href:'Skills'
    },
    {
        id:2,
        name:"Projetos",
        href:'Projects'
    },
    {
        id:3,
        name:"Contato",
        href:'Contact'
    },
]