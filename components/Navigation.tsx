import app, { Component } from 'apprun';

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-default">
        <a className="navbar-brand" href="#">Homy sweet homy</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <a className="nav-link" href="#Home">Home
                <span className="sr-only">(current)</span>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#About">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#Contact">Contact</a>
            </li>
        </ul>
        </div>
    </nav>
)

export default Navigation

