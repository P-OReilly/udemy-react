import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     amount: '109500',
//     description: 'Rent',
//     note: '',
//     createdAt: '98098098699'
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses').on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     amount: '5900',
//     description: 'Phone bill',
//     note: '',
//     createdAt: '98098098699'
// });

// database.ref('expenses').push({
//     amount: '1200',
//     description: 'Food',
//     note: '',
//     createdAt: '98098098699'
// });

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Python, Angular'
// });

// const firebaseNotes = {
//     notes: {
//         12: {
//             title: 'First note',
//             body: 'Note body'
//         },
//         761ase: {
//             title: 'Another note',
//             body: 'This is my note body'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'Note body'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note body'
// }];

// database.ref('notes').set(firebaseNotes);
// database.ref('job/company').set('Amazon');

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     const job = snapshot.val();
//     const company = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// }, (e) => {
//     console.log('ERROR fetching data', e);
// });

// setTimeout(() => {
//     database.ref('job/company').set('Google');
// }, 3500);
// setTimeout(() => {
//     database.ref('job/company').set('Google');
// }, 4000);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// database.ref().set({
//     name: 'Andrew',
//     age: 27,
//     isSingle: false,
//     stressLevel: 6,
//     job: {
//         title: 'Software dev',
//         company: 'google'
//     },
//     location: {
//         city: 'Blah',
//         country: 'United  States'
//     }
// }).then(() => {
//     console.log('Data saved');
// }).catch((e) => {
//     console.log('This failed.', e)
// });

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data removed');
//     }).catch(() => {
//         console.log('This failed.', e)
//     });

// database.ref().update({
//     'location/city': 'Seattle',
//     'job/company': 'amazon',
//     stressLevel: 9,
//     age: 30
// });