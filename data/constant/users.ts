export const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    avatar:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=500',
    lastMessage: 'Hey, how are you?',
    time: '2:30 PM',
    isActive: false,
    messages: [
      { id: 'm1', text: 'Hey, how are you?', sender: 'them', time: '8:45 PM' },
      { id: 'm2', text: 'I’m good, thanks!', sender: 'me', time: '8:46 PM' }
    ]
  },
  {
    id: '2',
    name: 'Sarah Smith',
    avatar:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=500',
    lastMessage: 'Can you check the report?',
    time: '1:15 PM',
    isActive: false,
    messages: [
      {
        id: 'm3',
        text: 'Can you check the report?',
        sender: 'them',
        time: '1:15 PM'
      },
      {
        id: 'm4',
        text: 'Sure, I will check it today.',
        sender: 'me',
        time: '1:16 PM'
      }
    ]
  },
  {
    id: '3',
    name: 'Mike Johnson',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500',
    lastMessage: 'See you tomorrow!',
    time: 'Yesterday',
    isActive: false,
    messages: [
      { id: 'm5', text: 'See you tomorrow!', sender: 'them', time: '6:45 PM' },
      { id: 'm6', text: 'Yep, see you!', sender: 'me', time: '6:46 PM' }
    ]
  }
];
