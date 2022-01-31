import React from "react";
import PropTypes from "prop-types";
import { StyledSelectionPanel } from "./styles/SelectionPanel.styled";

// context
import { WalletInfoContext } from "../context/WalletInfoContext";

const SelectionPanel = ({ name, options, value, defaultOption, onChange }) => {
  const { wallet } = React.useContext(WalletInfoContext);

  return (
    <StyledSelectionPanel>
      <select name={name} id={name} value={value} onChange={(e) => onChange(e)}>
        {defaultOption && <option value="">{defaultOption}</option>}
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <div>
        <h6>balance</h6>
        <p>
          {value === "USD"
            ? `$${wallet.USD}`
            : value === "EUR"
            ? `€${wallet.EUR}`
            : 0.0}
        </p>
      </div>
    </StyledSelectionPanel>
  );
};

SelectionPanel.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default SelectionPanel;
