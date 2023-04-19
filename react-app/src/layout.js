import { NavLink, Outlet } from "react-router-dom";
import './App.css';

export default function Layout() {
    return(
        <>
          <nav>
            <NavLink reloadDocument className="link" to="/">Home</NavLink>
            <NavLink  className="link" to="/blog">Blog</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>
            <NavLink className="link" to="/about">About</NavLink>
          </nav>
          <Outlet />
        </>
    );
}