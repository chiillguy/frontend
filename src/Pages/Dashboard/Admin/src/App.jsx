import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout";

import DashboardPage from "./routes/dashboard/page";
import UsersPage from "./routes/dashboard/UsersPage";
import CreateRecipe from "./routes/dashboard/CreateRecipe";
import RecipesPage from "./routes/dashboard/RecipesPage";
import CreateEvent from "./routes/dashboard/CreateEvent";
import EventsPage from "./routes/dashboard/EventsPage";
import CategoriesPage from "./routes/dashboard/CategoriesPage";
import AdminRoute from "./components/AdminRoute"; // ⬅️ Tambahkan ini

const router = createBrowserRouter([
  {
    path: "/dashboard/admin",
    element: <Layout />,
    children: [
      // Dashboard boleh untuk admin & chef
      { index: true, element: <DashboardPage /> },

      // Users hanya untuk admin
      {
        path: "users",
        element: (
          <AdminRoute>
            <UsersPage />
          </AdminRoute>
        ),
      },

      // Resep: akses untuk semua role
      { path: "create-recipe", element: <CreateRecipe /> },
      { path: "manage-recipe", element: <RecipesPage /> },

      // Event: akses untuk semua role
      { path: "create-event", element: <CreateEvent /> },
      { path: "manage-event", element: <EventsPage /> },

      // Categories hanya untuk admin
      {
        path: "categories",
        element: (
          <AdminRoute>
            <CategoriesPage />
          </AdminRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
