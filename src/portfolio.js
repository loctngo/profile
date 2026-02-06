/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Billy Ngo",
  title: "Hi all, I'm Billy",
  subTitle: emoji(
    "A passionate Full Stack Software Engineer 🚀 (also a generic Coding Lover) having an experience of building web applications with Java / Maven / Grails / JavaScript / KnockoutJS and some other cool libraries and frameworks."
  ),
  showResume: true, // Set false to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/billytngo",
  linkedin: "https://www.linkedin.com/in/billy-ngo/",
  facebook: "https://www.facebook.com/billy.ngo.397/",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications with modern Bootstrap"
    ),
    emoji(
      "⚡ Develop Java (Maven / Grails) web application with strong backend services from a variety of awesome tools, techniques and 3rd-party integrations"
    ),
    emoji(
      "⚡ Architect your product with micro-service components & routing, result a final solution with low-latency, high performance, and scalability"
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
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "cloudflare",
      fontAwesomeClassname: "fab fa-cloudflare"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "California State Polytechnic University - Pomona",
      logo: require("./assets/images/cpp.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2016 - August 2017",
      desc: "Took advanced courses in Computer Science:",
      descBullets: [
        "Advanced Data Structure & Algorithms",
        "Advanced System Architecture",
        "Natural Language Processing",
        "Parallel Scheduling Algorithms",
        "..."
      ]
    },
    {
      schoolName: "Portland State University",
      logo: require("./assets/images/psu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2007 - August 2013",
      desc: "Took courses in Computer Science:",
      descBullets: [
        "Discrete Maths I & II",
        "Database",
        "Operating Systems",
        "Software Engineering",
        "..."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "QAD",
      companylogo: require("./assets/images/qad.png"),
      date: "Dec 2017 – Jan 2026",
      desc: "",
      descBullets: [
        "Develop QAD Digital Commerce platform which is serving B2C or B2B websites where users / vendors can go shopping online as any eCommerce website; and site admins can fully control / customize the website (such as layouts, categories, products, customers, orders, shipping, etc..).",
        "Develop Business Rule Builder to automate related-data backend jobs.",
        "Develop Artwork Visualization Tool to identify main colors automatically from a user logo to make final imprints in production.",
        "Maintenance Fix / Troubleshooting / Code Review and Team Collaboration."
      ]
    },
    {
      role: "Software Engineer",
      company: "BaldPeak Software",
      companylogo: require("./assets/images/bp.png"),
      date: "Nov 2013 – Dec 2015",
      desc: "",
      descBullets: [
        "Develop self-service web-based PeakPortal where users can pay their billings and manage their subscriptions.",
        "Integrate PeakPortal with Zuora REST / SOAP API as core framework, and Salesforce API for CRM contacts.",
        "Write Netsuite custom script upon client requirements.",
        "Maintenance Fix / Troubleshooting / Code Review and Team Collaboration."
      ]
    },
    {
      role: "Student Programmer",
      company: "Portland State University",
      companylogo: require("./assets/images/psu.png"),
      date: "Oct 2011 – Oct 2013",
      desc: "",
      descBullets: [
        "Join Academic & Research Computing (ARC) team to develop Drupal websites for University clients with back-end (PHP, Bash Scripting), and front-end (HTML, CSS, JavaScript, jQuery, jQueryUI).",
        "Work on Python Selenium RC to automate the modification of data (in JSON) for Graduate School of Education (Continuing Education - CEED).",
        "Research web open-source technologies and web security techniques.",
        "Maintenance Fix / Troubleshooting / Code Review and Team Collaboration."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "MASTER FINAL PROJECT & SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/woodcutters.png"),
      projectName: "WoodCutters",
      projectDesc:
        "A Cocos2d HTML5 game for Master Final Project at California State Polytechnic University - Pomona to demonstrate 2 parallel scheduling algorithms in non-preemptive mode (Multifit) and preemptive mode (Leung-Young).",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://billytngo.github.io/woodcutters/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/peak-commerce.png"),
      projectName: "PeakPortal",
      projectDesc:
        "The Leading Subscription Ecommerce Platform. Imagine a platform that customizes the subscriber journey for every shopper, eliminating distractions along the way. Welcome to Digital Journey Monetization.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.peakcommerce.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/qad-digital-commerce.png"),
      projectName: "QAD Digital Commerce",
      projectDesc:
        "Sell your products online and manage your customers, inventory, shipments quotes and invoices. Digitally transform your business with a powerful and scalable e-commerce and marketing automation solution for B2B and B2C.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.qad.com/solutions/qad-digital-commerce"
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
      title: "Google Code Jam",
      subtitle: "Ranked #2345 in Round 2 - May 2022",
      image: require("./assets/images/google_code_jam.png"),
      imageAlt: "Google Code Jam Logo",
      footerLink: [
        {
          name: "Final Dashboard",
          url: "https://drive.google.com/file/d/1v9ndTfLP0ZX-c-K0T_IaXfBWasiN25UM/view?usp=sharing"
        }
      ]
    },
    {
      title: "Meta Hacker Cup",
      subtitle: "Ranked #1307 in Round 2 - Sep 2021",
      image: require("./assets/images/meta_hacker_cup.png"),
      imageAlt: "Meta Hacker Cup Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.facebook.com/codingcompetitions/hacker-cup/2021/certificate/255450382415523"
        }
      ]
    },

    {
      title: "International Achievement Scholarship",
      subtitle: "Awarded at Portland State University - Mar 2011",
      image: require("./assets/images/psu-ias.jpg"),
      imageAlt: "PWA Logo",
      footerLink: []
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me")
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
