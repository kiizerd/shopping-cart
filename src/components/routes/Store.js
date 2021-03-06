import {
  Container,
  ScrollArea,
  TextInput,
  SimpleGrid,
  Space,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { Search } from "tabler-icons-react";
import ItemCard from "../ItemCard";
import itemData from "../../data";
import { Outlet } from "react-router-dom";

const filterItems = (items, search) => {
  const keys = Object.keys(items[0]);
  const query = search.toLowerCase().trim();
  return items.filter((item) =>
    keys.some((key) => String(item[key]).toLowerCase().includes(query))
  );
};

const Store = () => {
  const [items, setItems] = useState(itemData);
  const [search, setSearch] = useState("");
  const [searchedItems, setSearchedItems] = useState(items);

  useEffect(() => {
    // Placeholder if I ever add a dynamic library of items
    // For now, I am just loading products from a file 'data.js'
    if (items.length === 0) {
      setItems(itemData);
    }
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSearchedItems(filterItems(items, value));
  };

  return (
    <Container size="xl">
      <ScrollArea p="lg">
        <Outlet />
        <TextInput
          placeholder="Search products"
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
      </ScrollArea>
      <Space h="md" />
    </Container>
  );
};

export default Store;
