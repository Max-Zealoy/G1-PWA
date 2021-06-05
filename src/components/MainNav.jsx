import '../styling/Navbar.css'
import Home from '../images/Buttons/homeButton.png'
import Search from '../images/Buttons/searchButton.png'
import AddBtn from '../images/Buttons/addPhotoButton.png'
import Notification from '../images/Buttons/NotificationButton.png'
import ProfileButton from '../images/Buttons/ProfileButton.png'
import Catlogo from '../images/Buttons/Catlogo.png'


export default function MainNav() {

  let g = useNamedContext('global');

  function close(e) {
    // hide menu after choice if in hamburger mode
    let toggler = document.querySelector('.navbar-toggler');
    toggler.clientHeight && toggler.click();
  }

  async function logout() {
    await Login.logout();
    delete g.user;
  }

  return ( <Navbar className="navbar-dark bg-dark" expand="lg">
    <Navbar.Brand href="#">Exempel</Navbar.Brand>
    <Navbar.Toggle aria-controls="mainNav" />
    <Navbar.Collapse id="mainNav">
      <Nav className="mr-auto my-2 my-lg-0">
        {Object.entries(g.routes || {}).map(([path, [label]], i) =>
          <li key={i} className="nav-item">
            <MenuLink exact={true} onClick={close} className="nav-link" to={path}>
              {label}
            </MenuLink>
          </li>
        )}
      </Nav>
    </Navbar.Collapse >
    {g.user && <span>
      <span className="text-white">
        Logged in as: {g.user.name} ({g.user.email})
      </span>
      <a className="text-white display d-inlineblock ml-4" href="#" onClick={logout}>
        Log out
      </a>
    </span>}
  </Navbar >
  )}

  /*  RAD 39
  {g.user && <span>
      <span className="text-white">
        Logged in as: {g.user.name} ({g.user.email})
      </span>
      <a className="text-white display d-inlineblock ml-4" href="#" onClick={logout}>
        Log out
      </a>
    </span>}
    */