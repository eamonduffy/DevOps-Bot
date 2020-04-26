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
    getHelp: () => {

        return '"dt continuous integration" - List of technologies used in continuous integration. \n"dt continuous testing" - List of technologies used in continuous testing. \n"dt source control practices" - List of technologies used in source control. \n"dt continuous monitoring" - List of technologies used in continuous monitoring. \n"dt continuous exploration" - List of technologies used in continuous exploration. \n"dt chatops" - List of technologies used in chatops. \n"dt package management" - List of technologies used in package management. \n"dt devsecops" - List of technologies used in devsecops.\n"dev quote" - displays informative DevOps quotes ';
    },
    codeTest: (client,message) => {
        const codeTest = message.content.substr('dev-test'.length).toLowerCase().trim()
        if (codeTest.localeCompare('mocha')==0){
            message.reply('Mocha is a JavaScript test framework which runs on Node.js, and hosted on GitHub. Learn more here: https://mochajs.org/#getting-started')
            return
        }
        if (codeTest.localeCompare('jasmine')==0){
            message.reply('Jasmine is a development framework used for testing JavaScript. Unlike some of the other frameworks, it does not depend on any other frameworks to work. Learn more here: https://jasmine.github.io/')
            return
        }
        if (codeTest.localeCompare('karma')==0){
            message.reply('Karma is a testing tool which creates a web server to execute source code against the specified test code. Learn more here: https://karma-runner.github.io/4.0/intro/how-it-works.html')
            return
        }
        if (codeTest.localeCompare('puppeteer')==0){
            message.reply('Puppeteer is a, "Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium." Learn more here: https://developers.google.com/web/tools/puppeteer')
            return
        }
        if(codeTest.localeCompare('chai')==0){
            message.reply('Chai is a BDD/TDD library for used with node.js. Learn more here: https://www.chaijs.com/guide/')
            return
        }
        
        message.reply('Some testing frameworks for JavaScript are Mocha, Jasmine, Karma, Puppeteer, and Chai. Type "dev test (test framework)" to learn more about a specific framework listed above.')
    }
}