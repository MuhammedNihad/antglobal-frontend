import { Pagination } from "@nextui-org/react";

/**
 * Renders the pagination component for product pagination.
 *
 * @return {JSX.Element} The rendered pagination component.
 */
export const ProductPagination = () => {
  return (
    <Pagination
      showControls
      showShadow
      radius="full"
      classNames={{ cursor: "bg-accent-950" }}
      total={15}
      initialPage={1}
    />
  );
};
