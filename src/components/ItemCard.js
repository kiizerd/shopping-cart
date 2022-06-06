import {
  Badge,
  Card,
  Center,
  Group,
  Image,
  Text,
  createStyles,
} from "@mantine/core";
import PropTypes from "prop-types";
import ItemForm from "./ItemForm";
import itemImages from "../helpers/itemImages";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === "dark";
  const secondaryColor = dark ? theme.colors.dark[1] : theme.colors.gray[7];
  return {
    group: {
      marginBottom: 5,
      marginTop: theme.spacing.sm,
      justifyContent: "space-between",
    },
    form: { display: "flex", flexWrap: "nowrap", marginTop: 15 },
    text: { color: secondaryColor, lineHeight: 1.5 },
  };
});

const ItemCard = ({ item }) => {
  const { classes } = useStyles();
  const BrandBadge = (
    <Badge mr={5} color="green">
      {item.brand}
    </Badge>
  );

  return (
    <Center>
      <Card shadow="md" p="md">
        <Card.Section>
          <Image
            src={itemImages[item.imageSrc]}
            alt={item.imageSrc}
            height={300}
          />
        </Card.Section>
        <Group className={classes.group}>
          <Text
            lineClamp={1}
            weight={500}
            component={Link}
            to={`/store/${item.imageSrc}`}
            sx={{ "&:hover": { textDecoration: "underline" } }}
          >
            {item.name}
          </Text>
          <div>
            {item.brand && BrandBadge}
            <Badge color="white">{item.price}</Badge>
          </div>
        </Group>
        <Text size="sm" lineClamp={2} className={classes.text}>
          {item.description}
        </Text>
        <ItemForm item={item} />
      </Card>
    </Center>
  );
};

ItemCard.propTypes = {
  item: PropTypes.object,
};

export default ItemCard;
