import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { CartProvider } from "./helpers/cartContext";
import Router from "./components/Router";

// Custom theme is applied to all components in App
const WithProvider = () => {
  const [colorScheme, setColorScheme] = useState("dark");
  const [cartItems, setCartItems] = useState([]);
  const isDarkTheme = colorScheme === "dark";

  const toggleColorScheme = (value) =>
    setColorScheme(value || (isDarkTheme ? "light" : "dark"));

  const addItemToCart = (newItem, quantity) => {
    const currentCart = cartItems.slice();
    for (let i = 0; i < quantity; i += 1) {
      currentCart.push(newItem);
    }
    setCartItems(currentCart);
  };

  const removeItemFromCart = (itemName) => {
    const currentCart = cartItems.slice();
    const newCart = currentCart.filter((item) => item.name !== itemName);
    setCartItems(newCart);
  };

  const emptyCart = () => setCartItems([]);

  const cart = {
    items: cartItems,
    add: addItemToCart,
    remove: removeItemFromCart,
    empty: emptyCart,
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: colorScheme,
          fontFamily: "Roboto, sans-serif",
          primaryColor: isDarkTheme ? "orange" : "teal",
          primaryShade: isDarkTheme ? 5 : 8,
        }}
        defaultProps={{
          ActionIcon: { color: "primary", variant: "filled" },
          Badge: { size: "sm", variant: "light" },
          Button: { size: "xs" },
        }}
      >
        <CartProvider value={cart}>
          <Router />
        </CartProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default WithProvider;
