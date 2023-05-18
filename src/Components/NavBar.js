import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav>
            <h1>
                <Link to={`/`}> CodeCareer </Link>
            </h1>
            <button>
                <Link to={'/jobs'}>Jobs Listings</Link>
            </button>
            <button>
                <Link to={'/jobs/new'}>Add New Job</Link>
            </button>
        </nav>
    );
};