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
        const tech = message.content.substr('dt'.length).toLowerCase().trim()
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

        if (tech.localeCompare('chatops') ==0) {
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


    }

}



