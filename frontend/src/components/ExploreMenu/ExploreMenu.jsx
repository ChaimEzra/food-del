import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
function ExploreMenu() {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque fugit
        repellat consequatur in, alias incidunt, ea numquam dolores maxime
        blanditiis iste omnis soluta iure nesciunt minus quia vero qui quis.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExploreMenu;
