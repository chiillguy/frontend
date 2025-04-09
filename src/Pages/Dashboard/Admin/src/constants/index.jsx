import {
    MdDashboard,
    MdPeople,
    MdCategory,
    MdAdd,
    MdList,
    MdEvent,
    MdViewList,
  } from "react-icons/md";
  
  export const navbarLinks = [
    {
      title: "Dashboard",
      role: "admin", // hanya admin bisa lihat group ini
      links: [
        {
          label: "Dashboard",
          path: "/dashboard/admin",
          icon: MdDashboard,
          role: "admin",
        },
        {
          label: "Users",
          path: "/dashboard/admin/users",
          icon: MdPeople,
          role: "admin",
        },
        {
          label: "Categories",
          path: "/dashboard/admin/categories",
          icon: MdCategory,
          role: "admin",
        },
      ],
    },
    {
      title: "Recipe",
      links: [
        {
          label: "Create Recipe",
          path: "/dashboard/admin/create-recipe",
          icon: MdAdd,
        },
        {
          label: "Manage Recipe",
          path: "/dashboard/admin/manage-recipe",
          icon: MdList,
        },
      ],
    },
    {
      title: "Event",
      links: [
        {
          label: "Create Event",
          path: "/dashboard/admin/create-event",
          icon: MdEvent,
        },
        {
          label: "Manage Event",
          path: "/dashboard/admin/manage-event",
          icon: MdViewList,
        },
      ],
    },
  ];
  