import { useState } from "react";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import Router from "./components/Router";

// Custom theme is applied to all components in App
const WithProvider = () => {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  const isDarkTheme = colorScheme === "dark";

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
          Button: { size: "xs" },
        }}
      >
        <Router />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default WithProvider;
