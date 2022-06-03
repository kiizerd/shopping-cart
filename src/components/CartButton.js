import { ActionIcon } from "@mantine/core";
import { ShoppingCart } from "tabler-icons-react";

const CartButton = () => {
  return (
    <ActionIcon onClick={() => {}} title="Toggle color scheme">
      <ShoppingCart size={18} />
    </ActionIcon>
  );
};

export default CartButton;
