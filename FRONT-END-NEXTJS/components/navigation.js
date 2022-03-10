import Link from 'next/link';
function navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Home</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/employees">
                                <a className="nav-link">Employees</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/add_employee">
                                <a className="nav-link">Add employee</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navigation