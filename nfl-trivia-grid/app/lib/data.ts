// 'use client';

// interface Athlete {
//     '$ref': string;
// }

// interface ApiResponse {
//     count: number;
//     pageIndex: number;
//     pageSize: number;
//     pageCount: number;
//     items: Athlete[];
// }

// const athletes = [];

// const getPlayers = async() => {
//     await fetch('/api/players', {
//         method: 'GET'
//     })
//     .then((data: ApiResponse) => {
//         const athletes: Athlete[] = data.items;

//         athletes.forEach((athlete: Athlete) => {
//             console.log(athlete.$ref)
//         })
//     })
// }
