// export const skills = {
//     frontend: [
//         "React",
//         "TypeScript",
//         "JavaScript",
//         "HTML",
//         "CSS",
//     ],

//     backend: [
//         "Node.js",
//         "Express.js",
//         "Python",
//     ],

//     database: [
//         "MongoDB",
//         "MySQL",
//     ],

//     tools: [
//         "Git",
//         "GitHub",
//         "Zoho CRM",
//         "Deluge",
//         "REST API",
//     ],
// }

import { SkillItem } from "../../types/portfolio.types"

export const skills: Record<string, SkillItem> = {
    react: {
        id: 1,
        name: "React",
        category: "Technical",
        show: true
    },
    typescript: {
        id: 2,
        name: "TypeScript",
        category: "Technical",
        show: true
    },
    nodejs: {
        id: 3,
        name: "Node.js",
        category: "Technical",
        show: true
    },
    mongodb: {
        id: 4,
        name: "MongoDB",
        category: "Technical",
        show: true
    },
    logicalThinking: {
        id: 5,
        name: "Logical Thinking",
        category: "Professional",
        show: true
    },
    problemSolving: {
        id: 6,
        name: "Problem Solving",
        category: "Professional",
        show: true
    }
}