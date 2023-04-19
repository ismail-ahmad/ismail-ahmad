import { NavLink, Outlet} from 'react-router-dom';

export default function Bloglayout() {
    return(
        <>
          <Outlet />
          <nav className='blog-nav'>
            <NavLink className="blog-link" to="/blog/first-blog">Some Blog</NavLink>
            <NavLink className="blog-link" to="/blog/second-blog">Some Blog 2</NavLink>
            <NavLink className="blog-link" to="/blog/third-blog">Some Blog 3</NavLink>
          </nav>
        </>
    );
}