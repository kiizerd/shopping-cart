import { ActionIcon } from "@mantine/core";
import PropTypes from "prop-types";
import { ShoppingCart } from "tabler-icons-react";

const CartButton = ({ onclick }) => {
  return (
    <ActionIcon onClick={onclick} title="Toggle color scheme">
      <ShoppingCart size={18} />
    </ActionIcon>
  );
};

CartButton.propTypes = {
  onclick: PropTypes.func,
};

export default CartButton;
