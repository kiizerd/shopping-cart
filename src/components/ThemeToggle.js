import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Sun, MoonStars } from "tabler-icons-react";

const ThemeToggle = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon onClick={() => toggleColorScheme()} title="Toggle color scheme">
      {dark ? <MoonStars size={18} /> : <Sun size={18} />}
    </ActionIcon>
  );
};

export default ThemeToggle;
