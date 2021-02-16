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
        label: "Sales",
        link: "/"
      },
      {
        id: 4,
        label: "Crm",
        link: "/dashboard/crm"
      },
      {
        id: 5,
        label: "Analytics",
        link: "/dashboard/analytics"
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
    link: "/apps/chat"
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
    subItems: [
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
    ]
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
    subItems: [
      {
        id: 21,
        label: "Inbox",
        link: "/email/inbox"
      },
      {
        id: 22,
        label: "Reademail",
        link: "/email/reademail/1"
      },
      {
        id: 23,
        label: "Template",
        link: "/email/templates"
      }
    ]
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
    subItems: [
      {
        id: 26,
        label: "List",
        link: "/task/list"
      },
      {
        id: 27,
        label: "Detail",
        link: "/task/detail"
      },
      {
        id: 28,
        label: "Kanban",
        link: "/task/kanban"
      }
    ]
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
    subItems: [
      {
        id: 31,
        label: "Members",
        link: "/contacts/list"
      },
      {
        id: 32,
        label: "Profile",
        link: "/contacts/profile"
      }
    ]
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
    subItems: [
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      },
      {
        id: 36,
        label: "Login",
        link: "/auth/login"
      }
    ]
  },
  {
    id: 50,
    label: "Extrapages",
    icon: "mdi-one-up",
    isMenuCollapsed: false,
    subItems: [
      {
        id: 51,
        label: "Extrapages",
        link: "/extras/starter"
      },
      {
        id: 51,
        label: "Extrapages",
        link: "/extras/starter"
      },
      {
        id: 51,
        label: "Extrapages",
        link: "/extras/starter"
      },
      {
        id: 51,
        label: "Extrapages",
        link: "/extras/starter"
      },
      {
        id: 51,
        label: "Extrapages",
        link: "/extras/starter"
      },
      {
        id: 51,
        label: "Extrapages",
        link: "/extras/starter"
      },
      {
        id: 51,
        label: "Extrapages",
        link: "/extras/starter"
      },
      {
        id: 51,
        label: "Extrapages",
        link: "/extras/starter"
      }
    ]
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
    subItems: [
      {
        id: 65,
        label: "Avatars",
        link: "/ui/avatars"
      },
      {
        id: 66,
        label: "Buttons",
        link: "/ui/buttons"
      },
      {
        id: 67,
        label: "Cards",
        link: "/ui/cards"
      },
      {
        id: 68,
        label: "Carousel",
        link: "/ui/carousel"
      },
      {
        id: 69,
        label: "Dropdowns",
        link: "/ui/dropdowns"
      },
      {
        id: 70,
        label: "Video",
        link: "/ui/video"
      },
      {
        id: 71,
        label: "General",
        link: "/ui/general"
      },
      {
        id: 72,
        label: "Grid",
        link: "/ui/grid"
      },
      {
        id: 73,
        label: "Images",
        link: "/ui/images"
      },
      {
        id: 74,
        label: "Listgroup",
        link: "/ui/list-group"
      },
      {
        id: 75,
        label: "Modals",
        link: "/ui/modals"
      },
      {
        id: 76,
        label: "Notifications",
        link: "/ui/notifications"
      },
      {
        id: 77,
        label: "Portlet",
        link: "/ui/portlets"
      },
      {
        id: 78,
        label: "Progress",
        link: "/ui/progress"
      }
    ]
  }
];
