import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { RiNextjsLine } from 'react-icons/ri';
import { DiNodejs, DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: 'Comfortable building websites using HTML and CSS. I focus on creating clean, well-structured web pages that are responsive and look great on all devices. I also have experience using Flexbox and Grid to build modern layouts.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: 'Good understanding of JavaScript and its core concepts. I’ve worked with DOM manipulation, events, and basic asynchronous operations like promises and async/await. I also feel confident with ES6 features like arrow functions and template literals.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: 'I’ve built interactive web applications using React. I understand how to create components, use hooks (like useState and useEffect), and manage state in smaller applications. I’m still learning, but I enjoy how React makes it easier to build dynamic UIs.',
  },
  {
    id: nanoid(),
    title: 'NextJs',
    icon: <RiNextjsLine className="h-16 w-16 text-emerald-500" />,
    text: 'I’ve worked with Next.js to build server-rendered React applications. It allows me to create websites that load faster and are optimized for SEO. I’ve explored some features like file-based routing and static generation.',
  },
  {
    id: nanoid(),
    title: 'NodeJs',
    icon: <DiNodejs className="h-16 w-16 text-emerald-500" />,
    text: 'I have experience building basic server-side applications with Node.js. I’ve worked with APIs and understand how to set up a backend server using JavaScript. I’ve also used it with Express to manage routes and handle requests.',
  },
  {
    id: nanoid(),
    title: 'Express',
    icon: <SiExpress className="h-16 w-16 text-emerald-500" />,
    text: 'I’ve used Express to build simple backend APIs. I’m familiar with routing, middleware, and handling basic HTTP requests (GET, POST, PATCH, DELETE). I’m still learning more advanced features, but I understand how to build a RESTful API with it.',
  },
  {
    id: nanoid(),
    title: 'MongoDB',
    icon: <DiMongodb className="h-16 w-16 text-emerald-500" />,
    text: 'I have hands-on experience working with MongoDB, a NoSQL database. I know how to create and manage databases, write queries, and work with documents. I’m learning more about optimizing queries and using aggregation to handle more complex data.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://backroad-web-app.netlify.app/',
    github: 'https://github.com/HugoAFlorentino',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://backroad-web-app.netlify.app/',
    github: 'https://github.com/HugoAFlorentino',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://backroad-web-app.netlify.app/',
    github: 'https://github.com/HugoAFlorentino',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
