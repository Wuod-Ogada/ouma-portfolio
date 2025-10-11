import logo from "../assets/Images/logo.png";
import laki2 from "../assets/Images/laki2.png";
import laki3 from "../assets/Images/laki3.png";
import laki11 from "../assets/Images/laki11.png";
import mysql2 from "../assets/Images/mysql2.png";
import jscript from "../assets/Images/jscript.png";
import nodejs from "../assets/Images/nodejs.png";
import react from "../assets/Images/react.png";
import rating2 from "../assets/Images/rating2.png"
import rating3 from "../assets/Images/rating3.png"
import driver from "../assets/Images/driver.png";
import ohs from "../assets/Images/ohs.jpg";
import supportrep from "../assets/Images/supportrep.jpg";
import gear from "../assets/Images/gear.jpg";
import trashcan from "../assets/Images/trashcan.png";
import wallet from "../assets/Images/wallet.jpg";

export { logo, laki2, laki3, laki11, mysql2, jscript, nodejs, react, rating2, rating3, driver, ohs, supportrep, gear, trashcan, wallet }

export const codingSkills = [
  {
    skill: "Javascript",
    image: jscript,
    level: rating3
  },
  {
    skill: "MySQL",
    image: mysql2,
    level: rating3
  },
  {
    skill: "Node JS",
    image: nodejs,
    level: rating3
  },
  {
    skill: "React JS",
    image: react,
    level: rating3
  },
]

export const projectData = [
  {
    id: "makina",
    image: gear,
    title: "Makina: Autosolutions",
    intro: "An e-commerce platform for vehicle spare parts, accessories, and vehicle servicing services.",
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
        "Customer Relations", "JavaScript", "ReactJS", "NodeJS", "Git and GitHub"
    ],
    roles: [
      "Learnt and understood the core principles of web application development.",
      "Understood the significance of Git and GitHub in deployment and collaboration.",
      "It was essential to comprehend the significance of server-side and client-side rendering.",
      "Build and deployed my first application.",
      "Learned the different types of databases and the significance of a schema.",
      "I was able to build a MySql database and facilitate the user interacting with data.",
      "Managed to locally utilize JWT authenitication for controlled access and routing."
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