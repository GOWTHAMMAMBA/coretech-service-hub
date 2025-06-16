
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Laptop, Database, PcCase, Chip, Bell, Home, Wrench, Clock } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Laptop className="w-12 h-12 text-blue-600" />,
      title: "Laptop Repair Service",
      description: "Professional laptop repair including screen replacement, keyboard restoration, battery replacement, and performance optimization.",
      link: "/laptop-repair",
      ribbon: "Most Popular"
    },
    {
      icon: <Database className="w-12 h-12 text-green-600" />,
      title: "Data Recovery Solutions",
      description: "Advanced data recovery services for hard drives, SSDs, and other storage devices with high success rates.",
      link: "/data-recovery",
      ribbon: "24/7 Available"
    },
    {
      icon: <PcCase className="w-12 h-12 text-purple-600" />,
      title: "Custom PC Build",
      description: "Custom PC building services tailored to your needs - gaming, workstation, or budget builds with expert guidance.",
      link: "/pc-build",
      ribbon: "Expert Build"
    },
    {
      icon: <Chip className="w-12 h-12 text-orange-600" />,
      title: "Chip Level Diagnostic",
      description: "Advanced chip-level diagnostics and micro-soldering services for complex hardware issues and motherboard repairs.",
      link: "/chip-level-diagnostic",
      ribbon: "Advanced Tech"
    },
    {
      icon: <Bell className="w-12 h-12 text-red-600" />,
      title: "Priority Support",
      description: "Fast-track repair services with priority handling, express diagnostics, and expedited turnaround times.",
      link: "/priority-support",
      ribbon: "Fast Service"
    },
    {
      icon: <Home className="w-12 h-12 text-indigo-600" />,
      title: "Home Service",
      description: "Convenient doorstep service for laptop repairs, PC setup, and technical support at your location.",
      link: "/home-service",
      ribbon: "Doorstep Service"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              CORETECH
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Professional Hardware Solutions
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Expert laptop repair, data recovery, PC build, and chip-level diagnostic services. 
              Your trusted partner for all computing solutions with professional service and guaranteed results.
            </p>
            <ContactButtons />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hardware solutions with expert technicians, quality parts, and reliable service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                {/* Service Ribbon */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.ribbon}
                </div>
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Link to={service.link}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose CORETECH?</h2>
            <p className="text-xl text-gray-600">Professional service with guaranteed results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">Certified professionals with years of experience in hardware repair and diagnostics</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">Quick and efficient service with most repairs completed within 24-48 hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">All repairs come with warranty and satisfaction guarantee for peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Your Device Fixed?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us now for professional hardware solutions and expert service
          </p>
          <ContactButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
