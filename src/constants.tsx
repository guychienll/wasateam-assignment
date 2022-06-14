import type {IRoutes, IStatus, IStacks} from './types';

export const ROUTES = {
  Tabs: {
    name: 'Tabs',
    display: 'Home',
  },
  Home: {
    name: 'Home',
    display: 'Home',
  },
  PrivacyPolicy: {
    name: 'PrivacyPolicy',
    display: 'Privacy Policy',
  },
  Profile: {
    name: 'Profile',
    display: 'Profile',
  },
} as IRoutes;

export const STATUS = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  failed: 'failed',
} as IStatus;

export const Stacks = {
  HomeStack: {
    icon: 'home',
    name: 'Home',
  },
  ProfileStack: {
    icon: 'person',
    name: 'Profile',
  },
} as IStacks;
