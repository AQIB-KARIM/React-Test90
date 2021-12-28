import React, { useState } from 'react';
import { Modal, Button, Form, Input, Select, Typography, Space, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import Subfields from './Subfields';

const Modalinfo = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    const { Option } = Select;
    const { Text } = Typography
    const [select, setSelectValue] = useState('')


    const handleChange = (value) => {
        setSelectValue(value);
    }


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className='main-div'>
                <Button type="primary" onClick={showModal}>
                    Open Modal
                </Button>
            </div>
            <Modal title="Add Revenue Group" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                <Form
                    form={form}
                    layout="vertical" >

                    <Form.Item label="Revenue Group Title" >
                        <Input placeholder="Fashion - 15%" type='text' />

                    </Form.Item>

                    <div>
                        <Text>If</Text>
                        <Select onChange={handleChange}>
                            <Option value='ALL'>ALL</Option>
                            <Option value='ONE'>ONE</Option>
                            <Option value='TWO'>TWO</Option>
                            <Option value='THREE'>THREE</Option>
                        </Select>
                        <Text>of the below conditions are met</Text>
                    </div>



                    <Form.List name="users">
                        {(field, { add, remove }) => (
                            <>

                                <Form.Item>

                                    <Row className='background-color'>
                                        <Col>
                                            <Select className='drops' onChange={handleChange}>
                                                <Option value='ALL'>ALL</Option>
                                                <Option value='ONE'>ONE</Option>
                                                <Option value='TWO'>TWO</Option>
                                                <Option value='THREE'>THREE</Option>

                                            </Select>
                                        </Col>

                                        <Col>

                                            <Select className='drops' onChange={handleChange}>
                                                <Option value='ALL'>ALL</Option>
                                                <Option value='ONE'>ONE</Option>
                                                <Option value='TWO'>TWO</Option>
                                                <Option value='THREE'>THREE</Option>
                                            </Select>

                                        </Col>

                                        <Col span={18} className='p-2 input-field'>

                                            <Input placeholder="insert parameter" type='text' />





                                        </Col>

                                        <Col className='py-2'>
                                            <Button className=' plus-minus'>
                                                <PlusCircleOutlined onClick={() => add()} />
                                            </Button>

                                            <Button className='plus-minus' id='disable'>
                                                <MinusCircleOutlined disabled='true' />
                                            </Button>

                                        </Col>



                                    </Row>
                                </Form.Item>


                                {field.map((field, key) => (


                                    <>

                                        <hr />

                                        <Row className='rule-head'>


                                            <Col style={{ fontWeight: "bold" }}>RULE {field.key + 1}</Col>

                                        </Row>

                                        <Row key={field.key} className='background-color' align="baseline" >



                                            <Col
                                                {...field}
                                                name={[field.name, 'first']}

                                            >
                                                <Select className='drops' onChange={handleChange}>
                                                    <Option value='ALL'>ALL</Option>
                                                    <Option value='ONE'>ONE</Option>
                                                    <Option value='TWO'>TWO</Option>
                                                    <Option value='THREE'>THREE</Option>

                                                </Select>
                                            </Col>

                                            <Col
                                                {...field}
                                                name={[field.name, 'last']}
                                            >
                                                <Select className='drops' onChange={handleChange}>
                                                    <Option value='ALL'>ALL</Option>
                                                    <Option value='ONE'>ONE</Option>
                                                    <Option value='TWO'>TWO</Option>
                                                    <Option value='THREE'>THREE</Option>

                                                </Select>
                                            </Col>



                                            <Col span={18} style={{ marginTop: "8px", marginLeft: "8px" }}
                                                {...field}
                                                name={[field.name, 'insert new rule']}>

                                                <Input placeholder="insert parameter" type='text' />

                                            </Col>

                                            <Col style={{ marginTop: "10px" }}>
                                                <MinusCircleOutlined className='plus-minus' onClick={() => remove(field.name)} />
                                            </Col>


                                            <Col span={24}>
                                                <Subfields fieldKey={field.name} />
                                            </Col>

                                            <hr />
                                        </Row>

                                    </>

                                ))}


                            </>
                        )}
                    </Form.List>
            
                </Form>

            </Modal>
        </>
    )
}

export default Modalinfo
