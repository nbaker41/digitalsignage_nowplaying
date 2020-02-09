const siteData = {};

// set up user object as placeholder for authentication service...
     siteData.currentUser = {
          id: 300,
          name: {
               first: "Cecil",
               last: "Dunston"
          },
          username: "crdusto",
          password: "password",
          gaTechId: 393857645,
     // how many clients can a user be attached to?
     // if more than one, turn this into an array of objects?
          // client: {
          // 	id: 12,
          // 	shortName: "admissions",
          // 	title: "Office of Admissions", 
          // },
          avatar: "files/assets/avatars/3452.png",
          activity: {
               lastLoginDate: "Tue Feb 04 2020 23:27:31 GMT-0500 (Eastern Standard Time)",
               accountCreatedDate: "Tue Feb 04 2020 23:27:31 GMT-0500 (Eastern Standard Time)"
          },
          contact: {
               phone: 4043876473,
               email: "cdunston3@gatech.edu"
          }
     }

     siteData.users = 
     [
          {
               
          }
     ]

// make a list of clients... for the time being.
     siteData.allCustomers = [
          {
               id: 2,
               title: {
                    short: "admissions",
                    official: "Office of Admissions",
               },
               type: {
                    department: [
                         6
                    ],
                    school: false,
                    building: false,
               },
               users:{
                    all: [
                         34,
                         35,
                         8,
                         76
                    ],
                    admins: [
                         8,
                         34
                    ]
               },
               players: [
                    1,
                    8,
                    69,
                    44
               ]
          },
          {
               id: 3,
               title: {
                    short: "crc",
                    official: "Campus Recreation Center",
               },
               type: {
                    department: null,
                    school: null,
                    building: [
                         2,
                         54
                    ]
               },
               users:{
                    all: [
                         34,
                         35,
                         8,
                         76
                    ],
                    admins: [
                         8,
                         34
                    ]
               },
               players: [
                    1,
                    8,
                    69,
                    44
               ]
          }
     ];

// make a list of players...
     siteData.allPlayers = [
          {
               id: 9,
               name: "Upstairs Hallway",
               customer: 11,
               location: {
                    building: 20,
                    floor: 3
               },
               sections: {
                    leftsection: false,
                    slideshow: 300,
                    list: 27,
                    events: true
               }
          },
          {
               id: 10,
               name: "Downstairs Hallway",
               customer: 11,
               location: {
                    building: 20,
                    floor: 2
               },
               sections: {
                    leftsection: false,
                    slideshow: false,
                    list: 301,
                    events: true
               }
          },
          {
               id: 11,
               name: "Lobby",
               customer: 6,
               location: {
                    building: 44,
                    floor: 1
               },
               sections: {
                    leftsection: false,
                    slideshow: 300,
                    list: false,
                    events: true
               }
          }
     ];