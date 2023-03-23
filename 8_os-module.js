const os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
//info about current user
 const user = os.userInfo()
 console.log(user)
console.log(os.userInfo());

//method returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`)