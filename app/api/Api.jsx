var $ = require('jquery');
var axios = require('axios');

var instanceBeforeLogin = axios.create({
    baseURL: 'url of api',
    // timeout: 5000,
    headers: {
        'Api-Key': 'xxxxx'
    }
});

var instanceAfterLogin = axios.create({
    baseURL: 'url of api',
    //    timeout: 10000,
    headers: {
        'Api-Key': '238997726a78c49dc869d7e006e1353f'
    }
});

module.exports = {
    login: function(passcode) {
        instanceBeforeLogin.get('').then(function(response) {
            //  console.log(response);
        }).catch(function(error) {
            console.log(error);
        });
    }
};


//examples
// ,
// getDashboardData: function() {
//
//     return instanceAfterLogin.get('/dashBoard').then(function(response) {
//         //  console.log(response);
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// getCorporateData: function() {
//     return instanceAfterLogin.get('/companies').then(function(response) {
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// getCorporateDataById: function(id) {
//     return instanceAfterLogin.get('/companies/' + id).then(function(response) {
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// getUsersForCorporate: function(companyId) {
//     // console.log("Hi");
//     return instanceAfterLogin.get('/companies/' + companyId + '/users').then(function(response) {
//         // console.log("got output");
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// getUserData: function(user) {
//     return instanceAfterLogin.get('/users/' + user).then(function(response) {
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// getUserDataById: function(user, id) {
//     return instanceAfterLogin.get('/users/' + user + '/' + id).then(function(response) {
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// getCampData: function(cId) {
//     return instanceAfterLogin.get('companies/' + cId + '/medicalCamps').then(function(response) {
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// getCampDataById: function(cId, id) {
//     return instanceAfterLogin.get('companies/' + cId + '/medicalCamps/' + id).then(function(response) {
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// addCorporate: function(corporate) {
//     return instanceAfterLogin.post('companies', corporate).then(function(response) {
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     });
// },
// addUser: function(user, userData) {
//     return instanceAfterLogin.post('users/' + user, userData).then(function(response) {
//         return response.data;
//     }).catch(function(response) {
//         throw new Error(response.data.message);
//     })
// }
