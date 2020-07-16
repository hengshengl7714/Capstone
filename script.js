class Navbar extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Items</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Review</a>
              </li>
              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Cart
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item">Quantity</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item">Price</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      )
  }
}
 ReactDOM.render(<Navbar />, document.getElementById('root'));