const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQs_D_cX118x0uVDinoIOgiVTLhJd3rS6-ezs_mUtxDkeXOM-5UoD7upUWkAjSfW8T5Q&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul className="nav-items">
          <li>Home</li>
          <li>About us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;