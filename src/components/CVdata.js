export const CVData = {
    personalData: {
      name: 'Divyansh Chaudhary',
      title: 'Product Expert',
      image: 'https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/16602896_1571920622837072_4161117462931355705_n.jpg?_nc_cat=108&_nc_oc=AQlLcCiFX4vKACF8b06Bh3jGtBsmwQoJHKKKcP-EQDFy5Gs5r5QqRrfzaqGMyqyfdWo&_nc_ht=scontent.fdel8-1.fna&oh=320d2bfe9d0c44750fc3cd4fa16f2b64&oe=5E2EA832',
      contacts: [
        { type: 'email', value: 'divi.v@outlook.com' },
        { type: 'phone', value: '+91 (738) 297 1692' },
        { type: 'website', value: 'www.divyansh.ga' },
        { type: 'github', value: 'github.com/divyans7' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Profile',
        content: ' Brilliant and creative IT professional with Bachelor’s Degree in Information Technology and passionate about creating customized solutions seeks the position of Front-end Developer in an exciting and dynamic company. With an overall experience of 2 years, including an year of experience and certifications in developing front end applications. With an aim to learn and develop new skills which will further serve the purpose of finding smart & scalable solutions.',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Information & Technology (B.Tech)',
            authority: 'C.C.S University',
            authorityWebSite: 'http://ccsuniversity.ac.in/default.htm',
            rightSide: '2012 - 2016'
          },
          {
            title: 'AISSCE (12th) ',
            authority: 'Meerut Public School',
            authorityWebSite: 'http://www.meerutpublicschool.edu.in/',
            rightSide: '2011 - 2012'
          },

          {
            title: 'AISSE (10th) ',
            authority: 'Meerut Public School',
            authorityWebSite: 'http://www.meerutpublicschool.edu.in/',
            rightSide: '2009 - 2010'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        description: 'Optional',
        icon: 'archive',
        items: [
          {
            title: 'Associate - Front End',
            company: 'AT&T',
            description: 'I\'ve worked as a Front End Developer for AT&T on contractual basis. Wherein the lions share of my task was to develop Front End for the in house business applications.',
            companyWebSite: 'https://www.att.com/',
            companyMeta: 'Gurugram',
            datesBetween: 'August 2018 - August 2019',
            descriptionTags: ['Javascript', 'React', 'Redux', 'Sass', 'BootStrap']
          },
          {
            title: 'Customer Service New Associate',
            company: 'Accenture',
            description: 'Was responsible for analyzing and identifying specific instances of risk, broader risk trends and points of customer friction, developing scalable solutions for prevention.',
            companyWebSite: 'https://www.accenture.com/in-en',
            companyMeta: 'Gurugram',
            datesBetween: 'August 2017 - July 2018'
          },
          {
            title: 'Intern',
            company: 'Iveda India',
            description: 'Engaged as a Subject Matter Expert for Technology mapping of Functional Departments to scope & assess current technology deployed, pain points in business & technology acquisition needs.',
            companyWebSite: 'http://someexamplecompany.com',
            companyMeta: 'Noida',
            datesBetween: 'July 2017 - August 2017'
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projects',
        description: 'Optional',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Company Name',
            description: 'Optional',
            items: [
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' },
              { title: 'Project', projectUrl: 'optional', description: 'Optional' }
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Conferences & Certificates',
        description: '',
        icon: 'comments',
        items: [
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityWebSite: 'https://www.someconf.somesome'
          },
          {
            title: 'Some Conferences / 2019',
            authority: 'SomeConf',
            authorityMeta: 'Speaker',
            authorityWebSite: 'https://www.someconf.somesome',
            rightSide: 'test'
          },
          {
            title: 'Some Conferences / 2012',
            authorityMeta: 'Speaker'
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Professional'
          },
          {
            authority: 'Spanish',
            authorityMeta: 'Beginner'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'CSS', 'SQL', 'SomeTech', 'CoolTech']
      },
      {
        type: 'tag-list',
        title: 'Hobies & Interests',
        icon: 'cubes',
        items: ['Photography', 'Poetry']
      }
    ]
  }