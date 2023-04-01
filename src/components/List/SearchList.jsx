import { Divider, List, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const SearchList = () => {
  const { results } = useSelector((state) => state.searchResults);
  return (
    <>
      {/* <Divider orientation="left">searches</Divider> */}
      <List
        header={<strong>Search results</strong>}
        bordered
        className="mt-5"
        dataSource={results}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text></Typography.Text> {item?.value}
          </List.Item>
        )}
      />
    </>
  );
};

export default SearchList;
