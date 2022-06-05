import { Card, Center } from "@mantine/core";
import PropTypes from "prop-types";

const InfoCard = ({ children, className }) => {
  return (
    <Center className={className}>
      <Card shadow="md" p="sm">
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
