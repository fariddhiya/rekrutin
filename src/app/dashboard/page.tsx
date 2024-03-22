import Header from '../components/header';
import Layout from '../components/layout';
import { NavigationBar } from '../components/navigation-bar';
import SearchBar from '../components/search-bar';
import HeaderDashboard from './_component/headerDashboard';
import SummaryCard from './_component/summaryCard';

const DashboardPage = () => {
  console.log();
  return (
    <Layout>
      <HeaderDashboard></HeaderDashboard>
      <div className='flex w-4/5'>
        <SummaryCard active />
        <div className='mx-6 !h-auto w-0.5 bg-slate-300' />
        <SummaryCard active={false} />
        <div className='mx-6 !h-auto w-0.5 bg-slate-300' />
        <SummaryCard active={false} />
        <div className='mx-6 !h-auto w-0.5 bg-slate-300' />
        <SummaryCard active={false} />
      </div>
      <div className='my-7 !h-[1px] !w-4/5 bg-slate-300' />
    </Layout>
  );
};

export default DashboardPage;
