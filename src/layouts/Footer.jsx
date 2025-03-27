import NewsletterSection from "@/_components/NewsletterSection/NewsletterSection";
import { Facebook, Instagram, Twitter, Youtube} from "lucide-react";

 
const Footer = () => {
  return (
    <footer>
      {/* Newsletter Section */}
      <NewsletterSection/>
      
      {/* Main Footer */}
      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Logo and Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-md flex items-center justify-center mr-2">
                  <i className="ri-plane-line text-white text-xl"></i>
                </div>
                <h3 className="text-xl font-bold text-white">TravelEase</h3>
              </div>
              <p className="text-gray-200 mb-6">
                Making travel accessible and enjoyable for everyone. Discover new places, experiences, and cultures.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                   <Facebook/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                   <Instagram/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                <Twitter/>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                  <Youtube/>
                </a>
              </div>
            </div>
            
            {/* Navigation Columns */}
            <div>
              <h4 className="text-white font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Bali, Indonesia</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Bangkok, Thailand</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Tokyo, Japan</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Maldives</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">All Destinations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Experiences</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Cultural Tours</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Adventure</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Beach Resorts</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">City Breaks</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Food Tours</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Help Center</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">FAQs</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-200 hover:text-green-600 transition">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-black py-6 border-t border-gray-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} TravelEase. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="text-gray-200 hover:text-gray-700 text-sm">Privacy</a>
              <a href="#" className="text-gray-200 hover:text-gray-700 text-sm">Terms</a>
              <a href="#" className="text-gray-200 hover:text-gray-700 text-sm">Cookies</a>
              <a href="#" className="text-gray-200 hover:text-gray-700 text-sm">Sitemap</a>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;