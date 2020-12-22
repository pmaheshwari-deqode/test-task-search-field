import React, { useState } from "react";
import _ from "lodash";
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

  const searchHandler = _.debounce(value => {
    setOptions([]);
    // Fetching data for the latest string
    if (value !== "") {
      setFetching(true);
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
  }, 500);

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
