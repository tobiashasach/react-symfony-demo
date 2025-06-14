import { useLocation } from "react-router";
import { NavLink } from "react-router";
import { List } from "../ui/List/List";
import { breadcrumbStyles } from "./Breadcrumb.styles";

export function Breadcrumb() {
  const { pathname } = useLocation();

  const segments = ["Home", ...pathname.split("/").filter((value) => value)];

  return (
    <List
      row
      className={breadcrumbStyles()}
      items={segments.map((segment, idx) => ({
        key: String(idx),
        element: (
          <NavLink
            to={pathname
              .split("/")
              .slice(0, idx + 1)
              .join("/")}
            end
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : ""
            }
          >
            {segment.slice(0, 1).toUpperCase() + segment.slice(1) + "/"}
          </NavLink>
        ),
      }))}
    ></List>
  );
}
