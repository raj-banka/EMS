const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: true,
          completed: false,
          failed: false,
          pending: true,
          title: "Design Login Page",
          description: "Create responsive UI for the login page using Tailwind CSS.",
          date: "2025-04-16",
          categories: ["design", "frontend"]
        }
      ]
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: true,
          failed: false,
          pending: false,
          title: "Setup CI/CD",
          description: "Configure GitHub Actions for automatic testing and deployment.",
          date: "2025-04-14",
          categories: ["devops", "backend"]
        }
      ]
    },
    {
      id: 3,
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          pending: true,
          title: "API Integration",
          description: "Integrate payment API into the checkout process.",
          date: "2025-04-17",
          categories: ["backend", "integration"]
        }
      ]
    },
    {
      id: 4,
      name: "Diana Evans",
      email: "diana.evans@example.com",
      password: "123",
      tasks: [
        {
          active: false,
          newTask: false,
          completed: false,
          failed: true,
          pending: false,
          title: "Write Documentation",
          description: "Document the onboarding process and key workflows.",
          date: "2025-04-12",
          categories: ["documentation", "writing"]
        }
      ]
    },
    {
      id: 5,
      name: "Ethan Wilson",
      email: "ethan.wilson@example.com",
      password: "123",
      tasks: [
        {
          active: true,
          newTask: false,
          completed: false,
          failed: false,
          pending: true,
          title: "Fix Mobile Bugs",
          description: "Resolve layout issues on iOS Safari and Android Chrome.",
          date: "2025-04-18",
          categories: ["debugging", "mobile"]
        }
      ]
    }
  ];
  
  const admin = [
    {
      id: 0,
      name: "Admin User",
      email: "admin@example.com",
      password: "123"
    }
  ];

  export const setLocalStorage = ()=>{
     localStorage.setItem("employees" , JSON.stringify(employees));
     localStorage.setItem("admin" , JSON.stringify(admin));
  }
  export const getLocalStorage = ()=>{
    const employee = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(employee , admin);
  }