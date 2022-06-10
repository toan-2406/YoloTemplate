import React from "react";

import { Card, Row, Col, Button, Input, Form } from "antd";

import illustration from "../../../../../assets/images/illustrations/newsletter-1.svg";
export default function SubscribeCard() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card className="hp-border-color-black-40 hp-card-6">
      <Row>
        <Col className="hp-text-center" span={24}>
          <img src={ illustration} alt="Illustrations" className="hp-mb-36" />

          <Form
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email:"
              name="email"
              className="hp-mb-16 hp-text-left"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input placeholder="Please enter your email" />
            </Form.Item>

            <Form.Item className="hp-mb-0">
              <Button type="primary" htmlType="submit" block>
                Subscribe
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
}
