const http = require('http');
const express = require('express');

const path = require('path')

// const mongoose = require('mongoose');
// const crypto = require("crypto");

// const { exec } = require('shelljs');
// exec('');

// const User = mongoose.model('User', {
//    name: {
//       type: String
//    },
//    pass: {
//       type: String
//    },
//    code: {
//       type: String
//    }
// });

// // +++++++++++++++ . +++++++++++++++ . +++++++++++++++ . +++++++++++++++ //

// function createConnection() {
//    mongoose.connect('X', {
//          useNewUrlParser: true
//       })
//       .then(() => {
//          console.log('[*] Connected to Pac-Man Database...')
//       })
//       .catch((err) => {
//          console.log(`[!] There is not a problem.\nError: ${err}`);
//          process.exit(-1)
//       })

//    return '[*] Express attached to database. '
// }

// function closeConnection() {
//    mongoose.connection.close('error', err => {
//       if (err) {
//          return (err);
//       } else {
//          return '[!] Connection closing...'
//       }
//    });
// }

// function createCollection() {

//    User.createCollection().then(() => {
//          console.log('[*] Created collection users...')
//       })
//       .catch((err) => {
//          console.log(`[!] There is not a problem.\nError: ${err}`);
//          closeConnection()
//       })

// }

// // +++++++++++++++ . +++++++++++++++ . +++++++++++++++ . +++++++++++++++ //

// function createUser(username, pass) {

//    User.findOne({
//       name: username
//    }, function(err, docs) {
//       if (err) {
//          console.log(err);
//       } else {
//          if (docs == null) {
//             console.log("[-] Creating User...");

//             const person = new Promise((resolve, reject) => {
//                var code = `Welcome to C4C PacMan\n     [ ${username} ].\nHit the instruction\n   button on your\nleft to learn more!`
//                var user = new User({
//                   name: username,
//                   pass: pass,
//                   code: code
//                });

//                user.save(function(err, user) {
//                   if (err) {
//                      reject("[-] Reject...");
//                      return console.error(err)
//                   }
//                   console.log("[*] User: " + user.name + " saved to user collection.\n[-] Document ID: " + user.id);

//                   resolve(user.id);

//                });
//             });

//             person.then(
//                (value) => {
//                   //console.log(value); // [-] Success!
//                },
//                (reason) => {
//                   //console.error(reason); // [-] Error!
//                },
//             );
//          } else {
//             console.log('[-] User already exists... ');
//             return '[*] User already exists...';
//          }

//       }
//    });

//    return '[*] Complete...';

// }

// function updateUser(username, code, newpass) {

//    const update = new Promise((resolve, reject) => {

//       User.findOneAndUpdate({
//          name: username
//       }, {
//          name: username,
//          code: code,
//          pass: newpass
//       }, function(err, docs) {
//          if (err) {
//             console.log(err)
//             reject(err)
//          } else {
//             resolve('[-] Done with update pass...')
//             //console.log("Original Doc : ",docs);
//          }
//       });


//    });

//    update.then(
//       (value) => {
//          User.findOne({
//             name: username
//          }, function(err, docs) {
//             if (err) {
//                console.log(err);
//             } else {
//                console.log("[*] Udpate DB saved...");
//             }
//          });
//          console.log(value); // [-] Success!
//          //return value
//       },
//       (reason) => {
//          console.error(reason); // [-] Error!
//          //return reason
//       },
//    );

//    return '[*] Complete...';

// }

// function deleteUser(username) {

//     let result;

//     try {

//         User.findOneAndRemove({
//             name: username
//          },
//          function(err, docs) {
//             if (err) {
//                console.log(err)
//             } else {
//                console.log("[=] Removed User : ", docs.name);
//             }
//        });

//        result = '[*] Complete...';

//     } catch(error) {
//         result = `[!] Error: ${error}...`;
//     }

//    return result;

// }

const app = express();
// var db = createConnection();

app.use('/img', express.static(path.join(__dirname, '/src/img')));
app.use('/js', express.static(path.join(__dirname, '/src/js')));
app.use('/dist', express.static(path.join(__dirname, '/src/dist')));
app.use('/css', express.static(path.join(__dirname, 'src/css')));

app.use(express.json())


// ==================== . [ GET PAGES] . ==================== //


app.get('/', (req, res) => {
   res.sendFile(__dirname + '/src/static/index.html');
});

app.get('/contact', (req, res) => {
   res.sendFile(__dirname + '/src/static/contact.html');
});

app.get('/events', (req, res) => {
   res.sendFile(__dirname + '/src/static/events.html');
});

app.get('/social', (req, res) => {
   res.sendFile(__dirname + '/src/static/social.html');
});


// ==================== . [ POST ENDPS] . ==================== //


// ==================== . [ 404 Page] . ==================== //

app.get('*', function(req, res) {
   res.status(404).sendFile(__dirname + '/src/static/404.html');
});


// ===============[ V ]=============== //


app.listen(8080,'0.0.0.0', () => {
   console.clear()
   console.log(`
    ▐▓█▀▀▀▀▀▀▀▀▀█▓▌░▄▄▄▄▄░
    ▐▓█░PAC-MAN░█▓▌░█▄▄▄█░
    ▐▓█░░░░░░░░░█▓▌░█▄▄▄█░
    ▐▓█▄▄▄▄▄▄▄▄▄█▓▌░█████░
    ░░░░▄▄███▄▄░░░░░█████░

  `)
   console.log('[*] Express server active on port:  [ 8080 ]');
});
