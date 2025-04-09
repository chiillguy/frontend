import { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "../constants";
import { cn } from "../utils/cn";
import PropTypes from "prop-types";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
  const role = localStorage.getItem("role"); // Ambil role dari localStorage

  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 transition-all",
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
        collapsed ? "max-md:-left-full" : "max-md:left-0"
      )}
    >
      <div className="flex gap-x-3 p-3">
        {!collapsed && (
          <p className="text-lg font-medium text-slate-900 dark:text-slate-50">
            Foodieland
          </p>
        )}
      </div>

      <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
        {navbarLinks
          .filter((navbarLink) => {
            // Filter berdasarkan role
            if (navbarLink.role && navbarLink.role !== role) return false;
            return true;
          })
          .map((navbarLink) => (
            <nav
              key={navbarLink.title}
              className={cn("sidebar-group", collapsed && "md:items-center")}
            >
              <p
                className={cn(
                  "sidebar-group-title",
                  collapsed && "md:w-[45px]"
                )}
              >
                {navbarLink.title}
              </p>
              {navbarLink.links
                .filter((link) => {
                  if (link.role && link.role !== role) return false;
                  return true;
                })
                .map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    className={cn(
                      "sidebar-item",
                      collapsed && "md:w-[45px]"
                    )}
                  >
                    <link.icon size={22} className="flex-shrink-0" />
                    {!collapsed && (
                      <p className="whitespace-nowrap">{link.label}</p>
                    )}
                  </NavLink>
                ))}
            </nav>
          ))}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
};
