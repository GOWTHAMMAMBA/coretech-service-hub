
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactButtons from "@/components/ContactButtons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Clock, Zap, Shield, Phone, Star } from "lucide-react";

const PrioritySupport = () => {
  const priorityServices = [
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      title: "Express Diagnostics",
      description: "Fast-track diagnostic services with immediate assessment and priority handling for urgent repair needs.",
      features: ["Immediate assessment", "Skip the queue", "30-minute diagnosis", "Instant quote", "Emergency hotline"],
      timeline: "Same Day"
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />,
      title: "24-Hour Repair Service",
      description: "Guaranteed repair completion within 24 hours for most common issues with priority parts procurement.",
      features: ["24-hour guarantee", "Priority parts sourcing", "Dedicated technician", "Progress updates", "Express testing"],
      timeline: "24 Hours"
    },
    {
      icon: <Phone className="w-10 h-10 text-green-600" />,
      title: "VIP Customer Support",
      description: "Dedicated customer support line with direct technician access and real-time repair status updates.",
      features: ["Direct technician contact", "Real-time updates", "Priority phone support", "Status notifications", "Escalation support"],
      timeline: "24/7 Available"
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: "Business Priority",
      description: "Specialized support for business customers with bulk handling, on-site services, and corporate accounts.",
      features: ["Corporate accounts", "Bulk device handling", "On-site services", "Business invoicing", "Fleet management"],
      timeline: "Custom SLA"
    }
  ];

  const urgencyLevels = [
    {
      level: "Critical",
      color: "bg-red-100 text-red-800",
      description: "Business critical or emergency situations",
      response: "Immediate",
      examples: ["Business laptop failures", "Data loss emergencies", "Critical presentation needs"]
    },
    {
      level: "High",
      color: "bg-orange-100 text-orange-800",
      description: "Important but not critical situations",
      response: "Same Day",
      examples: ["Student assignment deadlines", "Work from home setups", "Important meetings"]
    },
    {
      level: "Standard",
      color: "bg-blue-100 text-blue-800",
      description: "Normal priority for regular repairs",
      response: "1-2 Days",
      examples: ["Regular maintenance", "Non-urgent repairs", "Performance upgrades"]
    }
  ];

  const benefits = [
    "Jump to front of repair queue",
    "Dedicated technician assignment",
    "Premium parts availability",
    "Extended warranty coverage",
    "Free device pickup/delivery",
    "Progress tracking system",
    "Priority customer support",
    "Expedited testing process"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <Bell className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">Priority Support Services</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Fast-track repair services with priority handling, express diagnostics, and expedited turnaround times. 
            Perfect for urgent situations and business-critical repairs.
          </p>
          <ContactButtons />
        </div>
      </section>

      {/* Priority Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Priority Services</h2>
            <p className="text-xl text-gray-600">Fast, reliable, and priority-focused repair solutions</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {priorityServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.timeline}
                </div>
                
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
                    <h4 className="font-semibold text-gray-800">Priority Features:</h4>
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

      {/* Urgency Levels */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Priority Levels</h2>
            <p className="text-xl text-gray-600">Choose the right priority level for your situation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {urgencyLevels.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-gray-800">{level.level} Priority</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${level.color}`}>
                      {level.response}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {level.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800">Examples:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {level.examples.map((example, idx) => (
                        <li key={idx}>{example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Priority Support Benefits</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Star className="w-5 h-5 text-yellow-600 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Process */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Priority Repair Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Immediate Intake</h3>
                    <p className="text-gray-600">Priority registration and immediate device assessment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Express Diagnosis</h3>
                    <p className="text-gray-600">Fast-track diagnostic with immediate technician assignment</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Priority Repair</h3>
                    <p className="text-gray-600">Jump to front of queue with dedicated technician work</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Express Delivery</h3>
                    <p className="text-gray-600">Fast testing and immediate delivery/pickup arrangement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Hotline */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <Phone className="w-8 h-8 text-red-600" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Emergency Repair Hotline</h2>
            <p className="text-xl text-gray-600 mb-6">
              For critical and emergency situations requiring immediate attention
            </p>
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Available 24/7 for Critical Issues</h3>
              <p className="text-red-700">Business critical failures, data loss emergencies, and urgent deadline situations</p>
            </div>
            <ContactButtons />
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Priority Support Pricing</h2>
            <p className="text-xl text-gray-600">Transparent pricing for priority services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Express</CardTitle>
                <div className="text-3xl font-bold text-blue-600">+₹500</div>
                <div className="text-sm text-gray-600">Additional to repair cost</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>Same day diagnosis</li>
                  <li>Priority queue placement</li>
                  <li>24-hour repair guarantee</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center border-2 border-yellow-400">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">VIP</CardTitle>
                <div className="text-3xl font-bold text-yellow-600">+₹1000</div>
                <div className="text-sm text-gray-600">Additional to repair cost</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>All Express features</li>
                  <li>Dedicated technician</li>
                  <li>Real-time updates</li>
                  <li>Free pickup/delivery</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Emergency</CardTitle>
                <div className="text-3xl font-bold text-red-600">+₹2000</div>
                <div className="text-sm text-gray-600">Additional to repair cost</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>All VIP features</li>
                  <li>24/7 hotline support</li>
                  <li>Immediate response</li>
                  <li>On-site service available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Need Urgent Repair Service?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us immediately for priority support and fast-track repair services
          </p>
          <ContactButtons />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrioritySupport;
