import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import { useDispatch } from "react-redux";
import { SEARCH_ACTION } from "../../redux/action/searchAction";

const options = [
  {
    id: "123490",
    value: "France",
    state: "Grand Est",
    city: "Gérardmer",
  },
  {
    id: "12348",
    value: "Malaysia",
    state: null,
    city: null,
  },
  {
    id: "12347",
    value: "United States",
    state: null,
    city: null,
  },
  {
    id: "12345",
    value: "Canada",
    state: null,
    city: null,
  },
  {
    id: "12346",
    country: "Italy",
    state: null,
    city: null,
  },
];

const Autocomplete = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (searchText) => {
    setValue(searchText);
  };

  const filterOptions = (inputValue, options) => {
    return String(options.value)
      .toLowerCase()
      .includes(String(inputValue).toLowerCase());
  };
  const onSelect = (selectedValue) => {
    setValue(selectedValue);
    const results = options.filter((item) =>
      String(item.value)
        .toLowerCase()
        .includes(String(selectedValue).toLowerCase())
    );
    dispatch({
      type: SEARCH_ACTION.SEARCH_RESULTS_RECEIVED,
      payload: results,
    });
  };

  return (
    <>
      <div className="autocomplete_container">
        <h2 className="text-center">Google Maps Autocomplete</h2>
        <AutoComplete
          value={value}
          filterOption={filterOptions}
          dropdownMatchSelectWidth={252}
          options={options}
          style={{ width: 300 }}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Input.Search
            size="large"
            placeholder="Enter a location "
            enterButton
          />
        </AutoComplete>
      </div>

      {/* <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{ width: 300 }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="Enter a location " enterButton />
    </AutoComplete> */}
    </>
  );
};

export default Autocomplete;
