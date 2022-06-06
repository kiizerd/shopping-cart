import { Button, Space, createStyles } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useContext } from "react";
import PropTypes from "prop-types";
import QuantityInput from "./QuantityInput";
import CartContext from "../helpers/cartContext";

const useStyles = createStyles(() => {
  return {
    form: { display: "flex", flexWrap: "nowrap" },
  };
});

const ItemForm = ({ item }) => {
  const { classes } = useStyles();
  const { add } = useContext(CartContext);
  const form = useForm({
    initialValues: {
      item,
      quantity: 1,
    },
  });

  return (
    <form
      className={classes.form}
      onSubmit={form.onSubmit((values) => add(item, values.quantity))}
    >
      <Button type="submit" variant="light" color="primary" size="sm" fullWidth>
        Add to cart
      </Button>
      <Space w="lg" />
      <QuantityInput {...form.getInputProps("quantity", { type: "number" })} />
    </form>
  );
};

ItemForm.propTypes = {
  item: PropTypes.object,
};

export default ItemForm;
