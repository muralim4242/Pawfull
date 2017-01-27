var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyC5GHuTljV8rVVtQK0ve7CUQX_WFOKLj9Q",
    authDomain: "pawfull-144021.firebaseapp.com",
    databaseURL: "https://pawfull-144021.firebaseio.com",
    storageBucket: "pawfull-144021.appspot.com",
    messagingSenderId: "2123971622"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// vets={
//
// }

// firebaseRef.set({
//     app: {
//         name: 'Todo App',
//         version: '1.0.0'
//     },
//     isRunning: true,
//     userInfo: {},
//     userBookmarks: {},
//     blogs: {},
//     vets: {},
//     services: {
//         hospital: {
//
//         },
//         labs: {
//
//         },
//         pharamacy: {
//
//         },
//         grooming: {
//
//         },
//         daycare: {
//
//         },
//         boarding: {
//
//         },
//         outing: {
//
//         }
//     },
//     adaption: {
//         dogs: {
//
//         },
//         cats: {
//
//         }
//     }
// });

// var vets = firebaseRef.child('vets');
//
// var newVetKey = vets.push().key;
//
// // console.log(newVetKey);
// var vet = {
//     name: "murali",
//     designation: "consultant",
//     qualification: "mbbs",
//     hospitals: {
//         narayana: true,
//         colambia: true
//     },
//     address: {
//         doorNo: "#84",
//         floor: "1st",
//         street: "kote bheedi 4th",
//         area: "varthu",
//         city: "bangalore",
//         state: "karnataka",
//         nationlity: "indian",
//         pincode: "560087",
//         landmark: "near lakshmi gym",
//         direction: {
//             lat: "56",
//             lan: "60"
//         }
//     },
//     experience: "5 years",
//     mobile:"7795929033",
//     email:"muralim@gmail.com"
// };
//
// narayanaData=
 var update={};
// update[`/${newVetKey}`]=vet;
// vets.update(update);


//
// var todosRef = firebaseRef.child('todos');
//
// todosRef.on('child_added', (snapshot) => {
//   console.log('New todo added', snapshot.key, snapshot.val());
// });
//
// todosRef.push({
//   text: 'Todo 1'
// });
//
// todosRef.push({
//   text: 'Todo 2'
// });
// -KarnBllK558E-GtNc7b
// var vetHospitalInfo=firebaseRef.child('vetsHospitalInfo');
// var vetHospital={
//     active:true,
//     charge: "500 rs",
//     mon: {
//         1: {
//             start: "8 Am",
//             end: "3 Pm"
//         },
//         2: {
//             start: "8 Am",
//             end: "3 Pm"
//         }
//     },
//     tues: {
//         1: {
//             start: "8 Am",
//             end: "3 Pm"
//         }
//     },
//     wed: {
//         1: {
//             start: "8 Am",
//             end: "3 Pm"
//         }
//     },
//     thur: {
//         1: {
//             start: "8 Am",
//             end: "3 Pm"
//         }
//     },
//     fri: {
//         1: {
//             start: "8 Am",
//             end: "3 Pm"
//         }
//     },
//     sat: {
//         1: {
//             start: "8 Am",
//             end: "3 Pm"
//         }
//     },
//     sun: {
//         1: {
//             start: "8 Am",
//             end: "3 Pm"
//         }
//     }
//   }
// update[`/-KarnBllK558E-GtNc7b/colambia`]=vetHospital;
// vetHospitalInfo.update(update);

// var services=firebaseRef.child('services');
// update['/boarding/mediplus']={
//   active:true,
//   name:"mediplus",
//   address: {
//                 doorNo: "#84",
//                 floor: "1st",
//                 street: "kote bheedi 4th",
//                 area: "varthu",
//                 city: "bangalore",
//                 state: "karnataka",
//                 nationlity: "indian",
//                 pincode: "560087",
//                 landmark: "near lakshmi gym",
//                 direction: {
//                     lat: "56",
//                     lan: "60"
//                   }
//           },
//   timings:  {
//       mon: {
//           1: {
//               start: "8 Am",
//               end: "3 Pm"
//           },
//           2: {
//               start: "8 Am",
//               end: "3 Pm"
//           }
//       },
//       tues: {
//           1: {
//               start: "8 Am",
//               end: "3 Pm"
//           }
//       },
//       wed: {
//           1: {
//               start: "8 Am",
//               end: "3 Pm"
//           }
//       },
//       thur: {
//           1: {
//               start: "8 Am",
//               end: "3 Pm"
//           }
//       },
//       fri: {
//           1: {
//               start: "8 Am",
//               end: "3 Pm"
//           }
//       },
//       sat: {
//           1: {
//               start: "8 Am",
//               end: "3 Pm"
//           }
//       },
//       sun: {
//           1: {
//               start: "8 Am",
//               end: "3 Pm"
//           }
//       }
//     },
//   phoneNumber:"7795929033",
//   email:"asdas@sdas.com",
//   website:"www.narayan.com",
//   facilities:[{name:"scanning",cost:100},{name:"xray",cost:100}]
// }
// services.update(update);

