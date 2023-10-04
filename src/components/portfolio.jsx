/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from './Lotties/splashAnimation.json'; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Boinpally Vahanth Phalguna",
  title: "Hi all, I'm Vahanth",
  subTitle: emoji(
    "A passionate Developer And Designer🚀 having an experience of building Web applications, Games, Projects and More "
  ),
  resumeLink:
    "https://drive.google.com/file/d/1THMArOFvzK6apy385Z8Gq27MAQAj1jLH/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true ,
  display: true// Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
 github: "https://github.com/vahanth2001",
  linkedin: "https://www.linkedin.com/in/vahanth-guna-47868b1a5/",
  gmail: "vahanthguna765992@gmail.com",
  gitlab: "https://gitlab.com/Vahanth2001",
   facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@Dheeraj-Tiwari",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Designvelopers: Crafting Creativity with Code",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web And Python Applications"
    ),
    emoji("⚡Devlop Creative Games With UnityEngine, UnrealEngine And JS"),
    emoji(
      "⚡ Integrating BackEnd With MongoDB, SQL, Python, And more"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fa-solid fa-code-simple"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fa-solid fa-c fa-solid fa-plus"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "API",
      fontAwesomeClassname: "fa-solid fa-webhook"
    },
    {
      skillName: "unityEngine",
      fontAwesomeClassname: "fab fa-unity"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Jawaharlal Nehru Technological University Hyderabad",
      //logo: require("./assets/images/jntuhLogo.png"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "2019 - 2023",
      desc: "-proud to have emerged victorious in one hackathon and two coding competitions held at this esteemed college",
      
    },
    {
      schoolName: "Narayana junior College",
      //logo: require("./assets/images/sbtetLogo.png"),
      subHeader: "Intermediate",
      duration: "2017 - 2019",
      desc: "-Took part in my inaugural hackathon at this college",// eslint-disable-next-line
      desc: "-Enjoyed engaging in numerous exciting events hosted by the college",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "50%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Deloitte",
      //companylogo: require("./assets/images/deloitte-logo.gif"),
      date: "FEB 2023 - FEB 2023",
      desc: "-STEM Connect is a virtual program for work experience that offers online simulations.",// eslint-disable-next-line
      desc: "-Gained diversified experience across various domains and technologies including coding, data analysis, software development, cybersecurity, and forensic technology."
    },
    {
      role: "Freelancer(Graphic Designer)",
      company: "UpWork",
      //companylogo: require("./assets/images/upworkLogo.png"),
      date: "Jan 2020 – Oct 2020",
      desc: "-Successfully edited videos for multiple YouTubers, resulting in millions of views, and the growth of channels with over 100,000 subscribers. -Created over 100 thumbnails that have generated 500,000+ engagements in content.",// eslint-disable-next-line
      desc: "-Created over 100 thumbnails that have generated 500,000+ engagements in content."
    },
    {
      role: "Freelancer(Front-End Developer)",
      company: "Fiverr",
      //companylogo: require("./assets/images/fiverr.png"),
      date: "Jan 2020 – Oct 2020",
      desc: "-Build websites and web apps over 100+ which gets daily views over 10000+"
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Main Projects",
  subtitle: "",
  projects: [
    {
      //image: require("./assets/images/Fake-News-Detection-using-Machine-Learning.jpg"),
      projectName: "Detection Of Fake News Through Implementation Of Data Science Application — Approved by JNTUH",
      projectDesc: "This project employs machine learning algorithms and natural language processing to detect fake news on social media platforms such as Twitter.",// eslint-disable-next-line
      projectDesc: "Key Skills: Python, LSTM, NLP",
      footerLink: [
        {
          name: "Visit Project",
           url: "https://github.com/Dheeraj-Tiwari/DETECTION-OF-FAKE-NEWS-THROUGH-IMPLEMENTATION-OF-DATA-SCIENCE-APPLICATION"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/Web-Development-Projects.jpg"),
      projectName: "20+ Mini-Projects in Web Development",
      projectDesc: "This project showcase a variety of dynamic designs, including landing pages, marketplace clones, newsletter pages, news article websites, to-do lists, and much more",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/Vahanth2001?tab=repositories"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Udemy’s Web Development Bootcamp",
      subtitle:
        "Developed proficient skills in web development.",
      //image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-bef1220f-c1b5-4425-afd4-6d8a23389529/"
        },
        {
          name: "Projects",
          url: "https://github.com/vahanth2001?tab=repositories"
        }
      ]
    },
    {
      title: "Udemy’s Unity Game Development in C#",
      subtitle:
        "Developed proficient skills in game development.",
      //image: require("./assets/images/udemy.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.udemy.com/certificate/UC-68dc8f87-d4a4-4d6c-bbe0-7bf766e35748/"
        }
      ]
    },

    {
      title: "FreeCodeCamp’s Responsive Web Design",
      subtitle: "Acquired a high level of proficiency in web design skills",
      //image: require("./assets/images/freecodecamp.jpg"),
      imageAlt: "FreeCodeCamp Logo",
      footerLink: [
        {name: "Certification", url: "https://www.freecodecamp.org/certification/Dheeraj313/responsive-web-design"},
      ]
    },
    {
      title: "Python with IBM",
      subtitle: "Acquired a high level of proficiency in python",
      //image: require("./assets/images/ibm.png"),
      imageAlt: "IBM Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1AhQRvRDWOHGUwdeUoZE6bf9J21TT-3R2/view"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://thethinkingmachine101.blogspot.com/2022/12/unleashing-creative-power-of-dall-e-ai.html#more",
      title: "UNLEASHING THE CREATIVE POWER OF DALL-E: THE AI THAT CAN GENERATE ANYTHING",
      description:
        "Are you ready to unleash the creative power of DALL-E? This cutting-edge artificial intelligence (AI) program has the ability to generate almost anything, turning ideas into images, videos, and other forms of media."
    },
    {
      url: "https://dheeraj-tiwari.medium.com/the-future-of-ai-opportunities-challenges-and-the-road-ahead-9c6ee3ff062b",
      title: "THE FUTURE OF AI: OPPORTUNITIES, CHALLENGES, AND THE ROAD AHEAD",
      description:
        "Artificial intelligence (AI) is a rapidly advancing technology that has the potential to revolutionize the way we live and work. From self-driving cars to personalized medical treatments, the applications of AI are vast and varied."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7659929448",
  email_address: "vahanthguna765992@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "_DheerajTiwari", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable
};
