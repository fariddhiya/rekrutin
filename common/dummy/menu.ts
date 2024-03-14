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
    isActive: true,
  },
  {
    menu: 'Job',
    icon: JobIco,
    isActive: false,
  },
  {
    menu: 'Candidates',
    icon: CandidateIco,
    isActive: false,
  },
  {
    menu: 'Calendar',
    icon: CalendarIco,
    isActive: false,
  },
  {
    menu: 'Message',
    icon: MessageIco,
    isActive: false,
  },
  {
    menu: 'Setting',
    icon: SettingIco,
    isActive: false,
  },
  {
    menu: 'Help Center',
    icon: CustomerSupportIco,
    isActive: false,
  },
];

export { menu };
