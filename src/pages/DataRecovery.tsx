
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, HardDrive, Smartphone, Camera, Shield, Clock } from "lucide-react";

const DataRecovery = () => {
  const services = [
    {
      icon: <HardDrive className="w-10 h-10 text-blue-600" />,
      title: "Hard Drive Recovery",
      description: "Professional data recovery from damaged, corrupted, or failed hard drives using advanced techniques and clean room facilities.",
      features: ["Mechanical failure recovery", "Logical corruption repair", "Deleted file recovery", "Formatted drive recovery", "Bad sector repair"]
    },
    {
      icon: <Database className="w-10 h-10 text-green-600" />,
      title: "SSD Data Recovery",
      description: "Specialized SSD data recovery services for solid-state drives with advanced firmware repair and chip-level recovery techniques.",
      features: ["Firmware corruption repair", "Controller failure recovery", "NAND flash repair", "Encryption bypass", "Trim command recovery"]
    },
    {
      icon: <Smartphone className="w-10 h-10 text-purple-600" />,
      title: "Mobile Device Recovery",
      description: "Data recovery from smartphones, tablets, and mobile devices including Android and iOS platforms with various storage types.",
      features: ["Phone memory recovery", "SD card recovery", "App data recovery", "Contact recovery", "Photo/video recovery"]
    },
    {
      icon: <Camera className="w-10 h-10 text-orange-600" />,
      title: "Media Recovery",
      description: "Specialized recovery for memory cards, USB drives, and other portable storage devices commonly used in cameras and devices.",
      features: ["SD card recovery", "USB drive recovery", "Camera memory recovery", "Video file recovery", "Raw image recovery"]
    }
  ];

  const recoveryTypes = [
    {
      type: "Accidental Deletion",
      description: "Files deleted by mistake from any storage device"
    },
    {
      type: "Drive Formatting",
      description: "Data recovery from formatted hard drives and storage devices"
    },
    {
      type: "System Crashes",
      description: "Data recovery after operating system crashes and failures"
    },
    {
      type: "Virus Attacks",
      description: "Recovery from malware and virus-infected storage devices"
    },
    {
      type: "Physical Damage",
      description: "Recovery from physically damaged drives and storage devices"
    },
    {
      type: "Water Damage",
      description: "Data recovery from water-damaged devices and storage media"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <Database className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Professional Data Recovery Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Advanced data recovery services for all types of storage devices. We recover your valuable data from 
            hard drives, SSDs, mobile devices, and memory cards with high success rates and confidentiality.
          </p>
          <ContactButtons />
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Data Recovery Services</h2>
            <p className="text-xl text-gray-600">Professional data recovery with advanced techniques</p>
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
                    <h4 className="font-semibold text-gray-800">Recovery Types:</h4>
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

      {/* Recovery Types */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Data Loss Scenarios We Handle</h2>
            <p className="text-xl text-gray-600">Comprehensive recovery solutions for all data loss situations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recoveryTypes.map((recovery, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-800">{recovery.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {recovery.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recovery Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Recovery Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Free Evaluation</h3>
                    <p className="text-gray-600">Initial assessment of your storage device and data loss situation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Detailed Analysis</h3>
                    <p className="text-gray-600">Comprehensive analysis to determine recovery possibilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Recovery Process</h3>
                    <p className="text-gray-600">Advanced recovery techniques in clean room environment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Data Delivery</h3>
                    <p className="text-gray-600">Secure delivery of recovered data on new storage media</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Our Service?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">100% Confidentiality</h3>
                    <p className="text-gray-600">Your data privacy is our top priority with secure handling</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fast Turnaround</h3>
                    <p className="text-gray-600">Emergency services available with 24-48 hour recovery</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Database className="w-8 h-8 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">High Success Rate</h3>
                    <p className="text-gray-600">Advanced techniques with 95%+ success rate</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <HardDrive className="w-8 h-8 text-orange-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">No Data, No Fee</h3>
                    <p className="text-gray-600">You only pay when we successfully recover your data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Service */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Emergency Data Recovery Service</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Critical data loss? We offer 24/7 emergency data recovery services for urgent situations. 
            Fast-track processing available for business-critical data recovery needs.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-600 mb-4">🚨 Emergency Hotline Available 24/7</h3>
            <p className="text-gray-700 mb-4">For critical data recovery situations that can't wait</p>
            <ContactButtons />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Lost Important Data?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Don't panic! Contact us immediately for professional data recovery services
          </p>
          <ContactButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataRecovery;
