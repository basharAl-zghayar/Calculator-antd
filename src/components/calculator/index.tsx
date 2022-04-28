import React, { useEffect, useState } from "react";
import "./calculator.css";
import { Button, Card, Col, Divider, Row, Typography } from "antd";
import { CalculatorOutlined, PlusOutlined } from "@ant-design/icons";
import CalculatorRow from "../calc-row";

const Calculator = () => {
  const [rowsArray, setRowsArray] = useState<Array<any>>([
    { isDisabled: false, sign: "positive", value: 0 },
  ]);
  const [result, setResult] = useState<number>(0);
  const handleAddRow = () => {
    setRowsArray([
      ...rowsArray,
      { isDisabled: false, sign: "positive", value: 0 },
    ]);
  };
  const handleChange = (value: any, inputField: any, index: any) => {
    const clonedRowsArray = [...rowsArray];
    clonedRowsArray[index][inputField] = value;
    setRowsArray(clonedRowsArray);
  };

  const handleDeleteRow = (index: any) => {
    const clonedRowsArray = [...rowsArray];
    clonedRowsArray.splice(index, 1);
    setRowsArray(clonedRowsArray);
  };
  useEffect(() => {
    let calculatedResult = 0;
    rowsArray.map((row: any) => {
      if (!row.isDisabled) {
        if (row.sign === "positive") {
          calculatedResult += row.value;
        } else if (row.sign === "negative") {
          calculatedResult -= row.value;
        }
      }
      return row;
    });
    setResult(calculatedResult);
  }, [rowsArray]);

  return (
    <React.Fragment>
      <Row className="mainRow">
        <Card
          className="calcCard"
          title={
            <Row gutter={24} align="middle" justify="start">
              <Col md={1}>
                <CalculatorOutlined />
              </Col>
              <Col md={23}>My Calculator</Col>
            </Row>
          }
        >
          <Row>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAddRow}
            >
              Add Row
            </Button>
          </Row>
          <Divider />
          <Row gutter={24} align="middle">
            <Col md={2} lg={2}>
              <Typography.Text strong>Sign</Typography.Text>
            </Col>
            <Col md={6}>
              <Typography.Text strong>Value</Typography.Text>
            </Col>
            <Col md={4}>Actions</Col>
          </Row>
          <Divider />
          {rowsArray.map((row: any, index: any) => {
            return (
              <Row align="middle">
                <CalculatorRow
                  rowProps={row}
                  index={index}
                  handleChange={handleChange}
                  handleDeleteRow={handleDeleteRow}
                />
              </Row>
            );
          })}
          <Divider />
          <Row gutter={24} align="stretch" >
            <Col md="4">
              <Typography.Text strong>Result:</Typography.Text>
            </Col>
            <Col md="4">
              <Typography.Text strong>{result}</Typography.Text>
            </Col>
          </Row>
        </Card>
      </Row>
    </React.Fragment>
  );
};

export default Calculator;
