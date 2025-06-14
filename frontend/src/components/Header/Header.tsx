import {
  headerStyles,
  highligthTitleStyles,
  titleStyles,
} from "./Header.styles";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header className={headerStyles()}>
      <NavLink className={titleStyles()} to="/">
        <div className={highligthTitleStyles()}>React Symfony</div> Demo
      </NavLink>
    </header>
  );
}
