import { ExternalLink } from "lucide-react";

// Example order data
const orders = [
  {
    id: "ORD-12345",
    date: "March 15, 2025",
    total: "$129.99",
    status: "Delivered",
    items: [
      { name: "Wireless Headphones", price: "$89.99", quantity: 1 },
      { name: "Phone Case", price: "$19.99", quantity: 2 },
    ],
  },
  {
    id: "ORD-12344",
    date: "February 28, 2025",
    total: "$54.99",
    status: "Shipped",
    items: [
      { name: "Smart Watch Band", price: "$24.99", quantity: 1 },
      { name: "Screen Protector", price: "$14.99", quantity: 2 },
    ],
  },
  {
    id: "ORD-12343",
    date: "January 12, 2025",
    total: "$199.99",
    status: "Delivered",
    items: [{ name: "Bluetooth Speaker", price: "$199.99", quantity: 1 }],
  },
];

export default function OrdersTab() {
  return (
    <div className="max-w-full mx-auto p-6">
      <h2
        className="text-2xl font-bold text-gray-800 mb-6"
        data-aos="fade-down"
      >
        Your Orders
      </h2>

      {orders.length === 0 ? (
        <div
          className="text-center py-16 bg-white rounded-2xl shadow-md"
          data-aos="zoom-in"
        >
          <div className="mx-auto h-12 w-12 text-gray-400 flex items-center justify-center rounded-full bg-gray-100 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">No orders yet</h3>
          <p className="mt-2 text-gray-500">
            Your orders will appear here once you make a purchase.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {orders.map((order, index) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div data-aos="fade-right" data-aos-delay={index * 100 + 50}>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Order #{order.id}
                    </h3>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                  <div
                    className="flex items-center gap-4"
                    data-aos="fade-left"
                    data-aos-delay={index * 100 + 100}
                  >
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {order.status}
                    </span>
                    <a
                      href="#"
                      className="text-indigo-600 flex items-center gap-1 hover:text-indigo-800 transition-colors duration-200 font-medium"
                    >
                      View Details
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gray-50">
                {order.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex justify-between items-center py-3 first:pt-0 last:pb-0 border-b border-gray-200 last:border-0"
                    data-aos="fade-right"
                    data-aos-delay={index * 100 + 150 + itemIndex * 50}
                  >
                    <div>
                      <p className="text-gray-800 font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <p className="text-gray-800 font-medium">{item.price}</p>
                  </div>
                ))}
                <div
                  className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100 + 200}
                >
                  <p className="text-gray-700 font-semibold">Total</p>
                  <p className="text-xl font-bold text-gray-900">
                    {order.total}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
