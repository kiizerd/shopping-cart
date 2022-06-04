import { useState } from "react";
import { Drawer } from "@mantine/core";
import CartButton from "./CartButton";

const Cart = () => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Your Cart"
        position="right"
        padding="lg"
        size="lg"
      />
      <CartButton onclick={() => setOpened(true)} />
    </>
  );
};

export default Cart;
