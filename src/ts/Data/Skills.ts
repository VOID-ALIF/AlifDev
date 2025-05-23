// Data for all Skills

import { SkillData, SkillCategory } from '../Classes/Elements/Skill'

export const Skills: SkillData[] = [
    // {
    //     name: 'Amazon Web Services',
    //     svg: 'aws',
    //     color: '#232F3E',
    //     category: SkillCategory.DevOps,
    // },
    // {
    //     name: 'Angular',
    //     svg: 'angular',
    //     color: '#DD0031',
    //     category: SkillCategory.Web | SkillCategory.Framework,
    // },
    // {
    //     name: 'C',
    //     svg: 'c',
    //     color: '#A8B9CC',
    //     category: SkillCategory.Programming,
    // },
    // {
    //     name: 'C++',
    //     svg: 'cplusplus',
    //     color: '#00599C',
    //     category: SkillCategory.Programming | SkillCategory.Server,
    // },
    // {
    //     name: 'C#',
    //     svg: 'csharp',
    //     color: '#9B4F97',
    //     category: SkillCategory.Programming | SkillCategory.Server,
    // },
    {
        name: 'CSS',
        svg: 'css',
        color: '#1572B6',
        category: SkillCategory.Web,
    },
    {
        name: 'Docker',
        svg: 'docker',
        color: '#2496ED',
        category: SkillCategory.DevOps,
    },
    // {
    //     name: '.NET Core/Framework',
    //     svg: 'dotnet-2',
    //     color: '#512BD4',
    //     category: SkillCategory.Programming | SkillCategory.Server | SkillCategory.Framework,
    // },
    {
        name: 'Express JS',
        svg: 'express',
        color: '#3D3D3D',
        category: SkillCategory.Server | SkillCategory.Framework,
    },
    {
        name: 'Figma',
        svg: 'figma-2',
        color: '#F24E1E',
        category: SkillCategory.Other,
    },
    // {
    //     name: 'Firebase',
    //     svg: 'firebase',
    //     color: '#FFCA28',
    //     category: SkillCategory.Database,
    // },
    {
        name: 'Git',
        svg: 'git',
        color: '#F05032',
        category: SkillCategory.Programming,
    },
    {
        name: 'GNU Bash',
        svg: 'bash',
        color: '#2B3539',
        category: SkillCategory.Scripting,
    },
    // {
    //     name: 'Go',
    //     svg: 'go',
    //     color: '#00ADD8',
    //     category: SkillCategory.Programming | SkillCategory.Server,
    // },
    // {
    //     name: 'Google Cloud Platform',
    //     svg: 'gcp-2',
    //     color: '#4285F4',
    //     category: SkillCategory.DevOps,
    // },
    {
        name: 'Gulp',
        svg: 'gulp-2',
        color: '#CF4647',
        category: SkillCategory.Web,
    },
    // {
    //     name: 'Heroku',
    //     svg: 'heroku-2',
    //     color: '#430098',
    //     category: SkillCategory.DevOps,
    // },
    {
        name: 'HTML',
        svg: 'html',
        color: '#E34F26',
        category: SkillCategory.Web,
    },
    {
        name: 'Java',
        svg: 'java',
        color: '#007699',
        category: SkillCategory.Programming | SkillCategory.Server,
    },
    {
        name: 'JavaScript',
        svg: 'javascript',
        color: '#F0DB4F',
        category: SkillCategory.Web | SkillCategory.Programming,
    },
    // {
    //     name: 'Jest',
    //     svg: 'jest',
    //     color: '#C21325',
    //     category: SkillCategory.Web,
    // },
    // {
    //     name: 'Kubernetes',
    //     svg: 'kubernetes',
    //     color: '#326CE5',
    //     category: SkillCategory.DevOps,
    // },
    // {
    //     name: 'Microsoft Azure',
    //     svg: 'azure-2',
    //     color: '#0078D4',
    //     category: SkillCategory.DevOps,
    // },
    // {
    //     name: 'Mocha',
    //     svg: 'mocha',
    //     color: '#8D6748',
    //     category: SkillCategory.Web,
    // },
    {
        name: 'MongoDB',
        svg: 'mongodb',
        color: '#47A248',
        category: SkillCategory.Database,
    },
    {
        name: 'Node.js',
        svg: 'nodejs',
        color: '#339933',
        category: SkillCategory.Programming | SkillCategory.Server,
    },
    {
        name: 'PostgreSQL',
        svg: 'postgresql-2',
        color: '#4169E1',
        category: SkillCategory.Database,
    },
    {
        name: 'Python',
        svg: 'python',
        color: '#3776AB',
        category: SkillCategory.Programming | SkillCategory.Scripting | SkillCategory.Server,
    },
    {
        name: 'React',
        svg: 'react',
        color: '#61DAFB',
        category: SkillCategory.Web | SkillCategory.Framework,
    },
    {
        name: 'Redux',
        svg: 'redux',
        color: '#764ABC',
        category: SkillCategory.Web,
    },
    // {
    //     name: 'R Language',
    //     svg: 'rlang',
    //     color: '#276DC3',
    //     category: SkillCategory.Programming,
    // },
    // {
    //     name: 'Rust',
    //     svg: 'rust',
    //     color: '#000000',
    //     category: SkillCategory.Programming,
    // },
    {
        name: 'SASS/SCSS',
        svg: 'sass',
        color: '#CC6699',
        category: SkillCategory.Web,
    },
    // {
    //     name: 'Spring',
    //     svg: 'spring',
    //     color: '#6DB33F',
    //     category: SkillCategory.Framework | SkillCategory.Server,
    // },
    {
        name: 'SQL',
        svg: 'sql',
        color: '#F89700',
        category: SkillCategory.Database,
    },
    {
        name: 'TypeScript',
        svg: 'typescript-2',
        color: '#3178C6',
        category: SkillCategory.Web | SkillCategory.Programming,
    },
    {
        name: 'Vue.js',
        svg: 'vue',
        color: '#4FC08D',
        category: SkillCategory.Web | SkillCategory.Framework,
    }
];

