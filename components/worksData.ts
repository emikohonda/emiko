export type WorkItem = {
    id: string;
    title: string;
    category: 'GenbaNote' | 'Nansore' | 'AIkanojo' | 'AmyComic';
    thumb: string;
    image: string;
    description: string;
    url: string;
    languages: string[];
    gallery?: string[];
};

export const worksData: WorkItem[] = [
    {
        id: 'genbanote',
        title: 'GenbaNote',
        category: 'GenbaNote',
        thumb: '/images/genbanote.png',
        image: '/images/genbanote01.png',
        description: '建設業向け業務管理アプリ。スケジュール・請求書管理が可能。',
        url: '', // 仮
        languages: ['Next.js', 'Firebase', 'TypeScript', 'CSS'],
        gallery: [
            '/images/genbanote01.png',
            '/images/genbanote02.png',
            '/images/genbanote03.png',
        ],
    },
    {
        id: 'nansore-bbs',
        title: 'なんそれ掲示板',
        category: 'Nansore',
        thumb: '/images/nansore.png',
        image: '/images/nansore01.png',
        description: '匿名で書き込めるBBS風掲示板。Firebase + Next.jsで構築。',
        url: 'https://nansore.vercel.app/', // 仮
        languages: ['Next.js', 'Firebase', 'TypeScript', 'CSS'],
    },
    {
        id: 'aikanojo-shop',
        title: 'AIかのじょ 通販',
        category: 'AIkanojo',
        thumb: '/images/aigf.png',
        image: '/images/aigf01.png',
        description: 'オリジナルグッズ通販サイト。シャボン玉背景付き。',
        url: '', // 仮
        languages: ['Next.js', 'TypeScript', 'CSS'],
    },
    {
        id: 'amy-comic',
        title: 'エイミーコミック',
        category: 'AmyComic',
        thumb: '/images/amy-comic.jpeg',
        image: '/images/amy-comic01.jpeg',
        description: '一次創作メインのオリジナル漫画サイトです。Next.jsを使用しています。',
        url: 'https://www.amy-comic.com/',
        languages: ['Next.js', 'Cloundinary', 'TypeScript', 'CSS'],
    },
];