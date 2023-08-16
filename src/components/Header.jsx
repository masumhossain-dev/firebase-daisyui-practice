import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(UserContext);
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                {user ? <> <button onClick={logOut} className="btn btn-outline btn-accent">Logout</button></> : <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>}
            </div>
        </div>
    );
};

export default Header;