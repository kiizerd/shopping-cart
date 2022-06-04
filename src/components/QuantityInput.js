import { useRef, useState } from "react";
import { createStyles, NumberInput, ActionIcon } from "@mantine/core";
import PropTypes from "prop-types";
import { Plus, Minus } from "tabler-icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    padding: `4px 3px`,
    borderRadius: theme.radius.sm,
    border: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
    }`,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.white,

    "&:focus-within": {
      borderColor: theme.colors[theme.primaryColor][6],
    },
  },

  control: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    border: `1px solid ${
      theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3]
    }`,

    "&:disabled": {
      borderColor:
        theme.colorScheme === "dark" ? "transparent" : theme.colors.gray[3],
      opacity: 0.8,
      backgroundColor: "transparent",
    },
  },

  input: {
    textAlign: "center",
    paddingRight: `${theme.spacing.sm}px !important`,
    paddingLeft: `${theme.spacing.sm}px !important`,
    height: 28,
    flex: 1,
  },
}));

const QuantityInput = ({ min = 1, max = 10 }) => {
  const { classes } = useStyles();
  const handlers = useRef();
  const [value, setValue] = useState(1);

  return (
    <div className={classes.wrapper}>
      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => handlers.current.decrement()}
        disabled={value === min}
        className={classes.control}
      >
        <Minus size={16} />
      </ActionIcon>

      <NumberInput
        variant="unstyled"
        min={min}
        max={max}
        handlersRef={handlers}
        value={value}
        onChange={setValue}
        classNames={{ input: classes.input }}
      />

      <ActionIcon
        size={28}
        variant="transparent"
        onClick={() => handlers.current.increment()}
        disabled={value === max}
        className={classes.control}
      >
        <Plus size={16} />
      </ActionIcon>
    </div>
  );
};

QuantityInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

export default QuantityInput;
