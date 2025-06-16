
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const ContactButtons = () => {
  const handleCall = () => {
    window.open("tel:+919025609769", "_self");
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919025609769?text=Hi%20CORETECH,%20I%20would%20like%20to%20inquire%20about%20your%20services.", "_blank");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        onClick={handleCall}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
        size="lg"
      >
        <Phone className="w-5 h-5 mr-2" />
        Call Now: +91 9025609769
      </Button>
      <Button 
        onClick={handleWhatsApp}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
        size="lg"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.017 2.016c-5.504 0-9.984 4.472-9.984 9.984 0 1.752.456 3.4 1.248 4.832l-1.32 4.816 4.928-1.296c1.36.736 2.912 1.152 4.576 1.152 5.504 0 9.984-4.472 9.984-9.984s-4.48-9.984-9.984-9.984zm0 18.096c-1.472 0-2.864-.384-4.064-1.056l-.288-.176-3.008.792.8-2.928-.192-.304c-.736-1.168-1.152-2.544-1.152-4.016 0-4.48 3.648-8.128 8.128-8.128s8.128 3.648 8.128 8.128-3.648 8.128-8.128 8.128z"/>
          <path d="M16.704 13.776c-.24-.12-1.424-.704-1.648-.792-.224-.08-.384-.12-.544.12-.16.24-.624.792-.768.952-.144.16-.288.184-.528.064-.24-.12-1.016-.376-1.936-1.2-.712-.64-1.2-1.432-1.336-1.672-.144-.24-.016-.368.104-.488.112-.104.24-.288.368-.432.12-.144.16-.24.24-.4.08-.16.04-.304-.024-.424-.064-.12-.544-1.312-.744-1.8-.2-.472-.4-.408-.544-.416-.144-.008-.304-.008-.464-.008s-.424.064-.648.304c-.224.24-.856.832-.856 2.032s.88 2.368 1 2.528c.12.16 1.68 2.568 4.072 3.6.568.248 1.016.4 1.36.512.576.184 1.096.16 1.512.096.464-.072 1.424-.584 1.624-1.144.2-.56.2-1.04.144-1.144-.064-.104-.224-.168-.464-.288z"/>
        </svg>
        WhatsApp: +91 9025609769
      </Button>
    </div>
  );
};

export default ContactButtons;
