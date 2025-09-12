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
        description: `業務管理アプリ。
        スケジュール・取引先・外注先の管理が可能。`,
        url: '',
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
        description: '匿名で投稿できるスレッド式掲示板。',
        url: 'https://genbanote.vercel.app/', // 仮
        languages: ['Next.js', 'Firebase', 'TypeScript', 'CSS'],
    },
    // {
    //     id: 'aikanojo-shop',
    //     title: 'AIかのじょ',
    //     category: 'AIkanojo',
    //     thumb: '/images/aigf.png',
    //     image: '/images/aigf01.png',
    //     description: 'AIで生成した女の子達のオリジナルグッズの架空の通販サイト。',
    //     url: '',
    //     languages: ['Next.js', 'TypeScript', 'CSS'],
    // },
    {
        id: 'amy-comic',
        title: 'エイミーコミック',
        category: 'AmyComic',
        thumb: '/images/amy-comic.jpeg',
        image: '/images/amy-comic01.jpeg',
        description: '一次創作メインの漫画サイト。',
        url: 'https://www.amy-comic.com/',
        languages: ['Next.js', 'Cloundinary', 'TypeScript', 'CSS'],
    },
];