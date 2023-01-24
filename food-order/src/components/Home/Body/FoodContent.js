import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FoodDetails } from "./FoodDetails";


const FoodContent = () => {
  const [foodList, setFoodList] = useState();
  const [foodListAvailable, setFoodListAvailable] = useState(false);
  const[quantity,setQuantity]=useState(0);

  const fetchFoodHandler = (e) => {
    e.preventDefault();
    setFoodList(FoodDetails);
    setFoodListAvailable(true);
  };

  const AddRowItem = (foodDet) => {
    setQuantity(quantity+1);
    alert(foodDet);
  };
  const RemoveRowItem = (foodDet) => {
    alert(foodDet);
  };

  return (
    <div>
      <div className="col-sm-12 col-md-12 col-lg-auto col-xl-auto tm-block-col">
        {!foodListAvailable && (
          <div className="form-group col-lg-2">
            <label className="tm-hide-sm">&nbsp;</label>
            <button
              type="submit"
              className="btn btn-primary btn-block text-uppercase"
              onClick={fetchFoodHandler}
            >
              Menu
            </button>
          </div>
        )}
        <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
          {foodListAvailable && (
            <h2 className="tm-block-title">Notification List</h2>
          )}
          <div className="tm-notification-items">
            {foodListAvailable &&
              foodList.map((food) => (
                <div className="media tm-notification-item" key={food.id}>
                  <div className="tm-gray-circle">
                    <img src={food.img} alt="Avatar" className="circle" />
                  </div>
                  <div className="media-body">
                    <p className="mb-2">
                      <b>{food.title} - </b>
                      {food.description}
                    </p>
                    <span className="tm-small tm-text-color-secondary">
                      Rating : <b>{food.rating}</b> Price :{" "}
                      <b>£ {food.price}</b>
                    </span>
                  </div>
                  <div>
                    <input className="itemListInput" value={food.quantity}/>
                  </div>
                  <div className="AddSubDiv">
                    <FontAwesomeIcon
                      icon={faPlus}
                      size="1x"
                      border
                      color="white"
                      onClick={() =>
                        AddRowItem(food.id)
                      }
                    />
                    <FontAwesomeIcon
                      icon={faMinus}
                      size="1x"
                      border
                      color="white"
                      onClick={() => RemoveRowItem(food.id)}
                    />
                  </div>
                </div>
              ))}
          </div>
          {foodListAvailable && (
            <div className="form-group col-lg-2 RightFloat">
              <label className="tm-hide-sm">&nbsp;</label>
              <button
                type="submit"
                className="btn btn-green btn-block text-uppercase"
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodContent;
