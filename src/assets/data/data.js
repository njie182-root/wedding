export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Jeje',
            child: 'Putra ke 5',
            father: 'Atang',
            mother: 'Holis',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Icha',
            child: 'Putri ke 4',
            father: 'Iya Supiyatna',
            mother: 'Siti Rohani (Ibu Yoyoh)',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },

    time: {
        marriage: {
            year: '2025',
            month: 'Juni',
            date: '22',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Juni',
            date: '22',
            day: 'Minggu',
            hours: {
                start: '08.00',
                finish: 'Selesai'
            }
        },
        address: 'Pondok Abah, Jl. Cikopo Sel. Jl. Nagrog, Sukamahi, Kec. Megamendung, Kabupaten Bogor, Jawa Barat 16770'
    },

    link: {
        calendar: 'https://calendar.app.google/MEcqugcJe6zKiek28',
        map: 'https://maps.app.goo.gl/TnjwA5wA9MeDK2aV9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Lorem Ipsum',
            icon: './src/assets/images/bca.png',
            rekening: '12345678'
        },
        {
            id: 2,
            name: 'Ipsum Lorem',
            icon: './src/assets/images/bri.png',
            rekening: '12345678'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxRRawfeolk2CKyBVWrkzS92Jw-jXWB-KmJrwvuZX1UVB-m07zaUYQidm6-7o0eroQ0Sw/exec',

    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
