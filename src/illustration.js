const logo = require("./Images/dashboard.jpg");
export function Illustration() {


  return (
    <>
      <div >

      <p className="titles">Illustrations :</p>
      <hr />
      <div className="illus-body">
      <img className="picture" src={logo} alt={"natural"}/>
      <p className="illus-para">
        Add some quality, svg illustrations to your project courtesy of unDraw,
        a constantly updated collection of beautiful svg images that you can use
        completely free and without attribution!
      </p>
      <p><a> Browse Illustrations on unDraw → </a></p>
      </div>

      </div>
    </>
  );
}
