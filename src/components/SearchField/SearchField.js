import React, { useEffect, useState } from "react";
import { noop } from "lodash";
import PropTypes from "prop-types";
import { TextField, makeStyles } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles({
  rootContainer: {
    width: "500px",
    padding: "20px"
  },
  matchingText: {
    color: "red"
  },
  noResultsFound: {
    color: "red",
    display: "block",
    margin: "3px",
    lineBreak: "anywhere"
  }
});

const SearchField = ({ searchHandler, dropdownOptions, isLoading, lastSearchedStr }) => {
  const classes = useStyles();
  const [openDropDown, setOpenDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [prevInput, setPrevInput] = useState("");
  const [noResults, showNoResults] = useState(false);

  const shouldOpenDropdown = () => {
    // Checking whether dropdown should be open by default
    if (dropdownOptions.length && !isLoading) {
      setOpenDropdown(true);
      showNoResults(false);
    } else if (Boolean(searchInput) && !isLoading) {
      setOpenDropdown(false);
      showNoResults(true);
    }
  };

  useEffect(shouldOpenDropdown, [dropdownOptions, isLoading]);

  const getLastStr = (str = searchInput) => {
    // Fetching last string
    const values = str.split(" ").filter(opt => Boolean(opt));
    return values[values.length - 1];
  }

  return (
    <div className={classes.rootContainer}>
      <Autocomplete
        open={Boolean(openDropDown && dropdownOptions.length)}
        onClose={() => setOpenDropdown(false)}
        onOpen={() => setOpenDropdown(true)}
        value={searchInput}
        getOptionSelected={(option, value) => option === value}
        popupIcon={null}
        options={dropdownOptions}
        loading={isLoading}
        onChange={(event, value) => {
          // Adding space to the end of the selected
          let values = searchInput.split(" ").filter(opt => Boolean(opt));
          values[values.length - 1] = value;
          const val = value ? values.join(" ") + " " : "";
          setSearchInput(val);
          setPrevInput(val);
          if (!Boolean(val)) searchHandler("");
          if (!Boolean(value) && noResults) showNoResults(false);
        }}
        renderOption={option => {
          // Highlighting matching sub-string
          const [before, after] = option.split(lastSearchedStr);
          return (
            <span>
              {before}
              <span className={classes.matchingText}>{lastSearchedStr}</span>
              {after}
            </span>
          )
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Search"
            variant="outlined"
            onChange={({ target }) => {
              setSearchInput(target.value);
              setPrevInput(target.value);
              const last = getLastStr(target.value);
              if (getLastStr(prevInput) !== last) searchHandler(getLastStr(target.value));
              else setOpenDropdown(false)
              setPrevInput(target.value);
            }}
            InputProps={{
              ...params.InputProps
            }}
          />
        )}
      />
      <span className={classes.noResultsFound}>
        {noResults && !isLoading
          ? `No results found for '${lastSearchedStr}'`
          : null}
      </span>
    </div>
  );
};

SearchField.propTypes = {
  searchHandler: PropTypes.func,
  dropdownOptions: PropTypes.arrayOf(PropTypes.string),
  isLoading: PropTypes.bool,
  lastSearchedStr: PropTypes.string
};

SearchField.defaultProps = {
  searchHandler: noop(),
  dropdownOptions: [],
  isLoading: false,
  lastSearchedStr: ""
};

export default SearchField;
