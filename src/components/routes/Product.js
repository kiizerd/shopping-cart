import { Badge, Group, Image, Paper, Text, Title } from "@mantine/core";
import { useParams } from "react-router-dom";
import items from "../../data";
import images from "../../helpers/itemImages";
import ItemForm from "../ItemForm";

const Product = () => {
  const { productId } = useParams();
  const item = items.find((i) => i.imageSrc === productId);
  const ProductCard = (
    <Paper px="xl">
      <Group mb={6} sx={{ justifyContent: "space-between" }}>
        <Title>{item.name}</Title>
        <ItemForm item={item} />
      </Group>
      <Group sx={{ justifyContent: "space-between" }}>
        <Text>{item.description}</Text>
        <Badge size="lg">${item.price}</Badge>
      </Group>
      <Image src={images[item.imageSrc]} fit="contain" height={750} />
    </Paper>
  );
  return item ? ProductCard : false;
};

export default Product;
