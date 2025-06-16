
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, MapPin, Clock, Shield, Wrench, Truck } from "lucide-react";

const HomeService = () => {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-blue-600" />,
      title: "Doorstep Laptop Repair",
      description: "Complete laptop repair services at your doorstep including screen replacement, keyboard repair, and performance optimization.",
      features: ["On-site diagnostics", "Screen replacement", "Keyboard repair", "Performance tuning", "Software installation"],
      price: "Service charge: ₹200"
    },
    {
      icon: <Wrench className="w-10 h-10 text-green-600" />,
      title: "PC Setup & Installation",
      description: "Professional PC setup, hardware installation, and system configuration services at your home or office.",
      features: ["PC assembly", "Hardware installation", "OS installation", "Driver setup", "Network configuration"],
      price: "Service charge: ₹300"
    },
    {
      icon: <MapPin className="w-10 h-10 text-purple-600" />,
      title: "On-Site Diagnostics",
      description: "Comprehensive hardware diagnostics and troubleshooting services performed at your location with professional equipment.",
      features: ["Hardware testing", "Problem diagnosis", "Performance analysis", "Upgrade recommendations", "Detailed report"],
      price: "Service charge: ₹150"
    },
    {
      icon: <Truck className="w-10 h-10 text-orange-600" />,
      title: "Device Pickup & Delivery",
      description: "Convenient pickup and delivery service for repairs that require workshop facilities and specialized equipment.",
      features: ["Scheduled pickup", "Secure transportation", "Workshop repair", "Quality testing", "Doorstep delivery"],
      price: "Service charge: ₹100"
    }
  ];

  const serviceAreas = [
    "Residential complexes and apartments",
    "Office buildings and corporate locations",
    "Educational institutions",
    "Small businesses and startups",
    "Home-based businesses",
    "Senior citizen homes",
    "Student accommodations",
    "Co-working spaces"
  ];

  const advantages = [
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Time Saving",
      description: "No need to travel or wait in queues. We come to you at your convenient time."
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Secure Service",
      description: "Your device stays with you during on-site repairs, ensuring complete security and privacy."
    },
    {
      icon: <Home className="w-8 h-8 text-purple-600" />,
      title: "Comfortable Environment",
      description: "Get your device repaired in the comfort of your home or office environment."
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-600" />,
      title: "Professional Tools",
      description: "Our technicians carry professional-grade tools and equipment for quality service."
    }
  ];

  const serviceProcess = [
    {
      step: "1",
      title: "Book Appointment",
      description: "Call or WhatsApp to schedule a convenient time slot for your location"
    },
    {
      step: "2",
      title: "Technician Arrives",
      description: "Certified technician arrives at your location with necessary tools and equipment"
    },
    {
      step: "3",
      title: "Diagnosis & Quote",
      description: "On-site diagnosis and transparent pricing before starting any repair work"
    },
    {
      step: "4",
      title: "Repair & Testing",
      description: "Professional repair work performed on-site with thorough testing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <Home className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Professional Home Service</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Convenient doorstep laptop repair and PC services. Professional technicians come to your location 
            with all necessary tools and equipment for quality service at your convenience.
          </p>
          <ContactButtons />
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Home Services</h2>
            <p className="text-xl text-gray-600">Professional repair services at your doorstep</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {service.icon}
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-green-600">{service.price}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Services Include:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">We Serve</h2>
            <p className="text-xl text-gray-600">Professional service across various locations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <MapPin className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <span className="text-gray-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Home Service?</h2>
            <p className="text-xl text-gray-600">Convenience and quality service at your location</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple and convenient service process</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {serviceProcess.map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guidelines */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Service Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Provide:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Professional tools and equipment</li>
                  <li>• Certified and trained technicians</li>
                  <li>• Genuine replacement parts</li>
                  <li>• Service warranty</li>
                  <li>• Transparent pricing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What You Need:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Clean workspace area</li>
                  <li>• Power outlet access</li>
                  <li>• Device backup (recommended)</li>
                  <li>• Scheduled appointment</li>
                  <li>• Payment method ready</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Book Your Home Service</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Schedule a convenient time for our technician to visit your location. 
            Available 7 days a week with flexible timing options.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-600 mb-4">📞 Call Now to Schedule</h3>
            <p className="text-gray-700 mb-4">Available Monday to Sunday: 9 AM - 8 PM</p>
            <ContactButtons />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Service at Your Location?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Book your doorstep service appointment today for convenient and professional repair
          </p>
          <ContactButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeService;
