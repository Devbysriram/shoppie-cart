import React from 'react';

const Cartmodal = ({ cartItemsCount, showModal, setShowModal, cartItems }) => {
  const handleCancelClick = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-container w-screen h-screen absolute top-0 left-0 bg-black flex items-center justify-center rounded bg-opacity-50 backdrop-blur-sm">
      <div className="modal bg-white w-1/2 h-2/3 overflow-y-auto rounded flex flex-col items-center p-5">
        <h1 className="bg-white text-center text-black text-2xl m-2 font-semibold p-3">
          Cart
        </h1>
        <div className="cart-items">
          {cartItemsCount === 0 ? (
            <p className="bg-white text-black p-4 min-h-40">No items in cart</p>
          ) : (
            <div className="bg-white text-black min-h-40">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-4 bg-white text-black">
                  <div>
                    <img
                      src={item.image}
                      className="w-24 px-5 bg-white"
                      alt=""
                    />
                  </div>
                  <div>
                    <p className="font-semibold bg-white text-black w-64">
                      {item.title}
                    </p>
                    <p className="bg-white text-black">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="cart-footer bg-white">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartmodal;