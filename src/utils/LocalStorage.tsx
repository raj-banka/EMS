const employees = [
  {
    id: 1,
    name: "Aarav Mehta",
    email: "a@m.com",
    password: "123",
    tasks: [
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        title: "Design Landing Page",
        description: "Create a responsive landing page with Tailwind CSS.",
        date: "2025-04-16",
        categories: ["frontend"]
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        title: "Review Color Scheme",
        description: "Assess and update color palette for branding consistency.",
        date: "2025-04-13",
        categories: ["branding"]
      },
      {
        active: false,
        completed: false,
        failed: false,
        newTask: true,
        title: "Design Icons",
        description: "Design consistent iconography for the mobile app.",
        date: "2025-04-17",
        categories: ["ui"]
      }
    ],
    taskCount: {
      active: 1,  // 1 active task
      newTask: 1, // 1 new task
      completed: 1, // 1 completed task
      failed: 0 // No failed tasks
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
        completed: true,
        failed: false,
        newTask: false,
        title: "Setup Jenkins Pipeline",
        description: "Create a CI/CD pipeline using Jenkins and Docker.",
        date: "2025-04-14",
        categories: ["automation"]
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        title: "Optimize Build Process",
        description: "Speed up the Webpack build and deployment time.",
        date: "2025-04-17",
        categories: ["performance"]
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        title: "Fix Deployment Bug",
        description: "Resolve issue causing rollback after deployment.",
        date: "2025-04-15",
        categories: ["deployment"]
      },
      {
        active: false,
        completed: false,
        failed: false,
        newTask: true,
        title: "Write Deployment Scripts",
        description: "Automate staging deployment with custom scripts.",
        date: "2025-04-18",
        categories: ["devops"]
      }
    ],
    taskCount: {
      active: 1,  // 1 active task
      newTask: 1, // 1 new task
      completed: 1, // 1 completed task
      failed: 1 // 1 failed task
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
        completed: false,
        failed: false,
        newTask: false,
        title: "Integrate Razorpay",
        description: "Set up Razorpay API for handling online payments.",
        date: "2025-04-17",
        categories: ["payments"]
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        title: "Refactor Auth Module",
        description: "Rewrite authentication logic for better scalability.",
        date: "2025-04-15",
        categories: ["auth"]
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        title: "Setup Environment Variables",
        description: "Use dotenv to manage sensitive config securely.",
        date: "2025-04-12",
        categories: ["config"]
      }
    ],
    taskCount: {
      active: 1,  // 1 active task
      newTask: 0, // No new task
      completed: 1, // 1 completed task
      failed: 1 // 1 failed task
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
        completed: false,
        failed: true,
        newTask: false,
        title: "Draft User Manual",
        description: "Write step-by-step onboarding guide for new users.",
        date: "2025-04-12",
        categories: ["writing"]
      },
      {
        active: false,
        completed: false,
        failed: false,
        newTask: true,
        title: "Create FAQs",
        description: "Collect and write FAQ entries for support section.",
        date: "2025-04-17",
        categories: ["support"]
      },
      {
        active: true,
        completed: false,
        failed: false,
        newTask: false,
        title: "Revise Internal Docs",
        description: "Update outdated developer guides and API notes.",
        date: "2025-04-18",
        categories: ["documentation"]
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        title: "Team Wiki Setup",
        description: "Create a Notion workspace for documentation.",
        date: "2025-04-10",
        categories: ["setup"]
      },
      {
        active: false,
        completed: false,
        failed: true,
        newTask: false,
        title: "Archive Old Docs",
        description: "Clean up deprecated pages and move to archive.",
        date: "2025-04-11",
        categories: ["cleanup"]
      }
    ],
    taskCount: {
      active: 1,  // 1 active task
      newTask: 1, // 1 new task
      completed: 1, // 1 completed task
      failed: 2 // 2 failed tasks
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
        completed: false,
        failed: false,
        newTask: false,
        title: "Fix iOS Bugs",
        description: "Resolve touch event issues on iOS devices.",
        date: "2025-04-18",
        categories: ["mobile"]
      },
      {
        active: false,
        completed: true,
        failed: false,
        newTask: false,
        title: "Code Review",
        description: "Review pull requests from frontend team.",
        date: "2025-04-13",
        categories: ["review"]
      },
      {
        active: false,
        completed: false,
        failed: false,
        newTask: true,
        title: "Setup Crashlytics",
        description: "Integrate Firebase Crashlytics for app error tracking.",
        date: "2025-04-17",
        categories: ["monitoring"]
      }
    ],
    taskCount: {
      active: 1,  // 1 active task
      newTask: 1, // 1 new task
      completed: 1, // 1 completed task
      failed: 0 // No failed tasks
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
  }
  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees') || "[]");
    const admin = JSON.parse(localStorage.getItem('admin') || "[]");
    return ({employees , admin });
  }