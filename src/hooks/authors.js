let authorsInit = [
    {
        id: 1,
        name: 'Артур Конан Дойль',
        birth_date: '22.05.1859',
        country: 'Великобритания',
    },
    {
        id: 3,
        name: 'Александр Пушкин',
        birth_date: '26.05.1799',
        country: 'Россия',
    },
    {
        id: 5,
        name: 'Михаил Булгаков',
        birth_date: '03.05.1891',
        country: 'Россия',
    },
    {
        id: 7,
        name: 'Рю Мураками',
        birth_date: '19.02.1952',
        country: 'Япония',
    },
    {
        id: 9,
        name: 'Джоан Роулинг',
        birth_date: '31.07.1965',
        country: 'Великобритания',
    },
];

let authorsLoaded = [];
let authorsLoadedJson = localStorage.getItem('authors');
if (!authorsLoadedJson) {
    localStorage.setItem('authors', JSON.stringify(authorsInit))
    authorsLoaded = authorsInit;
} else {
    authorsLoaded = JSON.parse(authorsLoadedJson);
}

const authorsSave = (authors) => {
    localStorage.setItem('authors', JSON.stringify(authors))
}

export {authorsLoaded, authorsSave};