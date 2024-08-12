import React from 'react';

const OrderList = () => {
  return (
    <div className="pl-20 pt-5 flex flex-col gap-6">
      <h1 className="font-bold text-2xl text-gray-800">Orders</h1>
      <div className="flex flex-col mb-4">
        <p className="font-semibold text-gray-600">Order Id: <span className="text-gray-800">ord0001</span></p>
        <p className="font-semibold text-gray-600">Address: <span className="text-gray-800">xxx</span></p>
        <p className="font-semibold text-gray-600">Payment Type: <span className="text-gray-800">Cash On Delivery</span></p>
      </div>

      <div className="h-32 w-4/6 border border-gray-300 shadow-lg rounded-md flex items-center p-4">
        <img src="https://www.bigbasket.com/media/uploads/p/m/40026594_10-bb-royal-green-moong-splitchilka.jpg?tr=w-1920,q=80" className="h-20 w-20 rounded" alt="Door Dal" />
        <div className="flex flex-col pl-6">
          <p className="font-medium text-gray-700">Door Dal</p>
          <p className="font-medium text-gray-600">Quantity: 1</p>
        </div>
        <div className="ml-auto pr-6 flex font-bold text-gray-800">
          Rs.45
        </div>
      </div>

      <div className="h-32 w-4/6 border border-gray-300 shadow-lg rounded-md flex items-center p-4">
        <img src="https://www.bigbasket.com/media/uploads/p/m/40159899_3-super-saver-toorarhar-dal-desi.jpg?tr=w-1920,q=80" className="h-20 w-20 rounded" alt="Moong Dal" />
        <div className="flex flex-col pl-6">
          <p className="font-medium text-gray-700">Moong Dal</p>
          <p className="font-medium text-gray-600">Quantity: 2</p>
        </div>
        <div className="ml-auto pr-6 flex font-bold text-gray-800">
          Rs.55
        </div>
      </div>

      <div className="w-4/6 justify-center flex font-bold text-lg text-gray-800 mt-4">
        Total: Rs.100
      </div>
    </div>
  );
}

export default OrderList;
