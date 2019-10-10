// @flow
import React, { Component } from 'react';
import { Form, Select, Button, Upload, Icon } from 'antd';

type Props = {};

class FileUploadForm extends Component<Props> {
  props: Props;

  //Handle form submission
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  //Handle item upload submission
  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  /*
    Docs for Antd Forms: https://ant.design/components/form/

    Summary:    Renders a basic form with an upload form item with the intent
                of accepting .csv files to parse later on.

  */

  render() {

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    
    return (
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Upload" extra="File must be a .csv">
                {getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                })(
            <Upload name="logo" action="/upload.do" listType="picture" accept=".csv">
              <Button>
                <Icon type="upload" /> Select a file
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedUploadForm = Form.create({ name: 'validate_other' })(FileUploadForm);
export default WrappedUploadForm