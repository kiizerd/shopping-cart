import { Header, Title, useMantineTheme } from "@mantine/core";
import Navbar from "./Navbar";

const MyHeader = () => {
  const theme = useMantineTheme();
  const colorScheme = theme.colorScheme;
  const dark = colorScheme === "dark";

  return (
    <Header
      px={18}
      pt={27}
      pb={5}
      sx={{
        display: "flex",
        backgroundColor: dark ? theme.colors.dark[8] : theme.colors.blue[2],
        justifyContent: "space-around",
        flexWrap: "wrap",
        borderColor: dark ? theme.colors.dark[3] : theme.colors.dark[8],
      }}
    >
      <Title order={3} mr={6}>
        Electronics and Accessories
      </Title>
      <Navbar />
    </Header>
  );
};

export default MyHeader;
