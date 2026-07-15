export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Fullstack Developer',
    company: 'MSIB Dicoding Batch 5',
    period: 'Aug 2023 — Dec 2023',
    description:
      'Designed and maintained backend services for a cooking recipe app.',
    highlights: [
      'Built REST APIs using JS',
      'Improved system reliability',
      'Crawled cooking recipe data',
    ],
    tech: ['JS', 'MongoDB', 'Express', 'Cloudinary'],
  },
];
