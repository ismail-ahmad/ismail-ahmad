import { Routes, Route } from 'react-router-dom';
import Bloglayout from './bloglayout';
import Firstblog from './first-blog';
import Secondblog from './second-blog';
import Thirdblog from './third-blog';
import Blog from './blog';
import Notfound from './notfound';


export default function Blogrouter() {
    return(
        <>
          <Routes>
            <Route path='/' element={<Bloglayout />}>
              <Route index element={<Blog />} />
                <Route path="first-blog" element={<Firstblog />} />
                <Route path="second-blog" element={<Secondblog />} />
                <Route path="third-blog" element={<Thirdblog />} />
                <Route path="*" element={<Notfound />} />
            </Route>
          </Routes>
        </>
    );
}