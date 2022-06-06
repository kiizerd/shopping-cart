import {
  Accordion,
  ActionIcon,
  Badge,
  Button,
  Group,
  Image,
  SimpleGrid,
  Text,
} from "@mantine/core";
import PropTypes from "prop-types";
import itemImages from "../helpers/itemImages";
import ItemPricing from "./ItemPricing";
import GrandTotalPricing from "./GrandTotalPricing";
import { Trash } from "tabler-icons-react";

const Label = ({ item, remove }) => {
  return (
    <SimpleGrid cols={5} spacing="">
      <Image width={64} src={itemImages[item.imageSrc]} />
      <Text weight={500} size="xs">
        {item.name}
      </Text>
      <Text align="center" size="xs">
        x{item.count}
      </Text>
      <Badge size="md">${item.price}</Badge>
      <ActionIcon size="sm" onClick={() => remove(item.name, item.count)}>
        <Trash size={14} />
      </ActionIcon>
    </SimpleGrid>
  );
};

const onlyUnique = (value, index, self) => self.indexOf(value) === index;
const sumArray = (array) => array.reduce((acc, item) => acc + item, 0);
const calcTotal = (price, count) => {
  const taxedPrice = price + price * 0.085;
  const multipliedPrice = taxedPrice * count;
  return Math.round(multipliedPrice * 100) / 100;
};
const calcGrandTotal = (list) => {
  const itemTotals = list.map((item) => item.total);
  const grandTotal = sumArray(itemTotals);
  return Math.round(grandTotal * 100) / 100;
};
const itemCount = (name, list) => {
  const itemsWithName = list.filter((item) => item.name === name);
  return itemsWithName.length;
};
const itemsCount = (list) => {
  const itemCounts = list.map((item) => item.count);
  return sumArray(itemCounts);
};

const CartList = ({ items, remove, empty }) => {
  const quantizedItems = items.filter(onlyUnique).map((item) => {
    const count = itemCount(item.name, items);
    const total = calcTotal(item.price, count);
    return Object.assign(item, { count, total });
  });
  const totalCount = itemsCount(quantizedItems);
  const grandTotal = calcGrandTotal(quantizedItems);

  return (
    <>
      <Accordion>
        {quantizedItems.map((item, index) => (
          <Accordion.Item
            key={index}
            label={<Label item={item} remove={remove} />}
          >
            <Text size="sm">{item.description}</Text>
            <Text weight={400} size="xs" underline transform="uppercase">
              {item.name} | {item.brand}
            </Text>
            <ItemPricing
              price={item.price}
              count={item.count}
              total={item.total}
            />
          </Accordion.Item>
        ))}
        <Accordion.Item
          label={
            <Text size="sm">
              {totalCount} item{totalCount > 1 ? "s" : ""} in your cart,
              totalling: ${grandTotal}
            </Text>
          }
        >
          <GrandTotalPricing items={quantizedItems} />
        </Accordion.Item>
      </Accordion>
      <Group position="right">
        <Button m="md" size="md" variant="outline" onClick={empty}>
          Empty cart
        </Button>
        <Button m="lg" size="md">
          Checkout
        </Button>
      </Group>
    </>
  );
};

Label.propTypes = { item: PropTypes.object, remove: PropTypes.func };
CartList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  remove: PropTypes.func,
  empty: PropTypes.func,
};

export default CartList;
