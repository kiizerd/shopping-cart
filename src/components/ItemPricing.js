import { Table } from "@mantine/core";
import PropTypes from "prop-types";

const ItemPricing = ({ count, price, total }) => {
  return (
    <Table fontSize="xs">
      <thead>
        <tr>
          <th>Price</th>
          <th>Quantity</th>
          <th>Tax</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>${price}</td>
          <td>x{count}</td>
          <td>8.5%</td>
          <td>${total}</td>
        </tr>
      </tbody>
    </Table>
  );
};

ItemPricing.propTypes = {
  count: PropTypes.number,
  price: PropTypes.number,
  total: PropTypes.number,
};

export default ItemPricing;
