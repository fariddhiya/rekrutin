import {
  CalendarIco,
  CandidateIco,
  CustomerSupportIco,
  DashboardIco,
  JobIco,
  LogoutIco,
  MessageIco,
  SettingIco,
} from '../assets/images';

const menu = [
  {
    menu: 'Dashboard',
    icon: DashboardIco,
    slug: 'dashboard',
  },
  {
    menu: 'Job',
    icon: JobIco,
    slug: 'job',
  },
  {
    menu: 'Candidates',
    icon: CandidateIco,
    slug: 'candidate',
  },
  {
    menu: 'Calendar',
    icon: CalendarIco,
    slug: 'calendar',
  },
  {
    menu: 'Message',
    icon: MessageIco,
    slug: 'message',
  },
  {
    menu: 'Setting',
    icon: SettingIco,
    slug: 'setting',
  },
  {
    menu: 'Help Center',
    icon: CustomerSupportIco,
    slug: 'help-center',
  },
];

const dashboardMetric = [
  {
    name: 'Total applicants',
    amount: 145,
    type: 'increase',
    changeAmount: 20,
  },
  {
    name: 'Current openings',
    amount: 4,
    type: 'increase',
    changeAmount: 7,
  },
  {
    name: 'Hired',
    amount: 36,
    type: 'increase',
    changeAmount: 54,
  },
  {
    name: 'Total viewer',
    amount: 704,
    type: 'increase',
    changeAmount: 32,
  },
];

const dataGraph: any = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Dataset of Months',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#8e82fe',
      borderColor: '#8e82fe',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56],
    },
  ],
};

const currentOpeningData: any = [
  {
    name: 'Human Resource',
    company: 'Rundofase',
    tags: ['WFO', 'Fulltime', '1-3 years exp.'],
    applicants: 20,
  },
  {
    name: 'Internet Security Assistant',
    company: 'Soylent Corp',
    tags: ['WFA', 'Fulltime', '5 years exp.'],
    applicants: 53,
  },
  {
    name: 'Python Developer',
    company: 'Wayne Enterprises',
    tags: ['WFH', 'Freelance', '0-1 years exp.'],
    applicants: 17,
  },
];

export { menu, dashboardMetric, dataGraph, currentOpeningData };
