import {
  Container,
  ScrollArea,
  TextInput,
  SimpleGrid,
  Space,
} from "@mantine/core";
import { useState } from "react";
import PropTypes from "prop-types";
import { Search } from "tabler-icons-react";
import ItemCard from "../components/ItemCard";

const filterItems = (items, search) => {
  const query = search.toLowerCase().trim();
  return items.filter((item) =>
    String(item.name).toLowerCase().includes(query)
  );
};

const SortedStore = ({ items }) => {
  const [search, setSearch] = useState("");
  const [searchedItems, setSearchedItems] = useState(items);

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSearchedItems(filterItems(items, value));
  };

  return (
    <Container size="xl">
      <ScrollArea p="lg">
        <TextInput
          placeholder="Search by any field"
          mb="md"
          icon={<Search size={14} />}
          value={search}
          onChange={handleSearchChange}
          sx={{ padding: "10px 12px 0" }}
        />
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: 1280, cols: 3, spacing: "lg" },
            { maxWidth: 925, cols: 2, spacing: "md" },
            { maxWidth: 640, cols: 1, spacing: "md" },
          ]}
        >
          {searchedItems.map((item, index) => {
            return <ItemCard key={index} item={item} />;
          })}
        </SimpleGrid>
        <Space h="md" />
      </ScrollArea>
    </Container>
  );
};

SortedStore.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default SortedStore;
