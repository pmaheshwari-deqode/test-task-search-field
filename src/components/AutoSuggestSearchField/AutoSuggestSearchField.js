import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import { getSuggestions } from "../../mockServer";
import SearchField from "../SearchField";

const AutoSuggestSearchField = () => {
  const [options, setOptions] = useState([]);
  const [isFetching, setFetching] = useState(false);
  const [lastSearchedStr, setLastSearchedStr] = useState("");

  const postSearchActions = (str = "") => {
    // Actions to be performed either on success or error of data fetching.
    // Updating last searched string and isFetching option.
    setLastSearchedStr(str);
    setFetching(false);
  }

  const fetchData = (value) => {
    getSuggestions(value).then(
      results => {
        // Success
        setOptions(results);
        postSearchActions(value);
      },
      err => {
        // Error
        console.error("There was some error while fetching results.");
        postSearchActions(value);
      }
    );
  }
  const debounceFunc = useCallback(debounce(fetchData, 500), []);

  const searchHandler = (value = "") => {
    setOptions([]);
    if (value !== ""){
      setFetching(true);
      debounceFunc(value);
    }
  };

  return (
    <SearchField
      searchHandler={searchHandler}
      isLoading={isFetching}
      dropdownOptions={options}
      lastSearchedStr={lastSearchedStr}
    />
  );
}

export default AutoSuggestSearchField;