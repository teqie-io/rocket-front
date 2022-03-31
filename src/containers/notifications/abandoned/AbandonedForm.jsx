import React from "react";
import { withTranslation } from "react-i18next";
import { Row, Col, Form, Input, Button, Space } from "antd";
import {
  MinusCircleFilled,
  CheckCircleFilled,
  PlusOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

class AbandonedForm extends React.Component {
  constructor() {
    super();
    this.state = {
      save: true,
      limit: 1,
      delete: false,
      first: false,
    };
  }

  render() {
    const {t} = this.props;
    console.log(this.state);
    const {
      initialValues,
      onValuesChange,
      onTick,
      onDelete,
      onSubmit,
    } = this.props;

    const onFinish = (values) => {
      if (values.button[values.button.length - 1]) {
        console.log(values.button[values.button.length - 1]);
        this.props.onTick(values.button[values.button.length - 1]);
      }
    };

    return (
      <Form
        name="basic"
        hideRequiredMark
        layout="vertical"
        initialValues={initialValues}
        onValuesChange={onValuesChange}
        onFinish={onFinish}
      >
        <Form.Item
          label="Title*"
          name="Title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          extra="Should be less than 500 words"
        >
          <TextArea maxLength={500} autoSize showCount />
        </Form.Item>

        <Form.Item label="Target Link" name="targetLink">
          <Input />
        </Form.Item>

        {!this.state.delete ? (
          <Row style={{ width: "100%" }}>
            <Col span={22} style={{ padding: 0 }}>
              <Form.Item
                name="buttonName"
                label={"button " + 1}
                labelCol={{ span: 10 }}
                rules={[{ required: true, message: "Missing button name" }]}
                style={{ marginRight: "max(-8.33333333%)" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="buttonLink"
                rules={[{ required: true, message: "Missing button link" }]}
                extra="By default, PushOwl will use your cart page for button 1 link"
                style={{ marginRight: "max(-8.33333333%)" }}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={2}>
              <Space size={8} width="50px" style={{ float: "right" }}>
                <CheckCircleFilled
                  style={{ color: "#52c41a", fontSize: "medium" }}
                  onClick={() => {
                    onTick();
                    this.setState({
                      save: true,
                    });
                  }}
                />
                <MinusCircleFilled
                  style={{ color: "#ec5858", fontSize: "medium" }}
                  onClick={() => {
                    this.setState({
                      delete: true,
                      first: true,
                      limit: this.state.limit - 1,
                    });
                    onDelete();
                  }}
                />
              </Space>
            </Col>
          </Row>
        ) : null}

        <Form.List name="button">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                <Row
                  size={1}
                  direction="vertical"
                  style={{ width: "100%" }}
                  key={key}
                >
                  <Col span={22} style={{ padding: 0 }}>
                    <Form.Item
                      style={{ width: "100%" }}
                      {...restField}
                      label={`button ${
                        this.state.delete ? index + 1 : index + 2
                      }`}
                      name={[name, "name"]}
                      fieldKey={[fieldKey, "name"]}
                      rules={[
                        { required: true, message: "Missing button name" },
                      ]}
                    >
                      <Input placeholder="Button name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, "link"]}
                      fieldKey={[fieldKey, "link"]}
                      rules={[
                        { required: true, message: "Missing button link" },
                      ]}
                    >
                      <Input placeholder="Button Link" />
                    </Form.Item>
                  </Col>
                  <Col span={2}>
                    <Space size={8} width="50px" style={{ float: "right" }}>
                      <button
                        onClick={onFinish}
                        style={{
                          background: "none",
                          color: "inherit",
                          border: "none",
                          padding: 0,
                          font: "inherit",
                          cursor: "pointer",
                          outline: "inherit",
                        }}
                      >
                        <CheckCircleFilled
                          style={{ color: "#52c41a", fontSize: "medium" }}
                          onClick={() => {
                            //   onTick();
                            this.setState({
                              save: true,
                              limit: this.state.limit + 1,
                            });
                          }}
                        />
                      </button>

                      <MinusCircleFilled
                        style={{ color: "#ec5858", fontSize: "medium" }}
                        onClick={() => {
                          remove(name);
                          onDelete(index);
                          this.setState({ limit: this.state.limit - 1 });
                        }}
                      />
                    </Space>
                  </Col>
                </Row>
              ))}
              {this.state.save && this.state.limit < 3 ? (
                <Form.Item>
                  <Button
                    type="dashed"
                    style={{ width: "30%", minWidth: "fit-content" }}
                    onClick={() => {
                      add();
                      this.setState({ save: false, first: false });
                    }}
                    block
                    icon={<PlusOutlined />}
                  >
                    {t('abandonedNotifForm.addButton')}
                  </Button>
                </Form.Item>
              ) : this.state.first ? (
                <Form.Item>
                  <Button
                    type="dashed"
                    style={{ width: "30%", minWidth: "fit-content" }}
                    onClick={() => {
                      add();
                      this.setState({
                        save: false,
                        first: false,
                      });
                    }}
                    block
                    icon={<PlusOutlined />}
                  >
                    {t('abandonedNotifForm.addButton')}
                  </Button>
                </Form.Item>
              ) : null}
            </>
          )}
        </Form.List>
        <Row
          type="flex"
          style={{
            width: "100%",
          }}
        >
          <Col span={8}>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                style={{
                  background: "#36A900",
                  border: "1.28918px solid #36A900",
                  width: "100%",
                  borderRadius: "5px",
                }}
                onClick={onSubmit}
              >
                {t('abandonedNotifForm.saveButton')}
              </Button>
            </Form.Item>
          </Col>
          <Col span={15} push={1}>
            <Form.Item>
              <Button
                type="primary"
                size="large"
                style={{
                  background: "#FBF2D5",
                  border: "1px solid #FFC107",
                  color: "#FFC107",
                  width: "100%",
                  borderRadius: "5px",
                }}
                onClick={onSubmit}
              >
                {t('abandonedNotifForm.testNotif')}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}
export default withTranslation()(AbandonedForm);
