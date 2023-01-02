import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as contactsService from '../../services/contactsService';

export const Header = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);
    
    function LogOutHendler () {
    contactsService.logout()
        .then((result) => {
            setAuth({});
            console.log(result);
            navigate('/')
        })
        .catch(() => {
            navigate('/');
        });
    }
    return (
        <header className="header">
            {auth.username 
            ? <div className="logo">
                <i className="fa-regular fa-address-book"></i>
                <Link className="description" to="/">Contacts List</Link>
            </div>
            :<div className="logo">
                <i className="fa-regular fa-address-book"></i>
                Contacts App
            </div>
}
            <div className="nav">
                    {/* Pills navs */}
                    
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    {auth.username 
                    ? <div id="user">
                    <span className="span-username">{auth.username}</span>
                    <li className="nav-item" role="presentation">
                        <Link
                            className="nav-link"
                            id="tab-register"
                            data-mdb-toggle="pill"
                            to="/LogIn"
                            role="tab"
                            aria-controls="pills-register"
                            aria-selected="false"
                            onClick={LogOutHendler}
                        >
                            Logout
                        </Link>
                    </li>
                    </div>
                    : <div id="guest">
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
                        </div>
}
                    </ul>
                    {/* Pills navs */}
                </div>

        </header>
    );
}