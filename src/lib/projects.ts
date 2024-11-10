import { data } from "@/app/types";
import echoed  from "../../public/echoed.png";
import buzzNest from "../../public/buzz-nest.png"
import acme from "../../public/acme.png"
import payverse from "../../public/payverse.png"

export const projects: Array<data> = [
    {
        name: "Echoed-Thoughts",
        url: "https://github.com/Ishaan-03/Echoed-thoughts",
        techStack: "React.js , TypeScript , react-router-dom , Clodflare workers , hono framework , JWT , PostgreSQL , Prisma ORM , Vercel , Cloudflare",
        description: "Echoed Thoughts is a knowledge-sharing platform designed for experts across all fields, enabling users to post insights anonymously. It features a responsive, user-friendly interface, empowering individuals to contribute freely without identity concerns. Built with React.js, TypeScript, Cloudflare Workers (serverless), and PostgreSQL, the project balances scalability with security using JWT for data protection. The platform promotes learning and global knowledge exchange, offering a seamless experience across devices while ensuring privacy.",
        image: echoed,
        web: "https://echoed-thoughts.vercel.app/"
    },

    {
        name: "BuzzNest",
        url: "https://github.com/Ishaan-03/BuzzNest",
        techStack: " Node.js, Express.js, PostgreSQL, Multer, Cloudinary, React, TypeScript",
        description: "BuzzNest is a social media platform designed to promote positivity, knowledge-sharing, and personal growth. It encourages meaningful interactions while eliminating distractions like notifications. Built with React.js, TypeScript, Node.js, Express.js, PostgreSQL, Multer, and Cloudinary, BuzzNest ensures fast, scalable, and real-time engagement. The platform uses JWT for secure data protection and offers a seamless user experience across devices. BuzzNest empowers users to share, learn, and grow in a distraction-free environment.",
        image:buzzNest,
        web: "https://buzz-nest.vercel.app/"
    },

    {
        name: "Acme",
        url: "https://github.com/Ishaan-03/Acme",
        techStack: "Next.js, Typescript, Shadcn, postgres, tailwind, NextAuth",
        description: "Acme is a powerful financial dashboard designed to streamline business transactions, both pending and paid. Built with Next.js, the platform offers seamless tracking and management for businesses with long payment cycles and lending needs. Key features include SEO-optimized metadata, secure authentication with NextAuth, and advanced data handling using server-side rendering (SSR). Acme ensures smooth navigation, robust error management, and scalability to handle large datasets. This platform empowers businesses with a secure, efficient, and user-friendly dashboard experience. to use credentials are email- user@nextmail.com , password- 123456",
        image: acme,
        web: "https://acme-seven-sigma.vercel.app/"
    },
    {
        name: "PayVerse",
        url: "https://github.com/Ishaan-03/PayVerse",
        techStack: "React.js, Node.js, Express, Docker, Tailwind, MongoDB",
        description: "Payverse is an interactive platform that lets kids play Monopoly by exchanging real-world items using digital “currency.” Built with the MERN stack, it offers a fun way for children to learn about finances and transactions. Key features include MongoDB for efficient data storage, database transactions for reliable operations, and Node.js for scalability. Payverse’s dynamic user experience is powered by React, while Express.js simplifies routing for a clean structure. Additionally, the app is Dockerized and pushed to DockerHub for seamless deployment and scalability. Payverse provides a secure, engaging, and educational platform for young users to understand transactions.",
        image: payverse,
        web: "https://pay-verse.vercel.app/"
    }
]