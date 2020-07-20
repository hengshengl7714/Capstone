class Navbar extends React.Component {
  constructor(props) {
  super(props);
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-primary navbar-expand-lg navbar-light">
          <a Class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#carouselIndicators">Home <span className="sr-only">(current)</span></a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Items</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Review</a>
              </li>
              <li Class="nav-item dropdown active">
                <a Class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Cart
                </a>
                <div Class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a Class="dropdown-item">Quantity</a>
                  <div Class="dropdown-divider"></div>
                  <a Class="dropdown-item">Price</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      )
  }
}
class Carousel extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div id="carouselIndicators" Class="carousel slide" data-ride="carousel">
        <ol Class="carousel-indicators">
          <li data-target="#carouselIndicators" data-slide-to="0" Class="active"></li>
          <li data-target="#carouselIndicators" data-slide-to="1"></li>
          <li data-target="#carouselIndicators" data-slide-to="2"></li>
          <li data-target="#carouselIndicators" data-slide-to="3"></li>
        </ol>
        <div Class="carousel-inner">
          <div Class="carousel-item active">
            <img src="/pictures/Carousel-1.JPG" Class=" d-block w-100 " alt="Carousel-1"></img>
          </div>
          <div Class="carousel-item" >
            <img src="/pictures/Carousel-2.JPG" Class=" d-block w-100" alt="Carousel-2"></img>
          </div>
          <div Class="carousel-item">
            <img src="/pictures/Carousel-3.JPG" Class=" d-block w-100" alt="Carousel-3"></img>
          </div>
          <div Class="carousel-item">
            <img src="/pictures/Carousel-4.JPG" Class=" d-block w-100" alt="Carousel-4"></img>
          </div>
        </div>
        <a Class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
          <span Class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span Class="sr-only">Previous</span>
        </a>
        <a Class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
          <span Class="carousel-control-next-icon" aria-hidden="true"></span>
          <span Class="sr-only">Next</span>
        </a>
      </div>
    )
  } 
}
class Items extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="/pictures/Bear-shirt.JPG" Class="card-img-top" alt="Bear-shirt"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Bear-strip style shirt</h5>
                  <p Class="card-text">Your pet is cute already! A cute suit for your pet to go out will attract more attention.</p>
                  <h2><span class="badge badge-success">$14.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="/pictures/Panda-shirt.JPG" Class="card-img-top" alt="Panda-shirt"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Black Panda shirt</h5>
                  <p Class="card-text"> Tired of scrambling through stores in search of clothing for your pet? You can buy this product instead! It's great for your pet's comfort and it's warm.  </p>
                  <h2><span class="badge badge-success">$15.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="/pictures/Hawaiian-style.JPG" Class="card-img-top" alt="Hawaiian-style"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Hawaiian-style</h5>
                  <p Class="card-text">Hot Summer is here! The Hawaiian style polo shirt definitely suit your pet and let the pet has a cool summer!!</p>
                  <h2><span class="badge badge-success">$15.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="/pictures/Strip-shirt.JPG" Class="card-img-top" alt="Strip-shirt"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Red-strip hoodie</h5>
                  <p Class="card-text">Comfortable casual sport hoodie for the pets. The cloth is adorable for your lovely sweet pet. </p>
                  <h2><span class="badge badge-success">$15.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="/pictures/Dog-coat.JPG" Class="card-img-top" alt="Dog-coat"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Winter Coat</h5>
                  <p Class="card-text">Warm coat that gives your pet a warmful winter. Let your pet run around without fearing the coldness.</p>
                  <h2><span class="badge badge-success">$15.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="/pictures/Dog-nest.JPG" Class="card-img-top" alt="Dog-nest"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Dountbed for pets</h5>
                  <p Class="card-text">Ultra soft calming bed for your pet. Made by self-warming Cozy Plush, so your pet will have a warming indoor sleeping. </p>
                  <h2><span class="badge badge-danger"><strike>$34.99</strike></span></h2>
                  <h2><span class="badge badge-success">$19.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  } 
}

ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<Carousel />, document.getElementById('caro'));
ReactDOM.render(<Items />, document.getElementById('List'));