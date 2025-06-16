
import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                CORETECH
              </span>
            </div>
            <p className="text-gray-300">
              Professional laptop repair, data recovery, PC build, and chip-level diagnostic services. 
              Your trusted partner for all computing solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Services</h3>
            <div className="space-y-2">
              <Link to="/laptop-repair" className="block text-gray-300 hover:text-white transition-colors">
                Laptop Repair
              </Link>
              <Link to="/data-recovery" className="block text-gray-300 hover:text-white transition-colors">
                Data Recovery
              </Link>
              <Link to="/pc-build" className="block text-gray-300 hover:text-white transition-colors">
                PC Build
              </Link>
              <Link to="/chip-level-diagnostic" className="block text-gray-300 hover:text-white transition-colors">
                Chip Level Diagnostic
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/priority-support" className="block text-gray-300 hover:text-white transition-colors">
                Priority Support
              </Link>
              <Link to="/home-service" className="block text-gray-300 hover:text-white transition-colors">
                Home Service
              </Link>
              <Link to="/software" className="block text-gray-300 hover:text-white transition-colors">
                Software Solutions
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">+91 9025609769</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">info@coretech.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">Professional Service Center</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 CORETECH. All rights reserved. Professional hardware solutions for all your computing needs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
