let booksInit = [
    {
        isbn: '9785389128996',
        name: 'Этюд в багровых тонах',
        author_id: 1,
        image: 'https://www.bookvoed.ru/files/1836/52/18/77/3.jpeg',
        description: 'Английский врач и писатель сэр Артур Конан Дойл известен всему миру как непревзойденный мастер детективного жанра, автор множества произведений о гениальном сыщике Шерлоке Холмсе и его верном друге докторе Ватсоне.',
        tags: '',
        category: 'Детективный роман',
        year: 1887,
    },
    {
        isbn: '9785001086208',
        name: 'Знак четырёх',
        author_id: 1,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/The_Sign_of_Four_cover_1892.jpg/274px-The_Sign_of_Four_cover_1892.jpg',
        description: 'Английский врач и писатель сэр Артур Конан Дойл известен всему миру как непревзойденный мастер детективного жанра, автор множества произведений о гениальном сыщике Шерлоке Холмсе и его верном друге докторе Ватсоне.',
        tags: '',
        category: 'Детективный роман',
        year: 1890,
    },
    {
        isbn: '9785389013643',
        name: 'Собачье сердце',
        author_id: 5,
        image: '',
        description: '',
        tags: '',
        category: 'Повесть',
        year: 1925,
    },
    {
        isbn: '9785041072780',
        name: 'Мастер и Маргарита',
        author_id: 5,
        image: '',
        description: '',
        tags: '',
        category: 'Роман',
        year: 1940,
    },
    {
        isbn: '9785926834700',
        name: 'Евгений Онегин',
        author_id: 3,
        image: '',
        description: '',
        tags: '',
        category: 'Роман в стихах',
        year: 1830,
    },
    {
        isbn: '9785389183377',
        name: 'Руслан и Людмила',
        author_id: 3,
        image: '',
        description: '',
        tags: '',
        category: 'Сказка',
        year: 1820,
    },

];


let booksLoaded = [];
let booksLoadedJson = localStorage.getItem('books');
if (!booksLoadedJson) {
    localStorage.setItem('books', JSON.stringify(booksInit))
    booksLoaded = booksInit;
} else {
    booksLoaded = JSON.parse(booksLoadedJson);
}

const booksSave = (books) => {
    localStorage.setItem('books', JSON.stringify(books))
}

export {booksLoaded, booksSave};