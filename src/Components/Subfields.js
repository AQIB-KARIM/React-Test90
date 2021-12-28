import React from "react";

import { Form, Button, Space, Select, Col, Input, Row } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const Subfields = props => {
    
    return (
        <>
            <Form.List name={[props.fieldKey, "Params"]}>
                {(params, { add, remove }) => {
                    return (
                        <>
                            {params.map((param, index2) => (
                                <Row className="subfields"
                                    key={param.key}
                                    style={{ display: "flex", marginBottom: 8 }}
                                    align='bottom'
                                >

                                    <Col span={19} style={{ marginTop: "8px", marginLeft: "8px" }}
                                        {...param}
                                        name={[param.name, "param"]}
                                        fieldKey={[param.fieldKey, "param"]}
                                        key={index2}
                                        // noStyle
                                        rules={[
                                            {
                                                required: true,
                                                message: "Perameter Missing"
                                            }
                                        ]}>

                                        <Input placeholder="insert parameter" type='text' />

                                    </Col>

                                    <Col style={{ marginLeft: '25px' }}>
                                        <MinusCircleOutlined className="plus"
                                            onClick={() => {
                                                remove(param.name);
                                            }}
                                        />
                                    </Col>

                                </Row>
                            ))}



                            <Button className="Add-param"
                                type="dashed"
                                onClick={() => {
                                    add();
                                }}
                            >
                                <PlusOutlined /> Add Parameters
                            </Button>

                        </>
                    );
                }}
            </Form.List>
        </>
    );
};

export default Subfields;
