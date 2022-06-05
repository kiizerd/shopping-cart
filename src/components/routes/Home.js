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
import officeBg from "../../media/office-background.jpg";
import officeBg2 from "../../media/office-background2.jpg";
import officeBg3 from "../../media/office-background3.jpg";

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === "dark";
  return {
    wrapper: {
      backgroundColor: dark ? theme.colors.orange[4] : theme.colors.gray[1],
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "2px",
      marginBottom: "4px",
      transition: "background-color 0.3s linear",
      "&:hover": {
        backgroundColor: dark ? theme.colors.orange[5] : theme.colors.gray[3],
      },
    },
    box: {
      width: "60%",
      position: "relative",
      transition: "transform 0.3s linear",
      "&:hover": {
        overflow: "hidden",
        transform: "scale(1.1);",
      },
    },
    overlay: {
      backgroundColor: dark ? theme.colors.orange[3] : theme.colors.gray[1],
      opacity: 0.1,
    },
    image: {
      maxHeight: 300,
      overflow: "hidden",
    },
    rightAlignBox: {
      marginLeft: "auto",
    },
    cardWrapper: {
      padding: "6px 4px",
      maxWidth: "35%",
    },
  };
});

const Home = () => {
  const { classes, cx } = useStyles();
  const { box, cardWrapper, image, overlay, rightAlignBox, row, wrapper } =
    classes;
  return (
    <Container fluid className={wrapper}>
      <ScrollArea>
        <Container size="lg" className={row}>
          <Box className={box}>
            <Image src={officeBg} className={image} />
            {/* Applying classes.overlay to the className prop had no effect */}
            {/* Using sx prop instead seems to work well */}
            <Overlay sx={overlay} />
          </Box>
          <InfoCard className={cardWrapper}>
            <Text m={1} weight={600}>
              Get the best deals!!
            </Text>
            <Text size="sm" m={4}>
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
            <Image src={officeBg2} className={image} />
            <Overlay sx={overlay} />
          </Box>
        </Container>
        <Space h="xl" />
        <Container size="lg" className={row}>
          <Box className={box}>
            <Image src={officeBg3} className={image} />
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
    </Container>
  );
};

export default Home;
