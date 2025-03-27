import { useState } from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";

export default function ProfileInfoTab() {
  const [userInfo, setUserInfo] = useState({
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Anytown, CA 94321",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className="max-w-full mx-auto p-6 bg-white rounded-2xl shadow-lg"
      data-aos="fade-up"
    >
      <h2
        className="text-2xl font-bold text-gray-800 mb-6"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        Profile Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2" data-aos="fade-right" data-aos-delay="200">
          <label
            htmlFor="name"
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <User className="w-4 h-4" />
            Full Name
          </label>
          <input
            id="name"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div className="space-y-2" data-aos="fade-right" data-aos-delay="250">
          <label
            htmlFor="email"
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <Mail className="w-4 h-4" />
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={userInfo.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your email"
          />
        </div>

        {/* Phone Field */}
        <div className="space-y-2" data-aos="fade-right" data-aos-delay="300">
          <label
            htmlFor="phone"
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <Phone className="w-4 h-4" />
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            value={userInfo.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Address Field */}
        <div className="space-y-2" data-aos="fade-right" data-aos-delay="350">
          <label
            htmlFor="address"
            className="flex items-center gap-2 text-sm font-medium text-gray-700"
          >
            <MapPin className="w-4 h-4" />
            Address
          </label>
          <input
            id="address"
            name="address"
            value={userInfo.address}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
            placeholder="Enter your address"
          />
        </div>
      </div>

      {/* Save Button */}
      <div
        className="mt-8 flex justify-end"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <button className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );
}
