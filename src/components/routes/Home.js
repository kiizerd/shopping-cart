import {
  Box,
  Button,
  Container,
  createStyles,
  Image,
  Overlay,
  ScrollArea,
  Space,
  Text,
} from "@mantine/core";
import { Link } from "react-router-dom";
import InfoCard from "../InfoCard";
import officeBg from "../../media/office-background-resize.jpg";
import officeBg2 from "../../media/office-background2-resize.jpg";
import officeBg3 from "../../media/office-background3.jpg";

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === "dark";
  return {
    row: {
      minHeight: 200,
      display: "flex",
      justifyContent: "space-between",
      padding: "0",
      margin: "8px auto 6px",
      transition: "background-color 0.3s linear",
      backgroundColor: dark ? theme.colors.orange[4] : theme.colors.gray[1],
      "&:hover": {
        backgroundColor: dark ? theme.colors.orange[5] : theme.colors.gray[3],
      },
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        padding: "0",
      },
    },
    box: {
      marginLeft: "16px",
      width: "60%",
      maxHeight: 300,
      position: "relative",
      overflow: "hidden",
      transition: "transform 0.3s linear",
      "&:hover": {
        transform: "scale(1.1);",
        zIndex: 100,
      },
    },
    overlay: {
      backgroundColor: dark ? theme.colors.orange[3] : theme.colors.gray[1],
      opacity: 0.1,
    },
    rightAlignBox: { marginLeft: "0", marginRight: "16px" },
    cardWrapper: {
      margin: "auto",
      width: "35%",
      transition: "transform 0.2s linear",
      "&:hover": {
        transform: "scale(1.05)",
        zIndex: 100,
      },
    },
  };
});

const Home = () => {
  const { classes, cx } = useStyles();
  const { box, cardWrapper, overlay, rightAlignBox, row } = classes;
  return (
    <ScrollArea>
      <Container size="md" className={row}>
        <Box className={box}>
          <Image src={officeBg} />
          {/* Applying classes.overlay to the className prop had no effect */}
          {/* Using sx prop instead seems to work well */}
          <Overlay sx={overlay} />
        </Box>
        <InfoCard className={cardWrapper}>
          <Text m={1} weight={600}>
            Get the best deals!!
          </Text>
          <Text size="sm" m={4} sx={{ maxHeight: "80px", overflow: "scroll" }}>
            Browse the premier site for computer accessories and peripherals.
          </Text>
          <Button m="auto" mt={8} p={3} fullWidth component={Link} to="store">
            Browse
          </Button>
        </InfoCard>
      </Container>
      <Space h="xl" />
      <Container size="lg" className={row}>
        <InfoCard className={cardWrapper}>
          <Text m={1} weight={600}>
            Master your craft.
          </Text>
          <Text size="sm" m={4} mb={2}>
            Our products will elevate your performance and your lifestyle.
          </Text>
        </InfoCard>
        <Box className={cx(box, rightAlignBox)}>
          <Image src={officeBg2} />
          <Overlay sx={overlay} />
        </Box>
      </Container>
      <Space h="xl" />
      <Container size="md" className={row}>
        <Box className={box}>
          <Image src={officeBg3} />
          <Overlay sx={overlay} />
        </Box>
        <InfoCard className={cardWrapper}>
          <Text m={1} weight={600}>
            Level up your game!
          </Text>
          <Text size="sm" m={4} mb={2}>
            Find the next perfect addition to your setup.
          </Text>
        </InfoCard>
      </Container>
      <Space h="xl" />
    </ScrollArea>
  );
};

export default Home;
