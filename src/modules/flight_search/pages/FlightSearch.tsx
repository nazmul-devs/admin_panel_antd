import { Button, Col, DatePicker, Input, Row } from 'antd';
import React from 'react';

type Props = {};

const FlightSearch = (props: Props) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <DatePicker />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Input placeholder='Enter Destination' />
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}>
        <Button type='primary' block>
          Search
        </Button>
      </Col>
    </Row>
  );
};

export default FlightSearch;
