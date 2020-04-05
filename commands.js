// use this file to for the first command functions (the below are just examples so you understand how to export functions that can be used in another javascript file)
// we will use thes functions in the main.js where the bot will call them

module.exports = {
  cmd1: () => {
    return null
  },

  cmd2: () => {
    return null
  },
  tech:(client, message) =>{
   if(message.content.startsWith('dt')) {
    const tech = message.content.substr('dt'.length).toLocaleLowerCase()
     //message.channel.send('Your selected technology: '+tech+', it is of type: '+typeof(tech))

    if(tech.localeCompare('continuous integration')) {
      message.channel.send('DevOps technologies used in contiguous integration are Node.js, GitHub, and Heroku among others.')

    }else if(tech.localeCompare('continuous testing')){
      message.channel.send('DevOps technologies used in continuous testing are QuerySurge, Travis, Selenium, and Gulp among others.')

    }else if(tech.localeCompare('source control practices')){
      message.channel.send('DevOps technologies used in source control practices are GitHub among others.')

    }else if(tech.localeCompare('agile software delivery')){


    }else if(tech.localeCompare('continuous monitoring')){
      message.channel.send('DevOps technologies include Winston among others.')

    }else if(tech.localeCompare('continuous exploration')){
      message.channel.send('DevOps technologies include Trello and Jira among others.')

    }else if(tech.localeCompare('chatops')){
      message.channel('DevOps technologies include Slack, GitHub, and Heroku among others.')

    }else if(tech.localeCompare('package management')){
      message.channel.send('DevOps technologies include npm among others.')

    }else if(tech.localeCompare('devsecops')){
      message.channel.send('DevOps technologies include Snyk among others.')
	  
    }else{
      message.channel.send('Please enter a valid command and try again :)')

    }
  }else if(message.content.startsWith('/')) {
	const tech = message.content.substr('/'.length).toLocaleLowerCase()
	if(tech.localeCompare('help')) {
      message.channel.send('"dt continuous integration" - List of technologies used in continuous integration. \n"dt continuous testing" - List of technologies used in continuous testing. \n"dt source control practices" - List of technologies used in source control. \n"dt continuous monitoring" - List of technologies used in continuous monitoring. \n"dt continuous exploration" - List of technologies used in continuous exploration. \n"dt chatops" - List of technologies used in chatops. \n"dt package management" - List of technologies used in package management. \n"dt devsecops" - List of technologies used in devsecops.\n"quote" - displays informative DevOps quotes ')
	  
    }else{
      message.channel.send('Please enter a valid command and try again :)')

    }
   }
  }
 }



