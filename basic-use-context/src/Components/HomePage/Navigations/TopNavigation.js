import {useContext} from 'react';
import UserContext from "../../../App"

const TopNavigation = () =>{
    const user = useContext(UserContext);
    console.log(user)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="/#">
            <div>Amezen</div>
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
              <div class="badge bg-primary text-wrap" style={{width: "auto"}}>
                <span>Welcome </span> <span>Siddhabattula.sunil@gmail.com</span>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <a className="text-reset me-3" href="/#">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
              <span class="badge badge-pill bg-danger">2</span>
          
              </a>
            </li>
          </ul>
        </div>
          
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="/#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
    )
}

export default TopNavigation;