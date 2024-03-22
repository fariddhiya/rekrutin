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

export { menu };
