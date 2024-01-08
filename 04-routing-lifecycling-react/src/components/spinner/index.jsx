import React from "react";
import { Flex, Spin } from "antd";
import './index.scss'
const Spinner = () => {
  return (
    <div id="spinner">
      <Flex align="center" gap="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Flex>
    </div>
  );
};

export default Spinner;
