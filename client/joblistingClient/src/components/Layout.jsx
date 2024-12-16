// Layout.js

import EmployerSidebar from './EmployerSidebar';
import { Outlet } from 'react-router-dom'; // Outlet is used for nested routing

const Layout = () => {
  return (
    <div className="d-flex">
      <EmployerSidebar />
      <div className="flex-grow-1 p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
