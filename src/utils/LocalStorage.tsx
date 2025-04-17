const employees = [
  {
    id: 1,
    name: "Aarav Mehta",
    email: "a@m.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        pending: true,
        title: "Design Landing Page",
        description: "Create a responsive landing page with Tailwind CSS.",
        date: "2025-04-16",
        categories: ["design", "frontend"]
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        pending: false,
        title: "Review Color Scheme",
        description: "Assess and update color palette for branding consistency.",
        date: "2025-04-13",
        categories: ["design", "branding"]
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        pending: true,
        title: "Design Icons",
        description: "Design consistent iconography for the mobile app.",
        date: "2025-04-17",
        categories: ["design", "ui"]
      }
    ],
    taskCount: {
      active: 2,
      pending: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    name: "Bhavya Sharma",
    email: "b@s.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        pending: false,
        title: "Setup Jenkins Pipeline",
        description: "Create a CI/CD pipeline using Jenkins and Docker.",
        date: "2025-04-14",
        categories: ["devops", "automation"]
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        pending: true,
        title: "Optimize Build Process",
        description: "Speed up the Webpack build and deployment time.",
        date: "2025-04-17",
        categories: ["devops", "performance"]
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        pending: false,
        title: "Fix Deployment Bug",
        description: "Resolve issue causing rollback after deployment.",
        date: "2025-04-15",
        categories: ["bugfix", "deployment"]
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        pending: true,
        title: "Write Deployment Scripts",
        description: "Automate staging deployment with custom scripts.",
        date: "2025-04-18",
        categories: ["scripting", "devops"]
      }
    ],
    taskCount: {
      active: 2,
      pending: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 3,
    name: "Charvi Iyer",
    email: "c@i.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        pending: true,
        title: "Integrate Razorpay",
        description: "Set up Razorpay API for handling online payments.",
        date: "2025-04-17",
        categories: ["integration", "payments"]
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        pending: false,
        title: "Refactor Auth Module",
        description: "Rewrite authentication logic for better scalability.",
        date: "2025-04-15",
        categories: ["backend", "auth"]
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        pending: false,
        title: "Setup Environment Variables",
        description: "Use dotenv to manage sensitive config securely.",
        date: "2025-04-12",
        categories: ["backend", "config"]
      }
    ],
    taskCount: {
      active: 1,
      pending: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 4,
    name: "Devanshi Patel",
    email: "d@p.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        pending: false,
        title: "Draft User Manual",
        description: "Write step-by-step onboarding guide for new users.",
        date: "2025-04-12",
        categories: ["documentation", "writing"]
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        pending: true,
        title: "Create FAQs",
        description: "Collect and write FAQ entries for support section.",
        date: "2025-04-17",
        categories: ["content", "support"]
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        pending: true,
        title: "Revise Internal Docs",
        description: "Update outdated developer guides and API notes.",
        date: "2025-04-18",
        categories: ["documentation", "internal"]
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        pending: false,
        title: "Team Wiki Setup",
        description: "Create a Notion workspace for documentation.",
        date: "2025-04-10",
        categories: ["knowledgebase", "setup"]
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        pending: false,
        title: "Archive Old Docs",
        description: "Clean up deprecated pages and move to archive.",
        date: "2025-04-11",
        categories: ["cleanup", "documentation"]
      }
    ],
    taskCount: {
      active: 2,
      pending: 2,
      newTask: 1,
      completed: 1,
      failed: 2
    }
  },
  {
    id: 5,
    name: "Eshan Reddy",
    email: "e@r.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        pending: true,
        title: "Fix iOS Bugs",
        description: "Resolve touch event issues on iOS devices.",
        date: "2025-04-18",
        categories: ["debugging", "mobile"]
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        pending: false,
        title: "Code Review",
        description: "Review pull requests from frontend team.",
        date: "2025-04-13",
        categories: ["review", "frontend"]
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        pending: true,
        title: "Setup Crashlytics",
        description: "Integrate Firebase Crashlytics for app error tracking.",
        date: "2025-04-17",
        categories: ["monitoring", "mobile"]
      }
    ],
    taskCount: {
      active: 2,
      pending: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  }
];

  const admin = [
    {
      id: 0,
      name: "Raj Banka",
      email: "admin@example.com",
      password: "123"
    }
  ];

  export const setLocalStorage = ()=>{
     localStorage.setItem("employees" , JSON.stringify(employees));
     localStorage.setItem("admin" , JSON.stringify(admin));
    //  localStorage.setItem("loggedIn",JSON.stringify(null));
  }
  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    // const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    return ({employees , admin });
  }