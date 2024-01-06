import PropTypes from "prop-types";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { WhatsappLogo } from "@phosphor-icons/react";

/**
 * Render a product card component.
 *
 * @param {object} productItem - The product item to be displayed on the card.
 * @return {JSX.Element} The rendered product card component.
 */
export const ProductCard = ({ name, image, altText }) => {
  return (
    <Card isFooterBlurred className="rounded-3xl border-none">
      <Image
        alt={altText}
        className="object-cover"
        height={250}
        src={image}
        width={250}
      />
      <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
        <p className="line-clamp-2 text-base font-semibold text-white/80 lg:text-sm">
          {name}
        </p>
        <Button
          className="rounded-3xl bg-black/20 text-tiny text-white"
          variant="flat"
          color="default"
          size="sm"
        >
          <WhatsappLogo size={24} color="#25d366" />
        </Button>
      </CardFooter>
    </Card>
  );
};

ProductCard.propTypes = {
  altText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
