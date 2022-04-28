import { Button, Col, InputNumber, Row, Select, Switch } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import React from "react";

const CalculatorRow = ({
  rowProps,
  index,
  handleChange,
  handleDeleteRow,
}: any) => {
  return (
    <React.Fragment>
      <Col md={2} lg={2}>
        <Select
          defaultValue={rowProps?.sign}
          onChange={(value: any) => {
            handleChange(value, "sign", index);
          }}
          disabled={rowProps?.isDisabled}
        >
          <Select.Option key="positive" value="positive">
            +
          </Select.Option>
          <Select.Option key="negative" value="negative">
            -
          </Select.Option>
        </Select>
      </Col>
      <Col md={6}>
        <InputNumber
          min={0}
          value={rowProps?.value}
          style={{ width: "100%" }}
          onChange={(value: any) => {
            handleChange(value, "value", index);
          }}
          disabled={rowProps?.isDisabled}
        />
      </Col>
      <Col md={1}>
        <Button
          danger
          type="link"
          size="large"
          onClick={() => handleDeleteRow(index)}
        >
          <DeleteOutlined />
        </Button>
      </Col>
      <Col md={3}>
        <Switch
          size="small"
          checked={!rowProps?.isDisabled}
          onChange={(value: any) => {
            console.log({ value });

            handleChange(!value, "isDisabled", index);
          }}
        />
      </Col>
    </React.Fragment>
  );
};

export default CalculatorRow;
