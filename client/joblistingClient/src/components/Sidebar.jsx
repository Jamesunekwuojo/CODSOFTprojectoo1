
import { Nav } from 'react-bootstrap';
import { FaHome, FaUsers, FaChartBar, FaCog } from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Sidebar () {
  return (
    <div className="d-flex flex-column vh-100 bg-light" style={{ width: '250px' }}>
      <Nav className="flex-column mt-4">
        <Nav.Item className="mb-3">
          
            <Nav.Link as={Link} to='/home'>
              <FaHome className="mr-2" /> Dashboard
            </Nav.Link>
         
        </Nav.Item>
        <Nav.Item className="mb-3">
        
            <Nav.Link as={Link} to='/employees'>
              <FaUsers className="mr-2" /> Employees
            </Nav.Link>
          
        </Nav.Item>

        <Nav.Item className="mb-3">
         
            <Nav.Link as={Link} to='/reports'>
              <FaChartBar className="mr-2" /> Add new job
            </Nav.Link>
         
        </Nav.Item>

        <Nav.Item className="mb-3">
          
            <Nav.Link as={Link} to='/settings'>
              <FaCog className="mr-2" /> Settings
            </Nav.Link>
         
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
