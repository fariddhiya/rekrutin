'use client';

import React, { useState } from 'react';
import { Button, Flex, Image, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { AvatarIco } from '../../../common/assets/images';
import { PiPencilSimpleLine } from 'react-icons/pi';
import { MdDelete } from 'react-icons/md';

interface DataType {
  key: string;
  company: string;
  icon: any;
  status: boolean;
  role: string;
  postDate: string;
  applicants: number;
  type: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Company',
    dataIndex: 'company',
    key: 'company',
    render: (_: any, record: DataType) => (
      <Space size='middle'>
        <Image
          src={
            'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/5/15/eaafd4b2-83c5-4a0b-a2da-408a9fcfdcee.jpg'
          }
          alt=''
          className='!pointer-events-none !h-8 !w-8 !bg-red-600'
        />

        <p className='font-bold text-black'>{record.company}</p>
      </Space>
    ),
  },
  {
    title: 'Applied Role',
    dataIndex: 'role',
    key: 'role',
    render: (_: any, record: DataType) => (
      <Space size='middle'>
        <p className='font-medium text-slate-700'>{record?.role}</p>
      </Space>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_: any, record: DataType) => (
      <Flex className='h-8 w-16 items-center justify-around rounded-xl bg-red-500 px-2'>
        <p className='text-white'>{record?.status ? '◉' : ''}</p>
        <p className='text-white'>{record?.status ? 'Open' : 'Closed'}</p>
      </Flex>
    ),
  },
  {
    title: 'Posted Date',
    dataIndex: 'postDate',
    key: 'postDate',
    render: (_: any, record: DataType) => (
      <Space size='middle'>
        <p className='font-medium text-slate-700'>{record?.postDate}</p>
      </Space>
    ),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (_: any, record: DataType) => (
      <Space size='middle'>
        <p className='font-medium text-slate-700'>{record?.type}</p>
      </Space>
    ),
  },
  {
    title: 'Applicants',
    dataIndex: 'applicants',
    key: 'applicants',
    render: (_: any, record: DataType) => (
      <Space size='middle'>
        <p className='font-medium text-slate-700'>{record?.applicants}</p>
      </Space>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size='middle' className='!w-20 '>
        <Button type='link' icon={<PiPencilSimpleLine />} />

        <Button type='link' icon={<MdDelete />} />
      </Space>
    ),
  },
];

const initialData: DataType[] = [
  {
    key: '1',
    company: 'Soylent corp',
    role: 'Internet Security Assistant',
    status: true,
    postDate: '25/03/24',
    applicants: 50,
    icon: AvatarIco,
    type: 'full time',
  },
  {
    key: '2',
    company: 'Soylent corp',
    role: 'Internet Security Assistant',
    status: true,
    postDate: '25/03/24',
    applicants: 50,
    icon: AvatarIco,
    type: 'full time',
  },
  {
    key: '3',
    company: 'Soylent corp',
    role: 'Internet Security Assistant',
    status: true,
    postDate: '25/03/24',
    applicants: 50,
    icon: AvatarIco,
    type: 'full time',
  },
];

const TableJob = () => {
  const [tableData, setTableData] = useState<DataType[]>(initialData);

  const [selected, setSelected] = useState<string[]>([]);

  return (
    <Table
      columns={columns}
      dataSource={tableData}
      rowSelection={{
        onChange: (selectedRowKeys, selectedRows) => {
          setSelected(selectedRows.map((row) => row.key));
        },
        getCheckboxProps: (record: DataType): any => {
          if (selected.length > 2) {
            return {
              disabled: !selected.includes(record.key),
            };
          }
        },
      }}
    />
  );
};

export default TableJob;
