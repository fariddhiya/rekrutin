import Header from '../components/header';
import Layout from '../components/layout';
import { NavigationBar } from '../components/navigation-bar';
import SearchBar from '../components/search-bar';

const DashboardPage = () => {
  return (
    <Layout>
      <div>
        <div>
          <h3>Jobs</h3>
          <p>20 jobs</p>
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
