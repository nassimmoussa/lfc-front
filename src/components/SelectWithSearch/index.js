import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import { selectTheme } from './styles';

const SelectWithSearch = ({
  selected,
  handleChange,
  options,
  className,
  placeholder,
  isClearable,
}) => {
  return (
    <Select
      theme={selectTheme}
      placeholder={placeholder}
      value={selected}
      onChange={handleChange}
      options={options}
      className={className}
      components={{
        IndicatorSeparator: () => null,
      }}
      maxMenuHeight="300px"
      isClearable={isClearable}
    />
  );
};

const optionProp = PropTypes.shape({
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

SelectWithSearch.defaultProps = {
  selected: '',
  isClearable: true,
};

SelectWithSearch.propTypes = {
  selected: optionProp,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(optionProp).isRequired,
  className: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  isClearable: PropTypes.bool,
};

export default SelectWithSearch;
