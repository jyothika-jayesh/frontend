import React from 'react';
import { Link } from 'react-router-dom';

const AdminHomePage = () => {
  const orders = [
    {
      _id: 123123,
      user: {
        name: 'John Doe',
      },
      totalPrice: 110,
      status: 'Processing',
    },
    {
        _id: 123123,
        user: {
          name: 'John Doe',
        },
        totalPrice: 110,
        status: 'Processing',
      },
      {
        _id: 123123,
        user: {
          name: 'John Doe',
        },
        totalPrice: 110,
        status: 'Processing',
      },
      {
        _id: 123123,
        user: {
          name: 'John Doe',
        },
        totalPrice: 110,
        status: 'Processing',
      },
      {
        _id: 123123,
        user: {
          name: 'John Doe',
        },
        totalPrice: 110,
        status: 'Processing',
      },
      {
        _id: 123123,
        user: {
          name: 'John Doe',
        },
        totalPrice: 110,
        status: 'Processing',
      },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
     
      <div className="flex flex-wrap gap-6 mb-6">
        <div className="p-4 shadow-md rounded-lg flex-1">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl">$10,000</p>
        </div>
        <div className="p-4 shadow-md rounded-lg flex-1">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl">200</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Manage Orders
          </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg flex-1">
          <h2 className="text-xl font-semibold">Total Products</h2>
          <p className="text-2xl">100</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline">
            Manage Products
          </Link>
        </div>
      </div>
      {/* Recent Orders Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
  <table className="w-full text-left text-gray-500 table-auto">
    <thead className="bg-gray-100 text-xs uppercase text-gray-700">
      <tr>
        <th className="py-3 px-6">Order ID</th>
        <th className="py-3 px-6">User</th>
        <th className="py-3 px-6">Total Price</th>
        <th className="py-3 px-6">Status</th>
      </tr>
    </thead>
    <tbody>
      {orders.length > 0 ? (
        orders.map((order) => (
          <tr
            key={order._id}
            className="border-b hover:bg-gray-50 cursor-pointer"
          >
            <td className="py-3 px-6">{order._id}</td>
            <td className="py-3 px-6">{order.user.name}</td>
            <td className="py-3 px-6">${order.totalPrice}</td>
            <td className="py-3 px-6">{order.status}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4} className="p-4 text-center text-gray-500">
            No Recent Orders
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
};

export default AdminHomePage;