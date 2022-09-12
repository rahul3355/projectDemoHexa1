import { ReactDOM } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';

const Layout = () => {
    return (
        <div class="container-xl">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"></link>
            {/* <nav>
            <ul>
                
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>

                    <li>
                        <Link to="/About">About</Link>
                    </li>

                    <li>
                        <Link to="/AllEmp">AllEmp</Link>
                    </li>

                    <li>
                        <Link to="/AddEmp">AddEmp</Link>
                    </li>

                
            </ul>

        </nav> */}

            <br />
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">


                <div class="collapse navbar-collapse" id="navbarSupportedContent navv">
                    <ul class="navbar-nav mr-auto nvv2">
                        <Link to="/Home">
                            <button class="btn btn-dark">Home</button>
                        </Link>
                        <Link to="/About">
                            <button class="btn btn-dark">About</button>
                        </Link>
                        <Link to="/Contact">
                            <button class="btn btn-dark">Contact</button>
                        </Link>
                        <Link to="/ManagerView">
                            <button class="btn btn-warning">Manager View</button>
                        </Link>
                        <Link to="/AddEmp">
                            <button class="btn btn-dark">Add Leave</button>
                        </Link>
                        <Link to="/AllLeave">
                            <button class="btn btn-dark">Leave List</button>
                        </Link>
                        <Link to="/AllEmployees">
                            <button class="btn btn-dark">Employee List</button>
                        </Link>
                        

                    </ul>

                </div>
            </nav>



            <Outlet />

        </div>

    );
}

export default Layout;