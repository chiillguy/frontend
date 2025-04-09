import { useEffect } from 'react';
import './App.css';
import { Route, Routes, Outlet, useLocation } from 'react-router-dom';

// Halaman utama
import {
  Home, Blogs, Recipe, Event, Login, Register,
  DetailRecipe, DetailBlog, DetailEvent,
  UpdateRecipe, RecipeApp,
  Breakfast, Lunch, Dinner, Beverage,
  Dessert, Snack
} from './Pages';

// Dashboard admin (import semua komponen dashboard)
import Layout from './Pages/Dashboard/Admin/src/routes/layout';
import DashboardPage from './Pages/Dashboard/Admin/src/routes/dashboard/page';
import UsersPage from './Pages/Dashboard/Admin/src/routes/dashboard/UsersPage';
import CreateRecipe from './Pages/Dashboard/Admin/src/routes/dashboard/CreateRecipe';
import RecipesPage from './Pages/Dashboard/Admin/src/routes/dashboard/RecipesPage';
import CreateEvent from './Pages/Dashboard/Admin/src/routes/dashboard/CreateEvent';
import EventsPage from './Pages/Dashboard/Admin/src/routes/dashboard/EventsPage';
import CategoriesPage from './Pages/Dashboard/Admin/src/routes/dashboard/CategoriesPage';

import ContentRoutes from './Routes/ContentRoutes';
import PrivaRoutes from './Routes/PrivaRoutes';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return <Outlet />;
}

function App() {
  return (
    <Routes>
      <Route element={<ScrollToTop />}>

        {/* Auth */}
        <Route element={<PrivaRoutes />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Halaman utama public */}
        <Route element={<ContentRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<DetailBlog />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/recipe/:id" element={<DetailRecipe />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:id" element={<DetailEvent />} />
          <Route path="/recipe/edit/:id" element={<UpdateRecipe />} />
          <Route path="/recipe/:category" element={<RecipeApp />} />
          <Route path="/recipe/breakfast" element={<Breakfast />} />
          <Route path="/recipe/lunch" element={<Lunch />} />
          <Route path="/recipe/dinner" element={<Dinner />} />
          <Route path="/recipe/beverage" element={<Beverage />} />
          <Route path="/recipe/dessert" element={<Dessert />} />
          <Route path="/recipe/snack" element={<Snack />} />
        </Route>

        {/* DASHBOARD ADMIN */}
        <Route path="/dashboard/admin" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="create-recipe" element={<CreateRecipe />} />
          <Route path="manage-recipe" element={<RecipesPage />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="manage-event" element={<EventsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
