const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'NS',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Karthikeyan NS',
  role: 'Full Stack Engineer',
  description:
    'Experienced Software Engineer with a passion for developing scalable systems that are relatable and user-friendly which expedite the efficiency and effectiveness of the organization. Over 3+ years of experience in .NET Core Web Applications',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com'
    // github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Calcium',
    description:'Building scalable & customer focused software to manage the health data, integrate with health apps using .NET Core & React',
    stack: ['.NET CORE WEB API', 'React'],
  },
  {
    name: 'Tax Bandits',
    description:
      'It is a complete compliance solution for employers and other tax professionals which is built using .NET Core',
    stack: ['.NET CORE', 'MVC', 'JQUERY']
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
  {
    name: 'Trucklogics',
    description:
      'Trucking management software, designed to simplify managing the Trucking business on the road designed using .NET MVC Framework',
    stack: ['.NET FRAMEWORK', 'MVC', 'CSHTML']
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
  },
]

const skills = [
  'C#',
  '.NET CORE',
  'WEB API',
  'EF CORE',
  'SQL SERVER',
  'JavaScript',
  'React',
  'Redux',
  'HTML',
  'CSS',
  'Git',
  'AZURE FUNCTIONS'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'learnerkarthik@gmail.com',
}

export { header, about, projects, skills, contact }
