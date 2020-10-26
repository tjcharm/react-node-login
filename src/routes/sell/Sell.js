import React, { useContext } from "react";
import useForm from "../../utils/useForm";
import { createNewInventoryItem } from "../../InventoryItemApi";
import { UserContext } from "../../UserContext";
export default function Sell() {
  const [values, handleChange] = useForm();
  const { authorizedUser, setAuthorizedUser } = useContext(UserContext);
  const sellItem = (e) => {
    e.preventDefault();
    createNewInventoryItem(authorizedUser.userId, authorizedUser.password);
    // need to append data to the post request
  };
  //   {
  //     itemPrice: 0,
  //     itemsInStock: 1,
  //     itemShippingDistance: 0,
  //     _id: 5f974bd006c178e292384d0e,
  //     itemId: '1603658834340'
  //   }
  return (
    <div
      className="flex flex-col justify-center text-white text-center align-center p-4 text-xl "
      style={{
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1603417406253-4c65c06974c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <form className="flex flex-col text-center text-2xl " onSubmit={sellItem}>
        <h1 className="text-4xl font-bold">Sell Here</h1>
        <br />
        <label htmlFor="profilePic">Item Pictures</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          name="profilePic"
          multiple
          type="file"
          accept=".jpg"
          onChange={(Event) => {
            const file = Event.target.files[0];
            // setprofilePic(file);
          }}
        ></input>
        <br />
        <label htmlFor="itemCategory">itemCategory</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemCategory"
          name="itemCategory"
          value={values.itemCategory || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemName">itemName</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemName"
          name="itemName"
          value={values.itemName || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemDescription">itemDescription</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemDescription"
          name="itemDescription"
          value={values.itemDescription || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemPrice">itemPrice</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemPrice"
          name="itemPrice"
          value={values.itemPrice || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemPartNumber">itemPartNumber</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemPartNumber"
          name="itemPartNumber"
          value={values.itemPartNumber || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemsInStock">itemsInStock</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemsInStock"
          name="itemsInStock"
          value={values.itemsInStock || ""}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="itemLocation">itemLocation</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          type="itemLocation"
          name="itemLocation"
          value={values.itemLocation || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="itemYearCreated">itemYearCreated</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="itemYearCreated"
          name="itemYearCreated"
          value={values.itemYearCreated || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="itemMake">itemMake</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="itemMake"
          name="itemMake"
          value={values.itemMake || ""}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="itemModel">itemModel</label>
        <input
          className="bg-gray-350 rounded text-center p-1"
          required
          type="itemModel"
          name="itemModel"
          value={values.itemModel || ""}
          onChange={handleChange}
        />
        <br />
        <input
          className="bg-blue-500 p-1 rounded"
          type="submit"
          value="Sell Item"
        ></input>
        <br />
      </form>
    </div>
  );
}