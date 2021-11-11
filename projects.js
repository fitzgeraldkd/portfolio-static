const projects = {
    "projects": [
      {
        "id": 5,
        "title": "Dot Matrix Animator",
        "images": {
          "raster": "./media/projects/dot-matrix.gif"
        },
        "technologies": [
          "Ruby"
        ],
        "description": "Dot Matrix Animator is a Ruby program that takes input images and creates an animated GIF where the frames are represented as dot matrix images. The RMagick library is used to process and generate images, and the Thor library is used to implement a command-line interface with options for user input. I started this project to familiarize myself with Ruby's syntax before going through the Flatiron School software engineering program.",
        "links": {
          "GitHub": "https://github.com/fitzgeraldkd/dot-matrix"
        }
      },
      {
        "id": 3,
        "title": "Lost Languages",
        "images": {
          "vector": "./media/projects/lost-languages.svg",
          "raster": "./media/projects/lost-languages.png"
        },
        "technologies": [
          "JavaScript",
          "TypeScript",
          "React"
        ],
        "description": "My first project built as part of the Flatiron School curriculum. Originally built with vanilla JavaScript as a project that interacts with a public API, I have rebuilt it with TypeScript + React for some additional practice. The purpose of this app is to provide users with a means to practice learning a new language and to see/vote on other users' translations.",
        "links": {
          "GitHub": "https://github.com/fitzgeraldkd/lost-languages",
          "Demo": "https://lost-languages.netlify.app/"
        }
      },
      {
        "id": 1,
        "title": "Crash Landing",
        "images": {
          "vector": "./media/projects/crash-landing.svg",
          "raster": "./media/projects/crash-landing.png"
        },
        "technologies": [
          "JavaScript",
          "TypeScript",
          "jQuery"
        ],
        "description": "A simple text-based browser game where you help a rover navigate the surface of Mars to find its power supply that was lost in a crash landing. This was originally developed as part of the Spacebook project built for the Python Discord Summer Code Jam 2020. I am in the process of rebuilding it to develop familiarity with TypeScript and to make this project accessible from a static web page.",
        "links": {
          "GitHub": "https://github.com/fitzgeraldkd/crash-landing",
          "Demo": "https://fitzgeraldkd.github.io/crash-landing/"
        }
      },
      {
        "id": 2,
        "title": "Spacebook",
        "images": {
          "vector": "./media/projects/spacebook.svg",
          "raster": "./media/projects/spacebook.png"
        },
        "technologies": [
          "Python",
          "Django"
        ],
        "description": "This was developed for the Python Discord Summer Code Jam 2020, where I worked with a team of 4 to develop a web app in Django based on the theme \"Early Internet.\" My team decided to build a social media website for the Mars rovers. Photos taken by the rovers were downloaded using API from NASA and were added as posts to each of the rovers' profiles. We also added a text-based game where you play as a rover that just crash landed on Mars. The goal of the game is to find your plutonium before your battery depletes. Out of the 45 teams that submitted projects, we finished in third place. The files for our project can be downloaded at the GitHub page, and instructions to set up and launch the site are included in the ReadMe.",
        "links": {
          "GitHub": "https://github.com/fitzgeraldkd/Spacebook"
        }
      },
      {
        "id": 4,
        "title": "TomautoMate",
        "images": {
          "vector": "./media/projects/tomautomate.svg",
          "raster": "./media/projects/tomautomate.png"
        },
        "technologies": [
          "JavaScript"
        ],
        "description": "A Chrome extension I've started building, mostly as a learning opportunity for myself, but also as a potential means to help with productivity. The goal of the extension is to allow the user to mark each window of Chrome as a task window or break window. When the timer changes between task and break mode, the appropriate windows will be hidden/shown automatically.",
        "links": {
          "GitHub": "https://github.com/fitzgeraldkd/TomautoMate"
        }
      }
    ]
  };

  export default projects;