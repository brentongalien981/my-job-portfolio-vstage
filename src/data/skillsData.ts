export interface Skill {
  subject: string;
  subskills: string[];
}


export const skillsData: Skill[] = [
  {
    subject: 'Frontend',
    subskills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Redux']
  },
  {
    subject: 'Backend',
    subskills: ['RESTful APIs', 'Node.js', 'Express', 'Laravel', 'ASP.NET']
  },
  {
    subject: 'Databse',
    subskills: ['MongoDB', 'Mongoose', 'MySQL', 'Sequelize', 'MS SQL']
  },
  {
    subject: 'Programming Languages',
    subskills: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'C#']
  },
  {
    subject: 'Testing',
    subskills: ['React Testing Library', 'Unit Testing', 'Integration Testing', 'Jest', 'Mocha', 'Chai', 'Sinon', 'JUnit']
  },
  {
    subject: 'DevOps',
    subskills: ['CI/CD', 'Docker', 'Git', 'GitHub', 'GitHub Actions']
  },
  {
    subject: 'Cloud Services',
    subskills: ['AWS', 'S3', 'EC2', 'ECS', 'RDS', 'Route53', 'Redis Elasticache', 'SQS', 'SES']
  },
  {
    subject: 'Soft Skills',
    subskills: ['Accountability', 'Adaptability', 'Teamwork', 'Communication', 'Problem Solving', 'Time Management', 'Organization', "Hardworking"]
  }
];