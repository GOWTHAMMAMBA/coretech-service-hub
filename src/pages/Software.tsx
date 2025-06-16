
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Shield, Wrench, Download, Zap, HardDrive } from "lucide-react";

const Software = () => {
  const services = [
    {
      icon: (
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
          </svg>
        </div>
      ),
      title: "Windows OS Installation & Setup",
      description: "Professional Windows installation, activation, and optimization services for all Windows versions with driver setup and system configuration.",
      features: ["Windows 10/11 installation", "System activation", "Driver installation", "Windows updates", "User account setup", "System optimization"],
      price: "Starting from ₹800"
    },
    {
      icon: <Monitor className="w-10 h-10 text-green-600" />,
      title: "Multi-OS Solutions",
      description: "Complete OS installation, upgrades, and optimization services for Windows, macOS, and Linux systems with data preservation.",
      features: ["macOS installation", "Linux distributions", "OS upgrades", "Dual boot setup", "Virtual machines", "System migration"],
      price: "Starting from ₹500"
    },
    {
      icon: <Shield className="w-10 h-10 text-red-600" />,
      title: "Virus Removal & Security",
      description: "Comprehensive malware removal, antivirus installation, and security hardening to protect your system from threats.",
      features: ["Virus/malware removal", "Antivirus installation", "Firewall configuration", "System security audit", "Data recovery", "Preventive measures"],
      price: "Starting from ₹300"
    },
    {
      icon: <Wrench className="w-10 h-10 text-purple-600" />,
      title: "System Optimization",
      description: "Performance tuning, startup optimization, and system cleanup to improve speed and efficiency of your computer.",
      features: ["Performance tuning", "Startup optimization", "Registry cleanup", "Disk cleanup", "Memory optimization", "Boot time improvement"],
      price: "Starting from ₹400"
    },
    {
      icon: <Download className="w-10 h-10 text-orange-600" />,
      title: "Software Installation",
      description: "Professional installation and configuration of software applications, productivity suites, and specialized programs.",
      features: ["Office suite installation", "Professional software", "Creative applications", "Development tools", "Business software", "Custom configuration"],
      price: "Starting from ₹200"
    },
    {
      icon: <HardDrive className="w-10 h-10 text-indigo-600" />,
      title: "Data Migration & Backup",
      description: "Safe data transfer between systems, backup solutions setup, and cloud storage configuration for data security.",
      features: ["Data migration", "Backup solutions", "Cloud storage setup", "File organization", "Sync configuration", "Recovery planning"],
      price: "Starting from ₹600"
    },
    {
      icon: <Zap className="w-10 h-10 text-teal-600" />,
      title: "System Recovery",
      description: "Boot repair, system restore, and recovery services for corrupted or damaged operating systems and applications.",
      features: ["Boot repair", "System restore", "Crash recovery", "File system repair", "Partition recovery", "Emergency boot disk"],
      price: "Starting from ₹800"
    }
  ];

  const commonIssues = [
    {
      issue: "Slow Computer Performance",
      solution: "System optimization, startup cleanup, and memory management"
    },
    {
      issue: "Blue Screen of Death (BSOD)",
      solution: "Driver updates, system repair, and hardware conflict resolution"
    },
    {
      issue: "Virus/Malware Infections",
      solution: "Complete system scan, malware removal, and security setup"
    },
    {
      issue: "Software Installation Problems",
      solution: "Compatibility checks, clean installation, and configuration"
    },
    {
      issue: "System Won't Boot",
      solution: "Boot repair, system restore, and startup troubleshooting"
    },
    {
      issue: "Application Crashes",
      solution: "Software repair, updates, and conflict resolution"
    },
    {
      issue: "Internet Connectivity Issues",
      solution: "Network configuration, driver updates, and troubleshooting"
    },
    {
      issue: "Data Loss or Corruption",
      solution: "Data recovery, backup restoration, and file repair"
    }
  ];

  const softwareCategories = [
    {
      category: "Productivity Software",
      examples: "Microsoft Office, Google Workspace, LibreOffice, Adobe Acrobat"
    },
    {
      category: "Creative Applications",
      examples: "Adobe Creative Suite, Canva, GIMP, Blender, Audacity"
    },
    {
      category: "Business Software",
      examples: "Accounting software, CRM systems, Project management tools"
    },
    {
      category: "Development Tools",
      examples: "IDEs, Compilers, Version control, Database management"
    },
    {
      category: "Security Software",
      examples: "Antivirus, Firewall, VPN, Password managers"
    },
    {
      category: "Utility Software",
      examples: "System cleaners, Backup tools, Compression software"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351"/>
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4">Professional Software & OS Solutions</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Complete software services including Windows OS installation, virus removal, system optimization, 
            and application setup. Professional solutions for all your software and operating system needs.
          </p>
          <ContactButtons />
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Software Services</h2>
            <p className="text-xl text-gray-600">Professional software solutions for optimal performance</p>
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
                    <div className="text-sm font-semibold text-indigo-600">{service.price}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Services Include:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Software Issues We Fix</h2>
            <p className="text-xl text-gray-600">Professional solutions for all software problems</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIssues.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-800">{item.issue}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    <strong>Solution:</strong> {item.solution}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Software Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Software We Install & Support</h2>
            <p className="text-xl text-gray-600">Wide range of professional and consumer software</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softwareCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-800">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {category.examples}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 px-4 bg-gradient-to-r from-gray-50 to-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Service Process</h2>
            <p className="text-xl text-gray-600">Systematic approach to software solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">System Analysis</h3>
              <p className="text-gray-600">Comprehensive assessment of current software state</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Solution Planning</h3>
              <p className="text-gray-600">Customized approach based on your specific needs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Professional installation and configuration</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Testing & Support</h3>
              <p className="text-gray-600">Thorough testing and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Important Service Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What We Provide:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Licensed software recommendations</li>
                  <li>• Professional installation</li>
                  <li>• System optimization</li>
                  <li>• Data backup before changes</li>
                  <li>• Post-installation support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Responsibilities:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide valid software licenses</li>
                  <li>• Backup important data</li>
                  <li>• Ensure legal compliance</li>
                  <li>• Provide system access</li>
                  <li>• Follow usage guidelines</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Software Solutions?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us for professional software installation, optimization, and support services
          </p>
          <ContactButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Software;
