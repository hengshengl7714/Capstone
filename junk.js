
class Items extends React.Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1 class="heading" id="shop-list">Shop</h1>
        <div class="container-fluid">
          <div class="row">
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="pictures/Bear-shirt.JPG" Class="card-img-top" alt="Bear-shirt"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Bear-strip style shirt</h5>
                  <p Class="card-text">Your pet is cute already! A cute suit for your pet to go out will attract more attention.</p>
                  <h2><span class="badge badge-success">$12.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="pictures/Panda-shirt.JPG" Class="card-img-top" alt="Panda-shirt"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Black Panda shirt</h5>
                  <p Class="card-text"> Tired of scrambling through stores in search of clothing for your pet? You can buy this product instead! It's great for your pet's comfort and it's warm.  </p>
                  <h2><span class="badge badge-success">$8.59</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="pictures/Hawaiian-style.JPG" Class="card-img-top" alt="Hawaiian-style"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Hawaiian-style</h5>
                  <p Class="card-text">Hot Summer is here! The Hawaiian style polo shirt definitely suit your pet and let the pet has a cool summer!!</p>
                  <h2><span class="badge badge-success">$6.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="pictures/Strip-shirt.JPG" Class="card-img-top" alt="Strip-shirt"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Red-strip hoodie</h5>
                  <p Class="card-text">Comfortable casual sport hoodie for the pets. The cloth is adorable for your lovely sweet pet. </p>
                  <h2><span class="badge badge-success">$8.59</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="pictures/Dog-coat.JPG" Class="card-img-top" alt="Dog-coat"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Winter Coat</h5>
                  <p Class="card-text">Warm coat that gives your pet a warmful winter. Let your pet run around without fearing the coldness.</p>
                  <h2><span class="badge badge-success">$15.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="pictures/Dog-nest.JPG" Class="card-img-top" alt="Dog-nest"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Dountbed for pets</h5>
                  <p Class="card-text">Ultra soft calming bed for your pet. Made by self-warming Cozy Plush, so your pet will have a warming indoor sleeping. </p>
                  <h2><span class="badge badge-danger"><strike>$24.99</strike></span></h2>
                  <h2><span class="badge badge-success">$16.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="pictures/Pet-shoe.jpg" Class="card-img-top" alt="Dog-shoe"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Boots for pets</h5>
                  <p Class="card-text"> soft boot for your pet. Protected pets from coldness and let them run around the park.  </p>
                  <h2><span class="badge badge-danger"><strike>$24.99</strike></span></h2>
                  <h2><span class="badge badge-success">$20.59</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
              <div Class="card col-lg-4 col-md-6 col-sm-12">
                <img src="pictures/Pet-bag.jpg" Class="card-img-top" alt="Dog-nest"></img>
                <div Class="card-body">
                  <h5 Class="card-title">Earth Eated Dog Poop bags</h5>
                  <p Class="card-text">Guaranteed Leak-proof by having Extra Thick and Strong bags for pets. 15 Bags per Roll </p>
                  <h2><span class="badge badge-danger"><strike>$11.99</strike></span></h2>
                  <h2><span class="badge badge-success">$8.99</span></h2>
                  <a href="#" Class="btn btn-primary">Add</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  } 
}



class Items extends React.Component {
  constructor(props){
    super(props);
    listOfItems = [
      {
        id: 'a',
        title: "Bear-strip style shirt",
        description: "Your pet is cute already! A cute suit for your pet to go out will attract more attention.",
        price:12.99,
      },
      {
        id: 'b',
        title: "Black Panda shirt",
        description: "Tired of scrambling through stores in search of clothing for your pet? You can buy this product instead! It's great for your pet's comfort and it's warm.",
        price: 8.59,
      },
    ];
  }
  render(){
    return(
      <div>
        {this.listOfItems.map(item=>(
          <div Class="card col-lg-4 col-md-6 col-sm-12" key={item.id}>
          <img src="pictures/Bear-shirt.JPG" Class="card-img-top" alt="Bear-shirt"></img>
          <div Class="card-body">
            <h5 Class="card-title">{item.title}</h5>
            <p Class="card-text">{item.description}</p>
            <h2><span class="badge badge-success">${item.price}</span></h2>
            <a href="#" Class="btn btn-primary">+</a>
            <a href="#" Class="btn btn-primary">-</a>
          </div>
         ) )}
      <div>
    )
  }
}