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
        //message.channel.send('Made it to tech function')
        const tech = message.content.substr('dt'.length).toLowerCase().trim()
        //message.channel.send('Your selected technology: ' + tech + ', it is of type: ' + typeof (tech))
        //var comparez = 'chatops'
        //message.channel.send(comparez.localeCompare(tech))
        //message.channel.send(typeof comparez +" "+comparez)
        if (tech.localeCompare('continuous integration') == 0) {
            message.channel.send('DevOps technologies used in contiguous integration are Node.js, GitHub, and Heroku among others.')
            return
        }

        if (tech.localeCompare('continuous testing') == 0) {
            message.channel.send('DevOps technologies used in continuous testing are QuerySurge, Travis, Selenium, and Gulp among others.')
            return
        }

        if (tech.localeCompare('source control practices') == 0) {
            message.channel.send('DevOps technologies used in source control practices are GitHub among others.')
            return
        }

        if (tech.localeCompare('agile software delivery') == 0) {
            message.channel.send("DevOps principals used in agile software delivery include scrum, kanban, and SAFe among others")
            return
        }

        if (tech.localeCompare('continuous monitoring') == 0) {
            message.channel.send('DevOps technologies used in continuous monitoring include Winston among others.')
            return
        }

        if (tech.localeCompare('continuous exploration') == 0) {
            message.channel.send('DevOps technologies used in continuous exploration include Trello and Jira among others.')
            return
        }

        if (tech.localeCompare('chatops') ==0) {
            message.channel.send('DevOps technologies used in ChatOps include Slack, GitHub, and Heroku among others.')
            return
        }

        if (tech.localeCompare('package management') == 0) {
            message.channel.send('DevOps technologies used in package management include npm among others.')
            return
        }

        if (tech.localeCompare('devsecops') == 0) {
            message.channel.send('DevOps technologies used in DevSecOps include Snyk among others.')
            return
        }

        message.channel.send('Please enter a valid command and try again :)')


    }

}



