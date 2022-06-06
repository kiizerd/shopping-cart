import { useContext, useState } from "react";
import { Center, Drawer, Text } from "@mantine/core";
import CartContext from "../helpers/cartContext";
import CartButton from "./CartButton";
import CartList from "./CartList";

const Cart = () => {
  const cart = useContext(CartContext);
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Your Cart"
        position="right"
        padding="md"
        size="xl"
      >
        {cart.items.length > 0 ? (
          <CartList
            items={cart.items}
            remove={cart.remove}
            empty={cart.empty}
          />
        ) : (
          <Center m="xl" p="xl">
            <Text>Cart empty. Buy some stuff!!</Text>
          </Center>
        )}
      </Drawer>
      <CartButton count={cart.items.length} onclick={() => setOpened(true)} />
    </div>
  );
};

export default Cart;
