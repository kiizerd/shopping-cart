import { Button, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Cart from "./Cart";

const Navbar = () => {
  return (
    <Group position="right">
      <Button component={Link} to="/">
        Home
      </Button>
      <Button component={Link} to="store">
        Store
      </Button>
      <Cart />
      <ThemeToggle />
    </Group>
  );
};

export default Navbar;
