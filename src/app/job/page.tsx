'use client';

import { Button } from 'antd';
import Layout from '../../components/layout';
import CurrentOpeningCard from '../dashboard/_component/currentOpeningCard';
import TableJob from './_component/TableJob';
import { currentOpeningData } from '../../common/dummy/menu';

const JobPage = () => {
  return (
    <Layout>
      <div className='w-11/12'>
        <div className='mb-4 flex items-center'>
          <h3 className='text-3xl font-medium text-black'>Jobs</h3>
          <div className='ml-5 flex h-8 items-center rounded-xl bg-[#f4f3ff] px-2 font-medium'>
            <p className='!text-sm text-[#8e82fe]'>20 jobs</p>
          </div>
        </div>
        <p className='w-1/2 leading-6 text-slate-700'>
          Post your job vacancy including important information, such as company
          name, available positions, required qualifications, and job location.
          With this feature, platform users can easily find job vacancies that
          match their interests and qualifications. Happy hiring!
        </p>
        <Button className='mt-5 !flex !h-11 w-40 items-center justify-around rounded-xl !bg-[#8e82fe] !text-white'>
          <p className='text-2xl'>+</p>
          <p>Post a new job</p>
        </Button>

        <hr className='my-8 bg-red-700' />

        <div className='mt-6'>
          <h1 className='mb-2 text-2xl font-medium text-black'>
            Current Openings
          </h1>
          <div className='mb-2 flex'>
            {currentOpeningData.map((v: any, i: number) => {
              return (
                <CurrentOpeningCard
                  name={v.name}
                  company={v.company}
                  tags={v.tags}
                  applicants={v.applicants}
                  key={i}
                />
              );
            })}
          </div>
        </div>

        <div className='my-5 '>
          <h1 className='mb-2 text-2xl font-medium text-black'>All Jobs</h1>
          <div className='rounded-xl border-2 border-solid border-slate-200 p-2'>
            <TableJob />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default JobPage;