export const NonSkills: SkillData[] = [
    {
        name: 'Apple',
        svg: 'apple',
        color: '#000000',
        category: SkillCategory.Other,
    },
    {
        name: 'Bluetooth',
        svg: 'bluetooth',
        color: '#0082FC',
        category: SkillCategory.Other,
    },
    // {
    //     name: 'Chase',
    //     svg: 'chase',
    //     color: '#117ACA',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'Chick-fil-A',
    //     svg: 'chickfila',
    //     color: '#DD0031',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'Coca-Cola',
    //     svg: 'cocacola',
    //     color: '#D00013',
    //     category: SkillCategory.Other,
    // },
    {
        name: 'Dart',
        svg: 'dart',
        color: '#0175C2',
        category: SkillCategory.Programming,
    },
    {
        name: 'DeviantArt',
        svg: 'deviantart',
        color: '#05CC47',
        category: SkillCategory.Other,
    },
    {
        name: 'Discord',
        svg: 'discord',
        color: '#5865F2',
        category: SkillCategory.Other,
    },
    {
        name: 'ESLint',
        svg: 'eslint',
        color: '#4B32C3',
        category: SkillCategory.Web,
    },
    {
        name: 'Facebook',
        svg: 'facebook',
        color: '#0866FF',
        category: SkillCategory.Other,
    },
    {
        name: 'Firefox',
        svg: 'firefox',
        color: '#FF7139',
        category: SkillCategory.Other,
    },
    {
        name: 'Flask',
        svg: 'flask',
        color: '#000000',
        category: SkillCategory.Web | SkillCategory.Framework,
    },
    // {
    //     name: 'Flutter',
    //     svg: 'flutter',
    //     color: '#02569B',
    //     category: SkillCategory.Framework,
    // },
    {
        name: 'GitHub',
        svg: 'github',
        color: '#181717',
        category: SkillCategory.Other,
    },
    {
        name: 'Gmail',
        svg: 'gmail',
        color: '#EA4335',
        category: SkillCategory.Other,
    },
    {
        name: 'Google Calendar',
        svg: 'googlecalendar',
        color: '#4285F4',
        category: SkillCategory.Other,
    },
    {
        name: 'Google Chrome',
        svg: 'chrome',
        color: '#4285F4',
        category: SkillCategory.Other,
    },
    // {
    //     name: 'Haskell',
    //     svg: 'haskell',
    //     color: '#5D4F85',
    //     category: SkillCategory.Programming,
    // },
    {
        name: 'Honda',
        svg: 'honda',
        color: '#E40521',
        category: SkillCategory.Other,
    },
    {
        name: 'Instagram',
        svg: 'instagram',
        color: '#E4405F',
        category: SkillCategory.Other,
    },
    {
        name: 'Internet Explorer',
        svg: 'iexplore',
        color: '#0076D6',
        category: SkillCategory.Other,
    },
    {
        name: 'jQuery',
        svg: 'jquery',
        color: '#0769AD',
        category: SkillCategory.Web,
    },
    // {
    //     name: 'Kotlin',
    //     svg: 'kotlin',
    //     color: '#7F52FF',
    //     category: SkillCategory.Programming,
    // },
    // {
    //     name: 'Markdown',
    //     svg: 'markdown',
    //     color: '#000000',
    //     category: SkillCategory.Programming,
    // },
    // {
    //     name: 'McDonald\'s',
    //     svg: 'mcdonalds',
    //     color: '#FBC817',
    //     category: SkillCategory.Other,
    // },
    {
        name: 'Microsoft Edge',
        svg: 'edge',
        color: '#0078D7',
        category: SkillCategory.Other,
    },
    {
        name: 'MySQL',
        svg: 'mysql',
        color: '#4479A1',
        category: SkillCategory.Database,
    },
    // {
    //     name: 'Nike',
    //     svg: 'nike',
    //     color: '#111111',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'Nintendo 3DS',
    //     svg: 'nintendo3ds',
    //     color: '#D12228',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'Nintendo GameCube',
    //     svg: 'nintendogamecube',
    //     color: '#6A5FBB',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'Nintendo Switch',
    //     svg: 'nintendoswitch',
    //     color: '#E60012',
    //     category: SkillCategory.Other,
    // },
    {
        name: 'npm',
        svg: 'npm',
        color: '#CB3837',
        category: SkillCategory.Other,
    },
    // {
    //     name: 'OBS Studio',
    //     svg: 'obs',
    //     color: '#302E31',
    //     category: SkillCategory.Other,
    // },
    {
        name: 'OpenSSL',
        svg: 'openssl',
        color: '#721412',
        category: SkillCategory.Framework,
    },
    // {
    //     name: 'Perl',
    //     svg: 'perl',
    //     color: '#39457E',
    //     category: SkillCategory.Scripting,
    // },
    {
        name: 'PHP',
        svg: 'php',
        color: '#777BB4',
        category: SkillCategory.Web,
    },
    {
        name: 'Postman',
        svg: 'postman',
        color: '#FF6C37',
        category: SkillCategory.Other,
    },
    // {
    //     name: 'Racket',
    //     svg: 'racket',
    //     color: '#9F1D20',
    //     category: SkillCategory.Programming,
    // },
    // {
    //     name: 'Sequelize',
    //     svg: 'sequelize',
    //     color: '#52B0E7',
    //     category: SkillCategory.Framework,
    // },
    {
        name: 'Spotify',
        svg: 'spotify',
        color: '#1DB954',
        category: SkillCategory.Other,
    },
    {
        name: 'SQLite',
        svg: 'sqlite',
        color: '#003B57',
        category: SkillCategory.Database,
    },
    {
        name: 'Subaru',
        svg: 'subaru',
        color: '#013C74',
        category: SkillCategory.Other,
    },
    // {
    //     name: 'SVG',
    //     svg: 'svg',
    //     color: '#FFB13B',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'Taco Bell',
    //     svg: 'tacobell',
    //     color: '#38096C',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'Target',
    //     svg: 'target',
    //     color: '#CC0000',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'The North Face',
    //     svg: 'thenorthface',
    //     color: '#000000',
    //     category: SkillCategory.Other,
    // },
    {
        name: 'Twitch',
        svg: 'twitch',
        color: '#9146FF',
        category: SkillCategory.Other,
    },
    {
        name: 'Ubuntu',
        svg: 'ubuntu',
        color: '#E95420',
        category: SkillCategory.Other,
    },
    // {
    //     name: 'Under Armour',
    //     svg: 'underarmour',
    //     color: '#1D1D1D',
    //     category: SkillCategory.Other,
    // },
    // {
    //     name: 'Verizon',
    //     svg: 'verizon',
    //     color: '#CD040B',
    //     category: SkillCategory.Other,
    // },
    {
        name: 'Visual Studio',
        svg: 'visualstudio',
        color: '#5C2D91',
        category: SkillCategory.Other,
    },
    {
        name: 'Visual Studio Code',
        svg: 'visualstudiocode',
        color: '#007ACC',
        category: SkillCategory.Other,
    },
    // {
    //     name: 'WebAssembly',
    //     svg: 'webassembly',
    //     color: '#654FF0',
    //     category: SkillCategory.Web,
    // },
    // {
    //     name: 'Wii',
    //     svg: 'wii',
    //     color: '#8B8B8B',
    //     category: SkillCategory.Other,
    // },
    {
        name: 'Windows',
        svg: 'windows',
        color: '#0078D4',
        category: SkillCategory.Other,
    },
    {
        name: 'YouTube',
        svg: 'youtube',
        color: '#FF0000',
        category: SkillCategory.Other,
    }
];