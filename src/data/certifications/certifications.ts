// export const certifications = [
//     "Cisco Network Engineering",
//     "Infosys Angular",
//     "Infosys Exploring Computers",
//     "Infosys HTML Development",
//     "Infosys HTML Development Report",
//     "Infosys HTML5",
//     "Infosys MongoDB",
//     "Infosys MongoDB Report",
//     "Infosys Node JS",
// ]

import { CertificateItem } from "../../types/portfolio.types"


export const certificates: Record<string, CertificateItem> = {
    cisco: {
        id: 1,
        title: "Cisco Network Engineering",
        show: true
    },
    angular: {
        id: 2,
        title: "Infosys Angular",
        show: true
    },
    computers: {
        id: 3,
        title: "Infosys Exploring Computers",
        show: true
    },
    htmlDevelopment: {
        id: 5,
        title: "Infosys HTML Development",
        show: true
    },

    htmlReport: {
        id: 4,
        title: "Infosys HTML Development Report",
        show: true
    },
    html5: {
        id: 6,
        title: "Infosys HTML5",
        show: true
    },
    mongodb: {
        id: 7,
        title: "Infosys MongoDB",
        show: true
    },
    mongodbReport: {
        id: 8,
        title: "Infosys MongoDB Report",
        show: true
    },
    nodejs: {
        id: 9,
        title: "Infosys Node JS",
        show: true
    }
}