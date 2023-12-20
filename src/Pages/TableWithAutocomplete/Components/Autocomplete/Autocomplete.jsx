import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const AutocompleteComponent = ({
  options,
  selectedValue,
  onValueChange,
  getOptionLabelProp,
  labelProp,
  sx,
}) => {
  return (
    <div>
      <Autocomplete
        options={options}
        size="small"
        getOptionLabel={getOptionLabelProp}
        value={selectedValue}
        onChange={onValueChange}
        sx={sx}
        renderInput={(params) => (
          <TextField {...params} label={labelProp} variant="outlined" />
        )}
      />
    </div>
  );
};

export default AutocompleteComponent;
