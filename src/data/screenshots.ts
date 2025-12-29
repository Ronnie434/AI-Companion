export interface Screenshot {
  id: string;
  src: {
    dark: string;
    light: string;
  };
  alt: string;
  label: string;
  description: string;
}

export const screenshots: Screenshot[] = [
  {
    id: 'home',
    src: {
      dark: '/screenshots/dark/home-dark.png',
      light: '/screenshots/light/home-light.png',
    },
    alt: 'Home screen with AI assistant greeting',
    label: 'Home',
    description: 'Your AI assistant, ready when you are',
  },
  {
    id: 'chat',
    src: {
      dark: '/screenshots/dark/chat-dark.png',
      light: '/screenshots/light/chat-light.png',
    },
    alt: 'Chat interface with AI assistant creating reminders',
    label: 'Capture',
    description: 'Tell it anything - tasks, reminders, thoughts',
  },
  {
    id: 'daily-brief',
    src: {
      dark: '/screenshots/dark/daily-brief-dark.png',
      light: '/screenshots/light/daily-brief-light.png',
    },
    alt: 'Daily Brief view with Today, Tomorrow, and upcoming tasks',
    label: 'Daily Brief',
    description: 'See what matters today at a glance',
  },
  {
    id: 'upcoming',
    src: {
      dark: '/screenshots/dark/upcoming-dark.png',
      light: '/screenshots/light/upcoming-light.png',
    },
    alt: 'Upcoming view with calendar-style reminder list',
    label: 'Upcoming',
    description: 'Stay ahead of what is coming',
  },
  {
    id: 'settings',
    src: {
      dark: '/screenshots/dark/settings-dark.png',
      light: '/screenshots/light/settings-light.png',
    },
    alt: 'Settings page with customization options',
    label: 'Settings',
    description: 'Personalize your experience',
  },
];