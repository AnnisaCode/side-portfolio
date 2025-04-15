export interface Project {
  title: string;
  description: string;
  emoji: string;
  url: string;
  behavior: 'new_tab' | 'modal';
}

export const projects: Project[] = [
  {
    title: 'Cashier App',
    description: 'A simple cashier system to keep your sales on track',
    emoji: '🧾',
    url: 'https://annisacode.github.io/Cashier/',
    behavior: 'new_tab'
  },
  {
    title: 'Collection Marker',
    description: 'Keep track of your books like a boss',
    emoji: '📚',
    url: 'https://annisacode.github.io/ReadList/',
    behavior: 'new_tab'
  },
  {
    title: 'To-Do List',
    description: 'Because remembering everything is hard',
    emoji: '✅',
    url: 'https://annisacode.github.io/todolist/',
    behavior: 'new_tab'
  },
  {
    title: 'Weather App',
    description: 'Real-time weather with extra cuteness',
    emoji: '🌤',
    url: 'https://annisacode.github.io/weatherapp/',
    behavior: 'modal'
  },
  {
    title: 'Calculator',
    description: 'Basic math, but cuter',
    emoji: '🧮',
    url: 'https://annisacode.github.io/calculator/',
    behavior: 'modal'
  },
  {
    title: 'Tic Tac Toe vs Bot',
    description: 'Beat the bot (if you can 😜)',
    emoji: '❌',
    url: 'https://annisacode.github.io/tictactor-vs-bot/',
    behavior: 'modal'
  },
  {
    title: 'Memory Match Game',
    description: 'Flip. Match. Win!',
    emoji: '🧠',
    url: 'https://annisacode.github.io/Memory-Match/',
    behavior: 'new_tab'
  },
  {
    title: 'Reminder App',
    description: 'Gentle nudges so you don\'t forget things',
    emoji: '⏰',
    url: 'https://annisacode.github.io/Reminder-App/',
    behavior: 'modal'
  },
  {
    title: 'CMS App',
    description: 'Organize your stuff like a pro (but cute)',
    emoji: '📋',
    url: 'https://annisacode.github.io/CMS-FrontEnd/',
    behavior: 'new_tab'
  }
];