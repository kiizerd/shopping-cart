import { ActionIcon, Indicator, useMantineTheme } from "@mantine/core";
import PropTypes from "prop-types";
import { ShoppingCart } from "tabler-icons-react";

const EmptyCart = () => <ShoppingCart size={18} />;
const FilledCart = ({ count }) => {
  const theme = useMantineTheme();
  const color = theme.colorScheme === "dark" ? "blue" : "yellow";
  return (
    <Indicator size={17} offset={-4} label={count} color={color} withBorder>
      <EmptyCart />
    </Indicator>
  );
};

const CartButton = ({ count, onclick }) => {
  return (
    <ActionIcon onClick={onclick} title="Toggle color scheme">
      {count > 0 ? <FilledCart count={count} /> : <EmptyCart />}
    </ActionIcon>
  );
};

FilledCart.propTypes = { count: PropTypes.number };
CartButton.propTypes = { count: PropTypes.number, onclick: PropTypes.func };

export default CartButton;
