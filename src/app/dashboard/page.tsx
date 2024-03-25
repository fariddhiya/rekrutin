'use client';

import SummaryCard from './_component/summaryCard';
import CurrentOpeningCard from './_component/currentOpeningCard';
import {
  currentOpeningData,
  dashboardMetric,
  dataGraph,
} from '../../common/dummy/menu';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import InterviewCardDashboard from './_component/interviewCardDashboard';
import Wave from '../../common/assets/images/wave';
import { Button } from 'antd';
import Layout from '../../components/layout';
Chart.register(CategoryScale);
Chart.defaults.plugins.tooltip.enabled = true;

const DashboardPage = () => {
  return (
    <Layout>
      <div className='mb-5'>
        <div className='mb-5 flex items-center'>
          <h1 className='text-4xl font-medium text-black'>Dashboard</h1>
          <div className='ml-5 flex h-8 items-center rounded-xl bg-[#f4f3ff] px-2 font-medium'>
            <p className='!text-sm text-[#8e82fe]'>New Insight</p>
          </div>
        </div>
        <div>
          <p className='w-1/2 leading-6 text-slate-700'>
            Quick view of your hiring status and provides useful insights for
            hiring managers and HR coordinators with easy-to-understand graphs
            and diagrams, including information that you need. Hiring managers
            and HR coordinators can easily track recruiting performance. Hiring
            process can be monitored more efficiently and effectively, helping
            companies recruit the best talent more effectively
          </p>
        </div>
      </div>

      <div className='mb-16 w-11/12'>
        <div className='flex w-auto'>
          {dashboardMetric.map((v, i) => {
            return (
              <div className='flex w-full' key={i}>
                <SummaryCard
                  active={i == 0 ? true : false}
                  name={v.name}
                  amount={v.amount}
                  type={v.type}
                  changeAmount={v.changeAmount}
                />
                {i < 3 && <div className='mx-6 !h-auto w-0.5 bg-slate-300' />}
              </div>
            );
          })}
        </div>
        <div className='my-8 !h-[1px] bg-slate-300' />

        <div className='flex'>
          <div className='mr-8 w-3/4'>
            <h1 className='mb-5 text-2xl font-medium text-black'>
              Application charts
            </h1>

            <div className='rounded-xl border-2 border-solid border-slate-300 p-5'>
              <Line
                data={dataGraph}
                updateMode='hide'
                height={'300px'}
                options={{ maintainAspectRatio: false }}
              />
            </div>
          </div>

          <div className='h-28'>
            <h1 className='mb-5 text-2xl font-medium text-black'>
              Upcoming Interviews
            </h1>
            <div className='h-full'>
              <InterviewCardDashboard />
              <InterviewCardDashboard />
            </div>
          </div>
        </div>

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

        <div className='my-14 !h-60 !w-full bg-[#f4f3ff]'>
          <div
            className='!relative flex h-full w-full '
            style={{
              position: 'relative',
            }}
          >
            <Wave
              className={
                'absolute left-0 top-0 z-10 !h-full !w-1/3 fill-white object-cover !opacity-20'
              }
            />
            <div className='flex w-full items-center justify-around'>
              <div className='flex w-full justify-around'>
                <h3 className='w-72  text-4xl font-medium leading-10 text-black'>
                  Recruit the best talent, post your vacancies now!
                </h3>
                <div className='w-1/2'>
                  <p className='mr-5 font-medium leading-8 text-slate-600'>
                    Post yout job vacancy including important information, such
                    as company name, available positions, required
                    qualifications, and job location. With this feature,
                    platform users can easily find job vacancies that match
                    their interests and qualifications.{' '}
                    <span className='font-bold'>Happy hiring!</span>
                  </p>
                  <Button className='mt-5 !flex !h-11 w-52 items-center justify-around rounded-xl !bg-[#8e82fe] !text-white'>
                    <p className='text-2xl'>+</p>
                    <p>Post a new job</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
