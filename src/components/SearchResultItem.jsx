import { Image } from "@nextui-org/react";
import { WhatsappEnquireNowButton } from "./WhatsappEnquireNowButton";

export const SearchResultItem = () => {
  return (
    <div className="flex flex-col rounded-3xl bg-secondary-400 p-2 lg:p-4">
      <div className="flex flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        <Image
          src="https://placehold.co/1000x1000/17276e/white/png"
          className="h-auto w-32 rounded-3xl sm:w-40 md:w-52 lg:w-60"
          classNames={{ wrapper: ["flex items-center"] }}
        />
        <div className="flex w-3/5 flex-col">
          <div className="sm:text-md line-clamp-1 text-sm font-semibold text-accent-950 md:text-lg  lg:text-xl">
            Brand name
          </div>
          <div className="mb-3 line-clamp-2 text-lg font-semibold leading-5 text-accent-950 sm:text-xl md:mb-4 md:text-3xl lg:text-4xl">
            Product Name that has very long characters maybe several lines
          </div>
          <WhatsappEnquireNowButton />
        </div>
      </div>
    </div>
  );
};
