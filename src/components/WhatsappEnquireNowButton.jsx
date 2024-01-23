import { Button } from "@nextui-org/react";
import { WhatsappLogo } from "@phosphor-icons/react";

export const WhatsappEnquireNowButton = () => {
  return (
    <Button
      className="sm:text-md max-w-xs border-2 border-secondary-200 bg-whatsapp-green p-0 text-sm font-semibold text-secondary-200 md:text-lg"
      endContent={<WhatsappLogo size={24} />}
      size="lg"
    >
      Enquire Now
    </Button>
  );
};
