//Layouts
import config from '~/config';
import { HeaderLayout } from '~/layouts';
//Pages
import Home from '~/pages/Home/Home';
import Following from '~/pages/Following/Following';
import Profile from '~/pages/Profile/Profile';
import Upload from '~/pages/Upload/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';

//Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderLayout },
    { path: config.routes.search, component: Search, layout: null },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
