import { Link } from 'react-router-dom';
export const Header = () => {
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
                                to="/signIn"
                                role="tab"
                                aria-controls="pills-login"
                                aria-selected="true"
                            >
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item" role="presentation">
                            <Link
                                className="nav-link"
                                id="tab-register"
                                data-mdb-toggle="pill"
                                to="/signUp"
                                role="tab"
                                aria-controls="pills-register"
                                aria-selected="false"
                            >
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {/* Pills navs */}
                </div>

        </header>
    );
}