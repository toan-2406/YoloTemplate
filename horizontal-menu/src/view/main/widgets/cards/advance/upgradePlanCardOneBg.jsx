import React from "react";

import { Card, Row, Col, Button } from "antd";

import cardImg from "../../../../../assets/images/dasboard/analytics-payment-bg.svg";
export default function UpgradePlanCardOneBg() {
  return (
    <Card
      className="hp-border-color-black-40 hp-card-1 hp-upgradePlanCardOne hp-upgradePlanCardOne-bg"
      style={{
        backgroundImage: `url(${ cardImg})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
    >
      <Row align="middle" className="hp-mt-8">
        <Col span={24} className="hp-mb-4">
          <Row align="middle" justify="space-between">
            <Col flex="1">
              <h4 className="hp-mb-8">
                Get exclusive discounts for any payment method
              </h4>

              <p className="hp-p1-body hp-mb-0">
                by upgrading your plan to premium
              </p>
            </Col>

            <Button className="hp-float-right hp-mt-xs-16 hp-text-color-primary-1 hp-bg-dark-primary-1 hp-border-color-dark-primary-1 hp-text-color-dark-0">
              Upgradge Now
            </Button>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
