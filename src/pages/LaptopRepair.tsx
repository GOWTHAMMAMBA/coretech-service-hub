
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Laptop, Monitor, Keyboard, Battery, Wrench, Clock } from "lucide-react";

const LaptopRepair = () => {
  const services = [
    {
      icon: <Monitor className="w-10 h-10 text-blue-600" />,
      title: "Screen Replacement & Repair",
      description: "Professional LCD/LED screen replacement, broken screen repair, display issues, and backlight problems. We handle all laptop brands and models.",
      features: ["Broken screen repair", "LCD/LED replacement", "Backlight issues", "Display calibration", "Touch screen repair"]
    },
    {
      icon: <Keyboard className="w-10 h-10 text-green-600" />,
      title: "Keyboard Restoration",
      description: "Complete keyboard repair and replacement services including individual key replacement, keyboard mechanism repair, and water damage restoration.",
      features: ["Individual key replacement", "Keyboard mechanism repair", "Water damage restoration", "Backlit keyboard repair", "Membrane replacement"]
    },
    {
      icon: <Battery className="w-10 h-10 text-orange-600" />,
      title: "Battery Replacement",
      description: "High-quality battery replacement with genuine parts. Battery health diagnosis, power management issues, and charging port repairs.",
      features: ["Original battery replacement", "Battery health diagnosis", "Charging port repair", "Power management", "Extended battery life"]
    },
    {
      icon: <Wrench className="w-10 h-10 text-purple-600" />,
      title: "Performance Optimization",
      description: "Complete system optimization including hardware upgrades, thermal management, and performance tuning for better laptop performance.",
      features: ["RAM upgrades", "SSD installation", "Thermal paste replacement", "Fan cleaning", "System optimization"]
    }
  ];

  const commonIssues = [
    "Laptop won't turn on or boot",
    "Overheating and loud fan noise",
    "Slow performance and freezing",
    "WiFi and connectivity issues",
    "Audio and speaker problems",
    "USB ports not working",
    "Motherboard and component failures",
    "Water damage restoration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <Laptop className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Professional Laptop Repair Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Expert laptop repair services for all brands and models. From screen replacement to performance optimization, 
            we provide comprehensive solutions with genuine parts and professional service.
          </p>
          <ContactButtons />
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Laptop Repair Services</h2>
            <p className="text-xl text-gray-600">Professional solutions for all your laptop problems</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {service.icon}
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
                    </div>
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

      {/* Common Issues */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Laptop Issues We Fix</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for all laptop problems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {commonIssues.map((issue, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">{issue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Repair Process</h2>
            <p className="text-xl text-gray-600">Simple, transparent, and efficient</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnosis</h3>
              <p className="text-gray-600">Free diagnostic to identify the exact problem</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quote</h3>
              <p className="text-gray-600">Transparent pricing with no hidden costs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Repair</h3>
              <p className="text-gray-600">Professional repair with quality parts</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">Thorough testing and quality assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Laptop Repair Service?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us now for professional laptop repair with warranty and fast service
          </p>
          <ContactButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaptopRepair;
