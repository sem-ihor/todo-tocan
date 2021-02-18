export const menuItems = [
  {
    id: 1,
    label: "Navigation",
    isTitle: true
  },
  {
    id: 2,
    label: "Dashboard",
    icon: "mdi-view-dashboard",
    badge: {
      variant: "success",
      text: "Badge"
    },
    isMenuCollapsed: false,
    subItems: [
      {
        id: 3,
        label: "Home",
        link: "/"
      },
      {
        id: 4,
        label: "Task",
        link: "/task"
      },
      {
        id: 5,
        label: "User",
        link: "/person"
      }
    ]
  },
  {
    id: 6,
    label: "Apps",
    isTitle: true
  },
  {
    id: 7,
    label: "Chat",
    icon: "mdi-message-text",
    link: "/chat"
  },
  {
    id: 8,
    label: "Ecommerce",
    icon: "mdi-cart-variant",
    badge: {
      variant: "danger",
      text: "Ecommerce"
    },
    isMenuCollapsed: false,
  /*  subItems: [
      {
        id: 9,
        label: "Products",
        link: "/ecommerce/products"
      },
      {
        id: 10,
        label: "Productsgrid",
        link: "Products-grid"
      },
      {
        id: 14,
        label: "Orders",
        link: "/ecommerce/orders"
      }
    ]*/
  },
  {
    id: 19,
    label: "Calendar",
    icon: "mdi-calendar-month",
    link: "/apps/calendar"
  },
  {
    id: 20,
    label: "Email",
    icon: "mdi-email-multiple",
    isMenuCollapsed: false,
  },
  {
    id: 24,
    label: "Companies",
    icon: "mdi-office-building",
    link: "/apps/companies"
  },
  {
    id: 25,
    label: "Tasks",
    icon: "mdi-calendar-check",
    isMenuCollapsed: false,
  },
  {
    id: 29,
    label: "Ticket",
    icon: "mdi-face-agent",
    link: "/apps/tickets"
  },
  {
    id: 30,
    label: "Contacts",
    icon: "mdi-account-box",
    isMenuCollapsed: false,
  },
  {
    id: 33,
    label: "Filemanager",
    icon: "mdi-file-settings",
    link: "/apps/file-manager"
  },
  {
    id: 34,
    label: "Custom",
    isTitle: true
  },
  {
    id: 35,
    label: "Auth",
    icon: "mdi-clipboard-account-outline",
    isMenuCollapsed: false,
  },
  {
    id: 50,
    label: "Extrapages",
    icon: "mdi-one-up",
    isMenuCollapsed: false,
  },
  {
    id: 63,
    label: "Components",
    isTitle: true
  },
  {
    id: 64,
    label: "UI",
    icon: "mdi-cookie-minus",
    isMenuCollapsed: false,
  }
];
