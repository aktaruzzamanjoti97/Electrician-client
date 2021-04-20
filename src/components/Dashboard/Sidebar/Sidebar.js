import { faCalendar, faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faCog, faGripHorizontal, faHome, faSignOutAlt, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{height:"100vh"}}>
            
            <ul className="list-unstyled">
            <li>
                    <Link to="/order" className="text-brand text-decoration-none">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/orderedList" className="text-brand text-decoration-none">
                        <FontAwesomeIcon icon={faHome} /> <span>Ordered List</span>
                    </Link>
                </li>
                 <div>
                    <li>
                        <Link to="/allOrders" className="text-brand text-decoration-none">
                            <FontAwesomeIcon icon={faCalendar} /> <span>All Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addService" className="text-brand text-decoration-none">
                            <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/makeAdmin" className="text-brand text-decoration-none">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addDoctor" className="text-brand text-decoration-none" >
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Manage Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/doctor/setting" className="text-brand text-decoration-none" >
                            <FontAwesomeIcon icon={faCog} /> <span>Settings</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <Link to="/" className="text-brand text-decoration-none"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;