import { Text, SimpleGrid } from "@mantine/core";
import PropTypes from "prop-types";

const GrandTotal = ({ items }) => {
  const rows = items.map((item) => (
    <SimpleGrid spacing="xs" cols={4} p={0} key={item.name}>
      <Text key={item.name} size="xs">
        {item.name}
      </Text>
      <Text size="xs">${item.price}</Text>
      <Text size="xs">x{item.count}</Text>
      <Text size="xs">${item.total}</Text>
    </SimpleGrid>
  ));

  return (
    <>
      <SimpleGrid spacing="xs" cols={4} p={0}>
        <Text weight={500} underline size="xs">
          Name
        </Text>
        <Text weight={500} underline size="xs">
          Price
        </Text>
        <Text weight={500} underline size="xs">
          Quantity
        </Text>
        <Text weight={500} underline size="xs">
          Total
        </Text>
      </SimpleGrid>
      {rows}
    </>
  );
};

GrandTotal.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default GrandTotal;
