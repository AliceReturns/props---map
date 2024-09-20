import Products from "./components/Products";
import Buttons from "./components/Buttons";

function App() {
  return (
    <>
      <div>
        <h1>BUY random stuff !</h1>
        <div className="productFlex">
          <div>
            <img className="img" src={"/CocoOil.jpg"} alt="" />
            <Products name="Coco Oil" price={30} />
            <Buttons />
          </div>
          <div>
            <img className="img" src={"/Camera.jpeg"} alt="" />
            <Products name="Camera" price={60} />
            <Buttons />
          </div>
          <div>
            <img className="img" src={"/Maui.jpg"} alt="" />
            <Products name="Maui" price={20} />
            <Buttons />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
