import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Microscope, Zap, Shield, Wrench, AlertTriangle } from "lucide-react";

const ChipLevelDiagnostic = () => {
  const services = [
    {
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      title: "Motherboard Repair",
      description: "Advanced motherboard repair services including component replacement, trace repair, and circuit analysis for complex hardware failures.",
      features: ["SMD component replacement", "Trace repair and jumping", "Power circuit analysis", "BIOS chip programming", "Voltage regulation repair"]
    },
    {
      icon: <Microscope className="w-10 h-10 text-green-600" />,
      title: "Micro Soldering",
      description: "Precision micro-soldering services for small components including BGA chips, capacitors, resistors, and integrated circuits.",
      features: ["BGA chip replacement", "Micro component soldering", "IC replacement", "Capacitor replacement", "Precision soldering work"]
    },
    {
      icon: <Zap className="w-10 h-10 text-orange-600" />,
      title: "Power Circuit Repair",
      description: "Specialized power circuit diagnosis and repair for charging issues, power management problems, and voltage regulation failures.",
      features: ["Charging circuit repair", "Power management IC replacement", "Voltage regulator repair", "MOSFET replacement", "Power supply diagnosis"]
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: "Data Recovery Repair",
      description: "Chip-level data recovery services for severely damaged storage devices requiring component-level repairs and specialized techniques.",
      features: ["NAND flash repair", "Controller replacement", "Firmware reconstruction", "PCB repair", "Component-level recovery"]
    }
  ];

  const diagnosticTypes = [
    {
      type: "Liquid Damage Repair",
      description: "Complete liquid damage assessment and repair including cleaning, component replacement, and corrosion treatment",
      severity: "High"
    },
    {
      type: "Physical Impact Damage",
      description: "Repair of devices damaged by drops, impacts, or physical trauma requiring component-level diagnosis",
      severity: "Medium"
    },
    {
      type: "Power Management Issues",
      description: "Complex power-related problems including charging failures, power cycling, and voltage irregularities",
      severity: "High"
    },
    {
      type: "Boot Failure Diagnosis",
      description: "Advanced diagnosis for devices that won't boot, including BIOS corruption and hardware initialization issues",
      severity: "Medium"
    },
    {
      type: "Component Failure Analysis",
      description: "Detailed analysis of failed components including capacitors, resistors, ICs, and other electronic components",
      severity: "High"
    },
    {
      type: "Thermal Damage Repair",
      description: "Repair of overheating damage including component replacement and thermal management improvements",
      severity: "Medium"
    }
  ];

  const equipment = [
    "Professional soldering stations with temperature control",
    "Hot air rework stations for BGA and SMD work",
    "Digital microscopes for precision work",
    "Oscilloscopes for signal analysis",
    "Multimeters and specialized testing equipment",
    "Ultrasonic cleaning systems",
    "Anti-static workstations and tools",
    "Component programming equipment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <Cpu className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Advanced Chip Level Diagnostic Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Professional chip-level diagnostics and micro-soldering services for complex hardware failures. 
            We handle component-level repairs that other services can't fix, using advanced equipment and techniques.
          </p>
          <ContactButtons />
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Chip Level Services</h2>
            <p className="text-xl text-gray-600">Advanced component-level repair and diagnostics</p>
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
                    <h4 className="font-semibold text-gray-800">Specialized Services:</h4>
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

      {/* Diagnostic Types */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Complex Issues We Diagnose</h2>
            <p className="text-xl text-gray-600">Advanced diagnostics for challenging hardware problems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnosticTypes.map((diagnostic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-bold text-gray-800">{diagnostic.type}</CardTitle>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      diagnostic.severity === 'High' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {diagnostic.severity}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {diagnostic.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Professional Equipment */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Professional Equipment</h2>
              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Wrench className="w-5 h-5 text-orange-600 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Diagnostic Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Diagnostic Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Visual Inspection</h3>
                    <p className="text-gray-600">Detailed examination under microscope for visible damage</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Electrical Testing</h3>
                    <p className="text-gray-600">Comprehensive electrical testing with specialized equipment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Component Analysis</h3>
                    <p className="text-gray-600">Individual component testing and failure analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Repair & Testing</h3>
                    <p className="text-gray-600">Precision repair work followed by comprehensive testing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Important Information</h2>
                <div className="space-y-3 text-gray-700">
                  <p>• Chip-level repairs require specialized skills and may not always be successful</p>
                  <p>• Some repairs may require multiple attempts and extended timeframes</p>
                  <p>• Liquid damage repairs have varying success rates depending on damage extent</p>
                  <p>• Data backup is always recommended before any chip-level repair work</p>
                  <p>• We provide honest assessments and will inform you if repair is not viable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Advanced Chip Level Repair?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us for complex hardware issues that require component-level expertise
          </p>
          <ContactButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChipLevelDiagnostic;
