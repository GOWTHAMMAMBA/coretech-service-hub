
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PcCase, Cpu, HardDrive, Zap, Monitor, Gamepad2 } from "lucide-react";

const PCBuild = () => {
  const buildTypes = [
    {
      icon: <Gamepad2 className="w-10 h-10 text-red-600" />,
      title: "Gaming PC Build",
      description: "High-performance gaming PCs with latest graphics cards, fast processors, and optimized cooling for ultimate gaming experience.",
      features: ["Latest GPU selection", "High-refresh gaming", "RGB lighting setup", "Custom cooling", "Overclocking ready"],
      price: "Starting from ₹45,000"
    },
    {
      icon: <Monitor className="w-10 h-10 text-blue-600" />,
      title: "Workstation Build",
      description: "Professional workstations for content creation, video editing, 3D rendering, and professional applications with enterprise-grade components.",
      features: ["Multi-core processors", "Professional graphics", "ECC memory support", "Multiple storage options", "Workstation optimization"],
      price: "Starting from ₹35,000"
    },
    {
      icon: <PcCase className="w-10 h-10 text-green-600" />,
      title: "Budget PC Build",
      description: "Cost-effective PC builds for everyday computing, office work, and light gaming without compromising on quality and reliability.",
      features: ["Value components", "Reliable performance", "Upgrade path", "Warranty included", "Optimized for efficiency"],
      price: "Starting from ₹20,000"
    },
    {
      icon: <Cpu className="w-10 h-10 text-purple-600" />,
      title: "Custom Build",
      description: "Fully customized PC builds tailored to your specific requirements, budget, and performance needs with expert consultation.",
      features: ["Personalized consultation", "Custom specifications", "Unique designs", "Performance optimization", "Full customization"],
      price: "Quote on request"
    }
  ];

  const components = [
    {
      name: "Processor (CPU)",
      description: "Intel Core i3/i5/i7/i9 and AMD Ryzen 3/5/7/9 series processors"
    },
    {
      name: "Graphics Card (GPU)",
      description: "NVIDIA GeForce RTX/GTX and AMD Radeon RX series graphics cards"
    },
    {
      name: "Motherboard",
      description: "Compatible motherboards with latest chipsets and features"
    },
    {
      name: "Memory (RAM)",
      description: "DDR4/DDR5 memory modules from 8GB to 128GB configurations"
    },
    {
      name: "Storage",
      description: "NVMe SSDs, SATA SSDs, and traditional hard drives"
    },
    {
      name: "Power Supply",
      description: "80+ certified power supplies with modular and non-modular options"
    },
    {
      name: "Cooling System",
      description: "Air cooling, AIO liquid cooling, and custom loop cooling solutions"
    },
    {
      name: "PC Case",
      description: "Mid-tower, full-tower, and compact cases with various designs"
    }
  ];

  const services = [
    "Free consultation and component selection",
    "Professional assembly and cable management",
    "BIOS setup and system optimization",
    "Operating system installation",
    "Driver installation and updates",
    "Stress testing and quality assurance",
    "Warranty on all components and labor",
    "Post-build support and maintenance"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <PcCase className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Custom PC Build Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional PC building services tailored to your needs. From gaming rigs to workstations, 
            we build high-performance computers with quality components and expert craftsmanship.
          </p>
          <ContactButtons />
        </div>
      </section>

      {/* Build Types */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">PC Build Categories</h2>
            <p className="text-xl text-gray-600">Choose the perfect build type for your needs</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {buildTypes.map((build, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    {build.icon}
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800">{build.title}</CardTitle>
                      <div className="text-sm font-semibold text-blue-600 mt-1">{build.price}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                    {build.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Key Features:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {build.features.map((feature, idx) => (
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

      {/* Components Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quality Components We Use</h2>
            <p className="text-xl text-gray-600">Premium components from trusted manufacturers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {components.map((component, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-800">{component.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-sm">
                    {component.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Build Services</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Build Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Build Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Consultation</h3>
                    <p className="text-gray-600">Discuss your needs, budget, and performance requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Component Selection</h3>
                    <p className="text-gray-600">Choose the best components within your budget</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Professional Assembly</h3>
                    <p className="text-gray-600">Expert assembly with proper cable management</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Testing & Delivery</h3>
                    <p className="text-gray-600">Thorough testing and setup before delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Trusted Component Brands</h2>
          <p className="text-xl text-gray-600 mb-8">We work with leading manufacturers for quality assurance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {["Intel", "AMD", "NVIDIA", "ASUS", "MSI", "Corsair", "Cooler Master", "Seasonic", "G.Skill", "Samsung", "Western Digital", "Seagate"].map((brand, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                <span className="font-semibold text-gray-700">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Dream PC?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us for a free consultation and custom PC build quote
          </p>
          <ContactButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PCBuild;
