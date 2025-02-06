export const homeTrailer = [
  {
    id: '1',
    categories: ['New', 'Detective', 'Crime'],
    video:
      'https://videos.pexels.com/video-files/6348360/6348360-sd_360_640_30fps.mp4',
    title: 'Secret Billionaire',
    caption:
      'To escape a politically motivated arranged marriage, a privileged heir Lucas must stand his ground ',
  },
  {
    id: '2',
    categories: ['Documentary', 'Romance', 'Thriller'],
    video:
      'https://videos.pexels.com/video-files/3629511/3629511-hd_720_900_24fps.mp4',
    title: 'Secret Billionaire',
    caption:
      'To escape a politically motivated arranged marriage, a privileged heir Lucas must stand his ground ',
  },
  {
    id: '3',
    categories: ['New', 'Comedy', 'Crime'],
    video:
      'https://videos.pexels.com/video-files/7297870/7297870-sd_360_640_30fps.mp4',
    title: 'Secret Billionaire',
    caption:
      'To escape a politically motivated arranged marriage, a privileged heir Lucas must stand his ground ',
  },
  {
    id: '4',
    categories: ['Old-Skool', 'Horror', 'Sci-Fi'],
    video:
      'https://videos.pexels.com/video-files/6924608/6924608-sd_360_640_24fps.mp4',
    title: 'Secret Billionaire',
    caption:
      'To escape a politically motivated arranged marriage, a privileged heir Lucas must stand his ground ',
  },
  {
    id: '5',
    categories: ['Drama', 'Detective', 'Comedy'],
    video:
      'https://videos.pexels.com/video-files/4448895/4448895-sd_360_640_30fps.mp4',
    title: 'Secret Billionaire',
    caption:
      'To escape a politically motivated arranged marriage, a privileged heir Lucas must stand his ground ',
  },
];

export const sectionData = [
  {
    id: '1',
    title: 'Better call saul',
    categories: ['Drama', 'Detective'],
    image:
      'https://images.pexels.com/photos/2773557/pexels-photo-2773557.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '2',
    title: 'No Good Deep',
    categories: ['Drama', 'Detective'],
    image:
      'https://images.pexels.com/photos/30538609/pexels-photo-30538609/free-photo-of-cinema-paris-at-night-in-berlin-germany.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '3',
    title: 'Black Doves',
    categories: ['Drama', 'Detective'],
    image:
      'https://images.pexels.com/photos/3807702/pexels-photo-3807702.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '4',
    title: 'Landman',
    categories: ['Drama', 'Detective'],
    image:
      'https://images.pexels.com/photos/29717200/pexels-photo-29717200/free-photo-of-young-woman-in-yellow-hijab-portrait.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '5',
    title: 'The Boys',
    categories: ['Drama', 'Detective'],
    image:
      'https://images.pexels.com/photos/14756354/pexels-photo-14756354.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '6',
    title: 'House',
    categories: ['Drama', 'Detective'],
    image:
      'https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export interface IHomeCard {
  id: string;
  categories: string[];
  title: string;
  image: string;
}
export interface IOnboarding {
  id: string;
  categories: string[];
  video: string;
  title: string;
  caption: string;
}
