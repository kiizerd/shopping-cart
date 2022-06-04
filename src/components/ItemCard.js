import {
  Badge,
  Button,
  Card,
  Center,
  Group,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import QuantityInput from "./QuantityInput";
import PropTypes from "prop-types";
import ComputerDog from "../media/computer-dog.jpg";

const ItemCard = ({ item }) => {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <Center sx={{ margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={ComputerDog} height={160} alt="computer dog" />
        </Card.Section>
        <Group
          sx={{
            marginBottom: 5,
            marginTop: theme.spacing.sm,
            justifyContent: "space-between",
          }}
        >
          <Text weight={500}>{item.name}</Text>
          <div>
            <Badge color="red" variant="light">
              On sale
            </Badge>
            <Badge color="white" variant="light" ml={10}>
              15.89
            </Badge>
          </div>
        </Group>
        <Text size="sm" sx={{ color: secondaryColor, lineHeight: 1.5 }}>
          {item.description}
        </Text>
        <Group sx={{ display: "flex", flexWrap: "nowrap", marginTop: 15 }}>
          <Button variant="light" color="primary" size="sm">
            Add to cart
          </Button>
          <QuantityInput />
        </Group>
      </Card>
    </Center>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
