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
import itemImages from "../helpers/itemImages";

const ItemCard = ({ item }) => {
  const theme = useMantineTheme();
  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <Center>
      <Card shadow="md" p="md">
        <Card.Section>
          <Image
            src={itemImages[item.imageSrc]}
            alt={item.imageSrc}
            height={240}
            m="auto"
          />
        </Card.Section>
        <Group
          sx={{
            marginBottom: 5,
            marginTop: theme.spacing.sm,
            justifyContent: "space-between",
          }}
        >
          <Text lineClamp={1} weight={500}>
            {item.name}
          </Text>
          <div>
            {item.isOnSale ? (
              <Badge color="red" variant="light">
                On sale
              </Badge>
            ) : (
              false
            )}
            {item.brand ? (
              <Badge mr={5} color="green" variant="light">
                {item.brand}
              </Badge>
            ) : (
              false
            )}
            <Badge color="white" variant="light">
              {item.price}
            </Badge>
          </div>
        </Group>
        <Text size="sm" sx={{ color: secondaryColor, lineHeight: 1.5 }}>
          {item.description}
        </Text>
        <Group sx={{ display: "flex", flexWrap: "nowrap", marginTop: 15 }}>
          <Button variant="light" color="primary" size="sm" fullWidth>
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
