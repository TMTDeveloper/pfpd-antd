import React, { Component } from 'react';

import { Input, Form, Row,DatePicker,Button, Descriptions } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import router from 'umi/router';
import { FormComponentProps } from 'antd/lib/form';

interface SearchProps extends FormComponentProps{
  match: {
    url: string;
    path: string;
  };
  location: {
    pathname: string;
  };
}

// @connect()
class PerekamanDokumenLHP extends Component<SearchProps> {
  handleTabChange = (key: string) => {
    const { match } = this.props;
    const url = match.url === '/' ? '' : match.url;
    switch (key) {
      case 'browsepib':
        router.push(`${url}/browsepib`);
        break;
      case 'headerpib':
        router.push(`${url}/headerpib`);
        break;
      case 'detailbarang':
        router.push(`${url}/detailbarang`);
        break;
      default:
        break;
    }
  };

  handleFormSubmit = (value: string) => {
    console.log(value);
  };

  getTabKey = () => {
    const { match, location } = this.props;
    const url = match.path === '/' ? '' : match.path;
    const tabKey = location.pathname.replace(`${url}/`, '');
    if (tabKey && tabKey !== '/') {
      return tabKey;
    }
    return 'browsepib';
  };

  render() {
    const tabList = [
      {
        key: 'browsepib',
        tab: 'Browse PIB',
      },
      {
        key: 'headerpib',
        tab: 'Header PIB',
      },
      {
        key: 'detailbarang',
        tab: 'Detail Barang',
      },
    ];
    const column=1
    const officeDescription=(
      <Descriptions column={column}>
      <Descriptions.Item label="Kode Kantor" ><b>432452</b></Descriptions.Item>
      <Descriptions.Item label="Deskripsi Kantor"><b>DIREKTORAT INFORMASI KEPABEANAN DAN CUKAI</b></Descriptions.Item>
    </Descriptions>
    )
    const {form } = this.props;
    function onChange(date: any, dateString: any) {
      console.log(date, dateString);
    }
    const { getFieldDecorator } = form
    const mainSearch = (
      <div>
        {officeDescription}
        <Form layout="inline" className="queryPerekamanDokumenLHP" onSubmit={console.log}>
          <Row>
            <Form.Item label="Nomor PIB/Tanggal PIB">
              {getFieldDecorator('nomorPib', {
              })(<Input />)}
            </Form.Item>
            <Form.Item >
              {getFieldDecorator('tanggalPib', {
              })(<DatePicker onChange={onChange} />)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cari
          </Button>
            </Form.Item>
            <Form.Item>
              <Button type="default" htmlType="reset">
                Kosongkan
          </Button>
            </Form.Item>
          </Row>
        </Form>
      </div>

    );


    const { children } = this.props;

    return (
      <PageHeaderWrapper
        content={mainSearch}
        tabList={tabList}
        tabActiveKey={this.getTabKey()}
        onTabChange={this.handleTabChange}
      >
        {children}
      </PageHeaderWrapper>
    );
  }
}

export default Form.create()(PerekamanDokumenLHP);
