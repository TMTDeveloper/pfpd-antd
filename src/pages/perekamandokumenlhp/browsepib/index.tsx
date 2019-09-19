import React, { Component } from 'react';

import { Table, Card} from 'antd';



// @connect()
class BrowsePib extends Component{
    render() {
        const columns = [
            {
              title: 'No PIB',
              dataIndex: 'noPib',
            },
            {
              title: 'Tgl PIB',
              dataIndex: 'tglPib',
            },
            {
              title: 'Nama Importir',
              dataIndex: 'namaImportir',
            },
            {
                title: 'Nama Nama PPJK',
                dataIndex: 'namaPpjk',
            },
          ];
          
          const data = [
            {
              key: '1',
              noPib: '117620',
              tglPib: '2018-04-11',
              namaImportir: 'PT.CAHAYA UNGGUL ASRI',
              namaPpjk: 'PT LINTAS JAYA SEMESTA',
            },
            {
                key: '2',
                noPib: '117620',
                tglPib: '2018-04-11',
                namaImportir: 'PT.CAHAYA UNGGUL ASRI',
                namaPpjk: 'PT LINTAS JAYA SEMESTA',
              },
              {
                key: '3',
                noPib: '117620',
                tglPib: '2018-04-11',
                namaImportir: 'PT.CAHAYA UNGGUL ASRI',
                namaPpjk: 'PT LINTAS JAYA SEMESTA',
              },
              {
                key: '4',
                noPib: '117620',
                tglPib: '2018-04-11',
                namaImportir: 'PT.CAHAYA UNGGUL ASRI',
                namaPpjk: 'PT LINTAS JAYA SEMESTA',
              },
              {
                key: '5',
                noPib: '117620',
                tglPib: '2018-04-11',
                namaImportir: 'PT.CAHAYA UNGGUL ASRI',
                namaPpjk: 'PT LINTAS JAYA SEMESTA',
              },
          ];
    return (
        <Card>
        <Table columns={columns} dataSource={data} />
        </Card>
    );
  }
}


export default BrowsePib