// var services=firebaseRef.child('reviewAndRatings');
// update['day care/mediplus']=[{
//     reviewTitle:"good one",
//     description:"sdfjkafdjdskjfhjasdhfhaskdjhfsdf",
//     rating:4,
//     timestamp:11231241442,
//     userId:123
// }];
// update['grooming/mediplus']=[{
//     reviewTitle:"good one",
//     description:"sdfjkafdjdskjfhjasdhfhaskdjhfsdf",
//     rating:4,
//     timestamp:11231241442,
//     userId:123
// }];
//
// update['hospitals/mediplus']=[{
//     reviewTitle:"good one",
//     description:"sdfjkafdjdskjfhjasdhfhaskdjhfsdf",
//     rating:4,
//     timestamp:11231241442,
//     userId:123
// }];
//
// update['labs/mediplus']=[{
//     reviewTitle:"good one",
//     description:"sdfjkafdjdskjfhjasdhfhaskdjhfsdf",
//     rating:4,
//     timestamp:11231241442,
//     userId:123
// }];
//
// update['outing/mediplus']=[{
//     reviewTitle:"good one",
//     description:"sdfjkafdjdskjfhjasdhfhaskdjhfsdf",
//     rating:4,
//     timestamp:11231241442,
//     userId:123
// }];
// update['pharmacy/mediplus']=[{
//     reviewTitle:"good one",
//     description:"sdfjkafdjdskjfhjasdhfhaskdjhfsdf",
//     rating:4,
//     timestamp:11231241442,
//     userId:123
// }];
//
// update['-KarnBllK558E-GtNc7b']=[{
//     reviewTitle:"good one",
//     description:"sdfjkafdjdskjfhjasdhfhaskdjhfsdf",
//     rating:4,
//     timestamp:11231241442,
//     userId:123
// }];
// update['-KarnSi8CIFayIMIoXc-']=[{
//     reviewTitle:"good one",
//     description:"sdfjkafdjdskjfhjasdhfhaskdjhfsdf",
//     rating:4,
//     timestamp:11231241442,
//     userId:123
// }];
//
// services.update(update);
// var userInfo=firebaseRef.child('userInfo');
// var services=firebaseRef.child('adoption');
// var update1={};
// update1['/'+userInfo.push().key]={
//   mobile:7795929033,
//   address: {
//                 doorNo: "#84",
//                 floor: "1st",
//                 street: "kote bheedi 4th",
//                 area: "varthu",
//                 city: "bangalore",
//                 state: "karnataka",
//                 nationlity: "indian",
//                 pincode: "560087",
//                 landmark: "near lakshmi gym",
//                 direction: {
//                     lat: "56",
//                     lan: "60"
//                   }
//           }
// };
// update['/dogs']=[{
//   active:true,
//   name:"tommy",
//   age:"fasfa",
//   breed:"asdasd",
//   sex:"male",
//   details:"asdasfdfasf",
//   address: {
//                 doorNo: "#84",
//                 floor: "1st",
//                 street: "kote bheedi 4th",
//                 area: "varthu",
//                 city: "bangalore",
//                 state: "karnataka",
//                 nationlity: "indian",
//                 pincode: "560087",
//                 landmark: "near lakshmi gym",
//                 direction: {
//                     lat: "56",
//                     lan: "60"
//                   }
//           },
//   userId:userInfo.push().key
// }];
//
// update['/cats']=[{
//   active:true,
//   name:"tommy",
//   age:"fasfa",
//   breed:"asdasd",
//   sex:"male",
//   details:"asdasfdfasf",
//   address: {
//                 doorNo: "#84",
//                 floor: "1st",
//                 street: "kote bheedi 4th",
//                 area: "varthu",
//                 city: "bangalore",
//                 state: "karnataka",
//                 nationlity: "indian",
//                 pincode: "560087",
//                 landmark: "near lakshmi gym",
//                 direction: {
//                     lat: "56",
//                     lan: "60"
//                   }
//           },
//   userId:userInfo.push().key
// }];
//
// userInfo.update(update1);
//
// services.update(update);
// var content=firebaseRef.child("contents")
// update["/"+content.push().key]={
//   active:true,
//   authName:"asdasd",
//   designation:"fasfa",
//   headline:"asdasd",
//   category:"male",
//   content:"asdasfdfasf",
//   timestamp:"3424234",
//   userId:"-KarnBllK558E-GtNc7b"
// };
//
// content.update(update);
// var bookmarks=firebaseRef.child("bookmarks")
// update["/-KarnBllK558E-GtNc7b"]=[{
//   active:true,
//   contentId:0,
//   timestamp:"3424234"
// }];
//
// bookmarks.update(update);

// var tempRef=firebaseRef.child("adoption/dogs/0");
// update={
//   imageUrl:"https://firebasestorage.googleapis.com/v0/b/pawfull-144021.appspot.com/o/vets%2Fmurali.image%2Fpng?alt=media&token=b0421946-9458-4b4f-adb2-50999bd69fc5"
// }
//
//
// tempRef.update(update);
