import React from "react";

import { Card, Row, Col, Button } from "antd";

import illustration from "../../../../../assets/images/illustrations/time-management-1.svg";
export default function CtaCardOne() {
  return (
    <Card className="hp-border-color-black-40 hp-card-6">
      <Row>
        <Col className="hp-text-center" span={24}>
          <img src={illustration} alt="Buy Pro Account to explore Premium Features" />

          <h4 className="hp-mb-0 hp-my-24 hp-mr-4 hp-font-weight-700">
            Buy Pro Account to explore Premium Features
          </h4>

          <Button type="primary">Purchase Now</Button>
        </Col>
      </Row>
    </Card>
  );
}
