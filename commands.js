// use this file to for the first command functions (the below are just examples so you understand how to export functions that can be used in another javascript file)
// we will use thes functions in the main.js where the bot will call them

module.exports = {
    cmd1: () => {
        return null
    },

    cmd2: () => {
        return null
    },
    tech: (client, message) => {
        const tech = message.content.substr('dev-dt'.length).toLowerCase().trim()
        if (tech.localeCompare('continuous integration') == 0) {
            message.reply('DevOps technologies used in contiguous integration are Jenkins, Travis, TeamCity, and CircleCI among others.')
            return
        }

        if (tech.localeCompare('continuous testing') == 0) {
            message.reply('DevOps technologies used in continuous testing are QuerySurge, Travis, Selenium, and Gulp among others.')
            return
        }

        if (tech.localeCompare('source control practices') == 0) {
            message.reply('DevOps technologies used in source control practices are Git, Mercurial, CVS, and SVN among others.')
            return
        }

        if (tech.localeCompare('agile software delivery') == 0) {
            message.reply("DevOps technologies used in agile software delivery include ClickUp, GitHub Project Management, and Jira among others.")
            return
        }

        if (tech.localeCompare('continuous monitoring') == 0) {
            message.reply('DevOps technologies used in continuous monitoring include Winston, Solorwinds, BigPanda, and SysDig among others.')
            return
        }

        if (tech.localeCompare('continuous exploration') == 0) {
            message.reply('DevOps technologies used in continuous exploration include Metronome, Trello, Aha, and Xtensio among others..')
            return
        }

        if (tech.localeCompare('chatops') == 0) {
            message.reply('DevOps technologies used in ChatOps include Slack, Mattermost, Chanty, and Microsoft Teams among others.')
            return
        }

        if (tech.localeCompare('package management') == 0) {
            message.reply('DevOps technologies used in package management include npm, Snapcraft, Yarn, and aptitude among others.')
            return
        }

        if (tech.localeCompare('devsecops') == 0) {
            message.reply('DevOps technologies used in DevSecOps include Snyk, OWASP Threat Dragon, Fortify, and Red Hat OpenShift among others.')
            return
        }

        if(tech.localeCompare('infrastructure as code')==0){
            message.reply('DevOps technologies used in infrastructure as code include Terraform, Saltstack, Docker, and (R)?ex among others.')
            return;
        }

        message.reply('Please enter a valid command and try again :)')

    },
    getQuote: () => {
        const quotes = ["The best TDD can do, is assure that code does what the programmer thinks it should do. That is pretty good BTW",
            "Simply put, things always had to be in a production-ready state: if you wrote it, you darn well had to be there to get it running!",
            "If you think it’s expensive to hire a professional, wait until you hire an amateur",
            "Programming is not a zero-sum game. Teaching something to a fellow programmer doesn’t take it away from you",
            "A phased approach to continuous delivery is not only preferable, it’s infinitely more manageable",
            "The key in such a transition to continuous delivery is to expect things to get worse before you’ll be able to make them better",
            "Currently, DevOps is more like a philosophical movement, not yet a precise collection of practices, descriptive or prescriptive",
            "To successfully implement continuous delivery, you need to change the culture of how an entire organization views software development efforts"
        ];
        var item = quotes[Math.floor(Math.random() * quotes.length)];
        return item;
    },
    getJoke: () => {
        const jokes = ["Two robots meet. The first robot asks, 'Are you ill?' The second robot replies, 'No, just feeling a bit off.'",
            "ASCII a stupid question, get a stupid ANSI",
            "My grandpa never got to experience the Internet. Not because he was too old, but because he used Internet Explorer.",
            "There are eight hobbits in a hobbyte",
            "Why do Java developers wear glasses? ... Because they don't C#",
            "How do you generate a random string? ... Put a web designer in front of VIM and tell him to save and exit.",
            "An SEO expert walks into a bar, bars, pub, inn, tavern, public house, Irish pub, drink, drinks, beer, alcohol..",
            "Computers are like air conditioners. They work fine until you start opening windows."
        ];
        var joke = jokes[Math.floor(Math.random() * jokes.length)];
        return joke;
    },
    getHelp: () => {

        return '"dt continuous integration" - List of technologies used in continuous integration. \n"dt continuous testing" - List of technologies used in continuous testing. \n"dt source control practices" - List of technologies used in source control. \n"dt continuous monitoring" - List of technologies used in continuous monitoring. \n"dt continuous exploration" - List of technologies used in continuous exploration. \n"dt chatops" - List of technologies used in chatops. \n"dt package management" - List of technologies used in package management. \n"dt devsecops" - List of technologies used in devsecops.\n"dev quote" - displays informative DevOps quotes ';
    },

    gc: (client, message) => {
        const cal = message.content.substr('dev-cal'.length).toLowerCase().trim()
        const fs = require('fs');
        const readline = require('readline');
        const {google} = require('googleapis');
        const calID= require('./calenderID');

        // If modifying these scopes, delete token.json.
        const SCOPES = ['https://www.googleapis.com/auth/calendar'];
        // The file token.json stores the user's access and refresh tokens, and is
        // created automatically when the authorization flow completes for the first
        // time.
        const TOKEN_PATH = 'token.json';

        // Load client secrets from a local file.
        fs.readFile('credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Calendar API.
            if(cal.localeCompare('list')==0){
                authorize(JSON.parse(content), listEvents);
                return;
            }

            if(cal.localeCompare('create')==0) {
                authorize(JSON.parse(content), createEvents);
                return;
            }

            if(cal.localeCompare('delete')==0){
                deleteEvents();
                return;
            }
                message.reply('Please enter a valid calender command :)')

        });

        /**
         * Create an OAuth2 client with the given credentials, and then execute the
         * given callback function.
         * @param {Object} credentials The authorization client credentials.
         * @param {function} callback The callback to call with the authorized client.
         */
        function authorize(credentials, callback) {
            const {client_secret, client_id, redirect_uris} = credentials.installed;
            const oAuth2Client = new google.auth.OAuth2(
                client_id, client_secret, redirect_uris[0]);

            // Check if we have previously stored a token.
            fs.readFile(TOKEN_PATH, (err, token) => {
                if (err) return getAccessToken(oAuth2Client, callback);
                oAuth2Client.setCredentials(JSON.parse(token));
                callback(oAuth2Client);
            });
        }

        /**
         * Get and store new token after prompting for user authorization, and then
         * execute the given callback with the authorized OAuth2 client.
         * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
         * @param {getEventsCallback} callback The callback for the authorized client.
         */
        function getAccessToken(oAuth2Client, callback) {
            const authUrl = oAuth2Client.generateAuthUrl({
                access_type: 'offline',
                scope: SCOPES,
            });
            console.log('Authorize this app by visiting this url:', authUrl);
            const rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout,
            });
            rl.question('Enter the code from that page here: ', (code) => {
                rl.close();
                oAuth2Client.getToken(code, (err, token) => {
                    if (err) return console.error('Error retrieving access token', err);
                    oAuth2Client.setCredentials(token);
                    // Store the token to disk for later program executions
                    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                        if (err) return console.error(err);
                        console.log('Token stored to', TOKEN_PATH);
                    });
                    callback(oAuth2Client);
                });
            });
        }

        /**
         * Lists the next 10 events on the user's primary calendar.
         * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
         */
        function listEvents(auth) {
            const calendar = google.calendar({version: 'v3', auth});
            calendar.events.list({
                calendarId: calID.ID,
                timeMin: (new Date()).toISOString(),
                maxResults: 10,
                singleEvents: true,
                orderBy: 'startTime',
            }, (err, res) => {
                if (err) return console.log('The API returned an error: ' + err);
                const events = res.data.items;
                if (events.length) {
                    //console.log('Upcoming 10 events:');
                    message.reply('Here are the next 10 upcoming events');
                    events.map((event, i) => {
                        const start = event.start.dateTime || event.start.date;
                        //console.log(`${start} - ${event.summary}`);
                        message.reply(`${start} - ${event.summary}`);
                    });
                } else {
                    message.reply('No upcoming events found')
                    //console.log('No upcoming events found.');
                }
            });
        }

        /*function deleteEvents(eventId) {

            var params = {
                calendarId: 'primary',
                eventId: eventId,
            };

            calendar.events.delete(params, function(err) {
                if (err) {
                    console.log('The API returned an error: ' + err);
                    return;
                }
                console.log('Event deleted.');
            });
        }*/

        // Refer to the Node.js quickstart on how to setup the environment:
        // https://developers.google.com/calendar/quickstart/node
        // Change the scope to 'https://www.googleapis.com/auth/calendar' and delete any
        // stored credentials.
        function createEvents(auth) {
            const calendar = google.calendar({version: 'v3', auth});
            //const summary = cal.content.substr('dev-cal'.length).toLowerCase().trim()
            //const location = message.content.substr('dev-cal'.length).toLowerCase().trim()

            var event = {
                'summary': 'Test Event #4',
                //'summary': summary,
                'location': 'Discord',
                //'location': location,
                'description': 'A semi-hard coded event to test functionality',
                'start': {
                    'dateTime': '2020-04-28T09:00:00-07:00',
                    'timeZone': 'America/Los_Angeles',
                },
                'end': {
                    'dateTime': '2020-04-28T09:00:00-07:00',
                    'timeZone': 'America/Los_Angeles',
                },
                'recurrence': [
                    //'RRULE:FREQ=DAILY;COUNT=2'
                ],
                'attendees': [
                    //{'email': 'lpage@example.com'},
                    //{'email': 'sbrin@example.com'},
                ],
                'reminders': {
                    /*'useDefault': false,
                    'overrides': [
                        {'method': 'email', 'minutes': 24 * 60},
                        {'method': 'popup', 'minutes': 10},
                    ],*/
                },
            };
            calendar.events.insert({
                auth: auth,
                calendarId: calID.ID,
                resource: event,
            }, function(err, event) {
                if (err) {
                    message.reply('There was an error contacting the Calendar service: ' + err)
                    //console.log('There was an error contacting the Calendar service: ' + err);
                    return;
                }
                message.reply('Event created!')
                listEvents(auth)
                //console.log('Event created: %s', event.htmlLink);
            });
        }


    }
}