export interface Project {
  title: string;
  description: string;
  techs: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: 'TQ',
    description:
      'A Go-based task queue system that enables asynchronous processing of background jobs. It provides a robust foundation for handling time-consuming operations outside of the main application flow, improving responsiveness and enabling horizontal scaling of workers.',
    techs: ['Go', 'Redis', 'Concurrency'],
    link: 'https://github.com/Cakra17/tq',
  },
  {
    title: 'Media Social API',
    description:
      'A backend service in Go providing core API endpoints for a social platform. Designed to be simple, modular, and ready for extension.',
    techs: ['Go', 'PostgreSQL', 'JWT'],
    link: 'https://github.com/Cakra17/social',
  },
  {
    title: 'IMPHNEN',
    description:
      'A platform that helps Indonesian UMKM automate financial record-keeping through AI-powered receipt scanning and streamline order management via a Telegram bot integration.',
    techs: ['Go', 'PostgreSQL', 'Python', 'Kolosal AI', 'Svelte', 'TS'],
    link: 'https://github.com/Cakra17/IMPHNEN',
  },
  {
    title: 'Schemazz',
    description:
      'An interactive tool that lets developers and DBAs visualize database structures by converting SQL queries into clear, readable ERD diagrams. A fast, intuitive way to understand schema design and relationships.',
    techs: ['React', 'TS', 'Tailwind'],
    link: 'https://github.com/Cakra17/Schemazz',
  },
  {
    title: 'Paku',
    description:
      'PAKU (Presensi Akurat Klinik Asih Pratama Asih Usadha) is a mobile app to streamline attendance management and personnel administration for medical staff and employees at clinical healthcare facilities.',
    techs: ['Express', 'MySQL', 'React', 'Kotlin'],
    link: 'https://github.com/orgs/Capstone-Project-PAKU/repositories',
  },
];
