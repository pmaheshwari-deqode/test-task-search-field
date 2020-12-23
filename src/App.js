import React, { useState } from "react";
import { debounce } from "lodash";
import { getSuggestions } from "./mockServer";
import SearchField from "./components/SearchField/SearchField";

function App() {
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

  const debouncedDataFetching = debounce(fetchData, 500);

  const searchHandler = (value = "") => {
    setOptions([]);
    if (value !== ""){
      setFetching(true);
      debouncedDataFetching(value);
    }
  };

  return (
    <div>
      <SearchField
        searchHandler={searchHandler}
        isLoading={isFetching}
        dropdownOptions={options}
        lastSearchedStr={lastSearchedStr}
      />
    </div>
  );
}

export default App;
