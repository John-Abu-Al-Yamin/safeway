import { useState } from "react";
import { User, ShoppingBag, Menu, X } from "lucide-react";
import OrdersTab from "@/_components/Profile/OrdersTab";
import ProfileInfoTab from "@/_components/Profile/ProfileInfoTab";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<"orders" | "profile">("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-24 px-4 md:px-6 lg:py-24">
      <div className="container mx-auto max-w-full">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile Header */}
          <div
            className="md:hidden flex items-center justify-between mb-6"
            data-aos="fade-down"
          >
            <h1 className="text-3xl font-bold text-gray-800">My Account</h1>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg bg-white text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
              aria-label="Toggle menu"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Sidebar */}
          <aside
            className={`
              md:w-72 flex-shrink-0 bg-white rounded-xl shadow-lg h-fit sticky top-20
              transition-all duration-300 ease-in-out
              ${
                sidebarOpen
                  ? "block absolute inset-x-4 z-20 md:relative md:inset-x-0"
                  : "hidden md:block"
              }
            `}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="p-6 border-b border-gray-100 hidden md:block">
              <h2 className="text-2xl font-bold text-gray-800">My Account</h2>
              <p className="text-sm text-gray-500 mt-1">
                Manage your profile and orders
              </p>
            </div>
            <nav className="p-4 space-y-2">
              <button
                onClick={() => {
                  setActiveTab("profile");
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === "profile"
                    ? "bg-indigo-100 text-indigo-700 shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <User size={20} />
                Profile
              </button>
              <button
                onClick={() => {
                  setActiveTab("orders");
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeTab === "orders"
                    ? "bg-indigo-100 text-indigo-700 shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <ShoppingBag size={20} />
                Orders
              </button>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div
              className="bg-white rounded-xl overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="p-6 md:p-8 border-b border-gray-100">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  {activeTab === "profile" ? "Profile" : "Your Orders"}
                </h2>
                <p className="text-gray-500 mt-2">
                  {activeTab === "profile"
                    ? "Update your personal information"
                    : "Track your order history"}
                </p>
              </div>
              <div className="p-6 md:p-8">
                {activeTab === "profile" ? <ProfileInfoTab /> : <OrdersTab />}
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 md:hidden z-10"
          onClick={toggleSidebar}
        />
      )}
    </section>
  );
}
