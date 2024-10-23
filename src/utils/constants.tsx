export const SLUGS = {
  RHCSA: 'rhcsa-certifications-training-course',
  RHCE: 'rhce-ansible-certifications-training-course',
  DO188: 'DO188',
  DO280: 'DO280',
  DO380: 'RHCSA-Red-Hat-Certified-System-Administrator',
  RH415: 'server-hardening-certifications-training-course',
  RH358:
    'redhat-service-management-and-automation-certification-training-course',
  REDHAT_OPENSHIFT: 'RHCSA-Red-Hat-Certified-System-Administrator',
  OPENSHIFT_AI: 'RHCSA-Red-Hat-Certified-System-Administrator',
  CKA: 'RHCSA-Red-Hat-Certified-System-Administrator',
  DOCKER_CONTAINER_TRANING: 'RHCSA-Red-Hat-Certified-System-Administrator',
  AWS_Solutions_Architect_Associate:
    'RHCSA-Red-Hat-Certified-System-Administrator',
  DEVOPS: 'devops-certification-training-course',
  BCA_DEGREE_PROGRAM: 'RHCSA-Red-Hat-Certified-System-Administrator',
  MCA_DEGREE_PROGRAM: 'RHCSA-Red-Hat-Certified-System-Administrator',
  SUMMER_INTERNSHIP_TRANING: 'RHCSA-Red-Hat-Certified-System-Administrator',
  WINTER_INTERNSHIP_TRANING: 'RHCSA-Red-Hat-Certified-System-Administrator',
}

export const COURSE_DETAILS = {
  [SLUGS.AWS_Solutions_Architect_Associate]: {
    banner: '',
  },
  [SLUGS.BCA_DEGREE_PROGRAM]: {},
  [SLUGS.CKA]: {},
  [SLUGS.DEVOPS]: {},
  [SLUGS.DO188]: {},
  [SLUGS.DO280]: {},
  [SLUGS.DO380]: {},
  [SLUGS.DOCKER_CONTAINER_TRANING]: {},
  [SLUGS.MCA_DEGREE_PROGRAM]: {},
  [SLUGS.OPENSHIFT_AI]: {},
  [SLUGS.REDHAT_OPENSHIFT]: {},
  [SLUGS.RH358]: {},
  [SLUGS.RH415]: {},
  [SLUGS.RHCE]: {},
  [SLUGS.RHCSA]: {
    name: 'RHCSA Traning',
    banner: 'assets/img/1.svg',
    about:
      'The Red Hat Certified System Administrator (RHCSA) course provides essential training for individuals to manage Linux systems. It covers key topics like installing and configuring Red Hat Enterprise Linux, managing file systems and users, and configuring security. Participants also learn system monitoring, automation using Bash scripting, and managing services and processes. The course is designed to equip learners with practical skills for real-world Linux administration tasks, preparing them for the RHCSA certification exam and roles as system administrators.',
    highlights: [
      {
        heading: 'Linux System Management:',
        content:
          'Learn to install, configure, and maintain Red Hat Enterprise Linux systems.',
      },
      {
        heading: 'User and File Management:',
        content:
          'Manage users, groups, permissions, and file systems efficiently.',
      },
      {
        heading: 'Security and Networking:',
        content:
          'Configure firewalls, SELinux, and basic network services for secure system operations.',
      },
      {
        heading: 'Automation:',
        content:
          'Use Bash scripting to automate routine tasks, improving system management efficiency.',
      },
      {
        heading: 'Exam Preparation:',
        content:
          'Gain hands-on skills required to pass the RHCSA certification exam, focusing on real-world scenarios.',
      },
    ],
    prerequisites: [
      {
        heading: 'Basic Knowledge of Linux:',
        content:
          'Familiarity with basic Linux commands and concepts is recommended, though not mandatory.',
      },
      {
        heading: 'Understanding of Computer Hardware:',
        content:
          'A basic understanding of computer hardware and operating system concepts will be helpful.',
      },
      {
        heading: 'Interest in System Administration:',
        content:
          'Enthusiasm for learning system administration and networking tasks is crucial.',
      },
      {
        heading: 'No Formal Certification Required:',
        content:
          'No previous certification is necessary to enroll in the RHCSA course, making it accessible for beginners.',
      },
    ],
    duration:
      '6 Months (120 hours of classNameroom training + 40 hours of hands-on project work)',
    outlines: ['Introduction to Programming and IT Fundamentals'],
    certification:
      'Upon successful completion of the course, you will receive a globally recognized certification in IT Development and Cloud Computing.',
    exam: {},
    pdf: 'assets/courses-pdfs/RHCSA.pdf',
  },
  [SLUGS.SUMMER_INTERNSHIP_TRANING]: {},
  [SLUGS.WINTER_INTERNSHIP_TRANING]: {},
}

