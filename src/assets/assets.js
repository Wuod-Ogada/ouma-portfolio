import logo from "../assets/Images/logo.png";
import laki2 from "../assets/Images/laki2.png";
import laki3 from "../assets/Images/laki3.png";
import laki11 from "../assets/Images/laki11.png";
import mysql2 from "../assets/Images/mysql2.png";
import jscript from "../assets/Images/jscript.png";
import nodejs from "../assets/Images/nodejs.png";
import react from "../assets/Images/react.png";
import gear from "../assets/Images/gear.jpg";
import trashcan from "../assets/Images/trashcan.png";
import wallet from "../assets/Images/wallet.jpg";
import java from "../assets/Images/java.png";
import developer from "../assets/Images/developer.png";
import collab from "../assets/Images/collab.png";
import journal from "../assets/Images/jcropped.png";

export { logo, laki2, laki3, laki11, mysql2,journal, jscript, developer, collab, nodejs, react, gear, trashcan, wallet }

export const codingSkills = [
  {
    skill: "Javascript",
    image: jscript,
    
  },
  {
    skill: "MySQL",
    image: mysql2,
    
  },
  {
    skill: "Node JS",
    image: nodejs,
    
  },
  {
    skill: "React JS",
    image: react,
    
  },
  {
    skill: "java",
    image: java,
    
  },
]

export const projectData = [
  {
    id: "makina",
    image: gear,
    title: "Makina: Autosolutions",
    intro: "Streamlining the network between auto-service providers and clients. The platform provides a one-stop shop where individuals access autoparts and services fitting their needs. In addition, cients can seek book and get in-touch with vetted and well-rated service providers. ",
    description: ["The application aims to provide an avenue for vehicle owners to obtain services from one place. The intention is to improve the experience of vehicle owners while sourcing for services.",
    "Clients are able to search, order, and pre-order spare parts and other vehicle accessory. They can schedule for a shop visit to collect the item or request for deliveries. The platform will facilite transparency and client protection, through online transactions. The item listings will facilitate searching for items basing on part number, chasis number, vehicle model, and compatibility.",
    "For vehicle servicing and maintenance, the platform will enable access to three types of services. Shop visits: which clients will schedule and book to have their vehicles serviced from our service bay. Pick-up and drop-off: This service allows clients to schedule and book for their cars to be collected by a flatbed, taken to the service centre, and returned upon completion. Finally, On-site servicing: Clients will be able to book and schedule for mechanics to visit their location to service their vehicles at their convinience."]
  },
  {
    id: "container-rental",
    image: trashcan,
    title: "Al Hawiyat - Waste Container Rental",
    intro: "A customer, order, and asset management system for a company offering waste management services.",
    description: [
      "This is a MERN Stack application project that aims to assist companies to keep track and update their orders. It aims to integrate an alternative communication portal for client and company interaction.It will provide an avenue for clients to place and monitor their order progress. Clients are able to download e-receipts and communicate with the dispatch or support team. In addition, It provides avenues to easily update clients on the delivery progress.",
      "Dispatchers are able to monitor orders in a categorised manner from the management dashboard. It will facilitate keeping and updating orders, and client informations for efficient record keeping. Dispatchers are able to create new orders and client information.",
      "Moreover, the system facilitates asset management. It is possible through the rights given to add, assign, and/or delete assets. This is to facilitate ease monitoring and tracking of container rotation, and driver-truck pairing. It will make it easier to identify a truck assigned to a driver, and maintain all vehicle servicing and traffic violations.",
      "The system facilitates monitoring of orders throughout the year. This will provide the company with an avenue for evaluating its sales, having a detailed graphical data representation of company performnce for self evaluation. The data can be queried on a periodic approach."
    ]
  },
  {
    id: 'fulus',
    image: wallet,
    title: "Fulus",
    intro: "An application intended to guide users on financial management and investment plans",
    description: [
      "The appication will have two plans. The free and the paid plan."
    ]
  },
]

export const experiences = [
  {
    title: "Fullstack Web developer - Apprenticeship",
    organization: "Daktos Limited (https://daktos.org/)",
    location: "Nairobi, Kenya",
    duration: "Jan, 2022 - Feb, 2024",
    skills : [ 
        "Attention to details", "Error handling and End-to-End testing", "Critical thinking", "Effective communication"
    ],
    roles: [
      "Created simple frontend to backend connection using RESTful API",
      "Collaborated with my mentor and managed my codebase using Git and GitHub.",
      "Developed re-usable components to facilitate efficiency and time-management.",
      "Build and deployed a waste-management web applicattion built on ReactJS and NodeJS.",
      "utilized prisma for efficiency and type-safety features to maintain the postgres database",
      "Managed to implement JWT authenitication and cookies for controlled access and routing to prevent data leaks.",
      "utilized the contextAPI for route protection and state management.",
      "utilized Postman and REST Client for API testing to ensure functionality and to ensure the intended data is being accessed. ",
      "Contributed to the development of Volunteer Management Systems for the Kenya Red Cross Society and the Somaliland Red Crescent Society.",
      "Currently, I am learning how to implement microservices and utilize tools such as Kafka, Redis, and RabbitMq"
    ],
  }, 
  {
    title: "Project Coordinator",
    organization: "Digital Telematics LTD",
    location: "Nairobi, Kenya",
    duration: "Oct, 2018 - Nov, 2021",
    skills : [
      "Project documentation", "Project Management", "Logistics", "Budgeting", "Administrative Support", 
    ],
    roles: [
      "Provided administrative support, including scheduling meetings, maintaining project documentation, and liaising between teams and clients.",
      "Facilitated effective communication between teams and clients, keeping all parties informed of progress and issues.",
      "Supervised technicians to ensure the work was meeting the company&apos;s quality standards, and to a client&apos;s satisfaction.",
      "Managed logistical operations and tracked inventory for telematics projects.",
      "Coordinated project timelines, resources, and stakeholders to ensure smooth project execution.",
      "Increased the number of installations to 5 per day including fuel calibration. It translated to a 30% increase in productivity.",
    ],
  }, 
  {
    title: "Technical Support Representative",
    organization: "Digital Telematics LTD",
    location: "Nairobi, Kenya",
    duration: "Mar, 2018 - Sep, 2018",
    skills : [
      "Clear and Effective Communication", "Understanding Computers and Technology", "Wireless Device configuration", "Excellent Customer Service Skills",
    ],
    roles: [
      "Provided technical support for telematics devices and systems to customers, resolving issues effectively and efficiently.",
      "Assisted customers in configuring wireless devices and ensuring proper integration with other systems.",
      "Assisted customers with installing firmware updates or software patches for their devices and telematics platforms.",
      "Delivered exceptional customer service by addressing inquiries and resolving technical problems in a timely manner.",
      "Maintained a knowledge base to effectively address common inquiries and improve the troubleshooting process.",
      "Responded to alerts or reports of device malfunctions or communication failures between vehicles and the telematics platform.",
      "Addressed customer inquiries regarding the functionality of GPS tracking, vehicle diagnostics, and other telematics features.",
    ],
  }, 
]