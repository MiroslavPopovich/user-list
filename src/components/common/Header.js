import { Link } from 'react-router-dom';
import * as contactsService from '../../services/contactsService';

export const Header = () => {
   function SignOutHendler () {
    contactsService.logout()
        .then((result) => {
            console.log(result);
        });
    }
    return (
        <header className="header">
            <div className="logo">
                <i className="fa-regular fa-address-book"></i>
                <Link className="description" to="/">Contacts List</Link>
            </div>
            <div className="nav">
                    {/* Pills navs */}
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <Link
                                className="nav-link active"
                                id="tab-login"
                                data-mdb-toggle="pill"
                                to="/LogIn"
                                role="tab"
                                aria-controls="pills-login"
                                aria-selected="true"
                            >
                                LogIn
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                className="nav-link"
                                id="tab-register"
                                data-mdb-toggle="pill"
                                to="/Register"
                                role="tab"
                                aria-controls="pills-register"
                                aria-selected="false"
                            >
                                Register
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                className="nav-link"
                                id="tab-register"
                                data-mdb-toggle="pill"
                                to="/LogIn"
                                role="tab"
                                aria-controls="pills-register"
                                aria-selected="false"
                                onClick={SignOutHendler}
                            >
                                Logout
                            </Link>
                        </li>
                        
                    </ul>
                    {/* Pills navs */}
                </div>

        </header>
    );
}