export const COURSES = [
  {
    name: 'REDHAT',
    route: '',
    subCourse: [
      {
        name: 'RHCSA (Red Hat Certified System Administrator)',
        route: `/course/${SLUGS.RHCSA}`,
      },
      {
        name: 'RHCE (Red Hat Certified Engineer)',
        route: `/course/${SLUGS.RHCE}`,
      },
      {
        name: 'DO188 (Red Hat OpenShift Development I)',
        route: `/course/${SLUGS.DO188}`,
      },
      {
        name: 'DO280 (Red Hat OpenShift Administration I)',
        route: `/course/${SLUGS.DO280}`,
      },
      {
        name: 'DO380 (Red Hat OpenShift Administration II)',
        route: `/course/${SLUGS.DO380}`,
      },
      {
        name: 'RH415 (Red Hat Security: Linux in Physical, Virtual, and Cloud)',
        route: `/course/${SLUGS.RH415}`,
      },
      {
        name: 'RH358 (Red Hat Services Management and Automation)',
        route: `/course/${SLUGS.RH358}`,
      },
      {
        name: 'Red Hat Virtualization with OpenShift',
        route: `/course/${SLUGS.REDHAT_OPENSHIFT}`,
      },
      {
        name: 'OpenShift AI',
        route: `/course/${SLUGS.OPENSHIFT_AI}`,
      },
    ],
  },
  {
    name: 'Kubernetes',
    route: '',
    subCourse: [
      {
        name: 'Certified Kubernetes Administrator (CKA)',
        route: `/course/${SLUGS.CKA}`,
      },
    ],
  },
  {
    name: 'Docker',
    route: '',
    subCourse: [
      {
        name: 'Docker Container Training',
        route: `/course/${SLUGS.DOCKER_CONTAINER_TRANING}`,
      },
    ],
  },
  {
    name: 'AWS',
    route: '',
    subCourse: [
      {
        name: 'AWS Solutions Architect – Associate',
        route: `/course/${SLUGS.AWS_Solutions_Architect_Associate}`,
      },
    ],
  },
  {
    name: 'DevOps',
    route: `/course/${SLUGS.DEVOPS}`,
    subCourse: [],
  },
]

export const DEGREE_PROGRAMS = [
  {
    name: 'BCA Degree Program',
    route: `/course/${SLUGS.BCA_DEGREE_PROGRAM}`,
    subCourse: [],
  },
  {
    name: 'MCA Degree Program',
    route: `/course/${SLUGS.MCA_DEGREE_PROGRAM}`,
    subCourse: [],
  },
]
export const INTERNSHIP_PROGRAMS = [
  {
    name: 'Summer Internship',
    route: `/course/${SLUGS.SUMMER_INTERNSHIP_TRANING}`,
    subCourse: [],
  },
  {
    name: 'Winter Internship',
    route: `/course/${SLUGS.WINTER_INTERNSHIP_TRANING}`,
    subCourse: [],
  },
]

export const API_HOST_URL = '' //process.env.REACT_API_URL

export const HTTP_STATUS = {
  OK: 200,
}
export const PHONE_NO = '9001991227'
export const WHATS_APP_LINK = 'https://wa.link/2b0tl9'
export const OFFICIAL_EMAIL = 'info@grras.com'
