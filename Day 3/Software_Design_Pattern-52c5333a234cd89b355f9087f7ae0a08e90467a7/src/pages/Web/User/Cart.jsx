import React from 'react';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Green Moong Dal',
      quantity: 1,
      price: 45,
      description: 'High-quality green moong dal, rich in protein and essential nutrients.',
      image: 'https://www.bigbasket.com/media/uploads/p/l/10000440_17-bb-royal-moong-dal.jpg'
    },
    {
      id: 2,
      name: 'Toor Dal',
      quantity: 2,
      price: 55,
      description: 'Premium toor dal, perfect for making delicious dal tadka.',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40159897_3-super-saver-toorarhar-dal-desi.jpg'
    },
    {
      id: 3,
      name: 'Basmati Rice',
      quantity: 1,
      price: 120,
      description: 'Long grain basmati rice, ideal for biryani and pulao.',
      image: 'https://www.bigbasket.com/media/uploads/p/l/40072462_12-bb-royal-organic-basmati-rice.jpg'
    }
  ];

  return (
    <div className="pl-20 pt-5 flex flex-col gap-6">
      <h1 className="font-bold text-2xl mb-4">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cartItems.map(item => (
          <div key={item.id} className="h-96 w-80 border border-gray-200 shadow-md rounded-md p-4 flex flex-col">
            <img src={item.image} className="h-40 w-full object-cover rounded-md mb-4" alt={item.name} />
            <div className="flex flex-col flex-grow">
              <p className="font-medium text-lg">{item.name}</p>
              <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="mt-auto font-bold text-xl flex justify-between">
                <span>Rs. {item.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default Cart;
