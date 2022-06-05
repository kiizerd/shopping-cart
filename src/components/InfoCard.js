import { Card, Center } from "@mantine/core";
import PropTypes from "prop-types";

const InfoCard = ({ children, className }) => {
  return (
    <Center m="auto" className={className}>
      <Card p="sm" shadow="lg">
        {children}
      </Card>
    </Center>
  );
};

InfoCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default InfoCard;
