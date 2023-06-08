#!/usr/bin/env zx

// apt update and upgrade
await sleep(1000);
let shouldAptUpdateAndUpgrade = await question('Do you want to run apt update and upgrade? [y/n] ');
if(shouldAptUpdateAndUpgrade.toLowerCase() === 'y') {
    console.log('Running apt update and upgrade')
    await $`sudo apt update -y`
    await $`sudo apt upgrade -y`
}else{
    console.log('🔽 Skipping apt update and upgrade');
}

// curl
await sleep(1000);
let shouldInstallCurl = await question('Do you want to install curl? [y/n] ');
if (shouldInstallCurl.toLowerCase() === 'y') {
    console.log('Installing curl');
    await $`sudo apt install curl`
    await $`curl --version`
    console.log("✅ Curl install successfull");
}else{
    console.log('🔽 Skipping curl installation');
}

// pm2
await sleep(1000);
let shouldInstallPM2 = await question('Do you want to install pm2? [y/n] ');
if (shouldInstallPM2.toLowerCase() === 'y') {
    console.log('Installing pm2');
    await $`sudo npm install pm2@latest -g`
    await $`pm2 --version`
    console.log("✅ PM2 install successfull");
} else {
    console.log('🔽 Skipping pm2 installation');
}

// yarn
await sleep(1000);
let shouldInstallYarn = await question('Do you want to install yarn? [y/n] ');
if (shouldInstallYarn.toLowerCase() === 'y') {
    console.log('Installing yarn');
    await $`sudo npm install -g yarn`
    await $`yarn -v`
    console.log("✅ Yarn install successfull");
} else {
    console.log('🔽 Skipping yarn installation');
}
// git
await sleep(1000);
let shouldInstallGit = await question('Do you want to install git? [y/n] ');
if (shouldInstallGit.toLowerCase() === 'y') {
    console.log('Installing git');
    await $`sudo apt install git`
    await $`git --version`
    // await $`git config --global user.name "Your Name"`
    // await $`git config --global user.email "
    console.log("✅ Git install successfull");
} else {
    console.log('🔽 Skipping git installation');
}

// nginx
await sleep(1000);
let shouldInstallNginx = await question('Do you want to install nginx? [y/n] ');
if (shouldInstallNginx.toLowerCase() === 'y') {
    console.log('Installing and configuring nginx');
    await $`sudo apt install nginx`
    await $`sudo systemctl enable nginx`
    await $`sudo systemctl start nginx`
    await $`sudo service nginx status`
    
} else {
    console.log('Skipping nginx installation');
}


// ufw 
await sleep(1000);
let shouldInstallUFW = await question('Do you want to install ufw? [y/n] ');
if (shouldInstallUFW.toLowerCase() === 'y') {
    console.log('Installing and configuring ufw');
    await $`sudo apt install ufw`
    await $`sudo ufw allow "Nginx Full"`
    await $`sudo ufw allow OpenSSH`
    await $`sudo ufw allow 80/tcp`
    await $`sudo ufw allow 443/tcp`
    await $`sudo ufw allow 22/tcp`
    await $`sudo ufw enable`
    await $`sudo ufw status`
    console.log("✅ UFW install successfull");

} else {
    console.log('🔽 Skipping ufw installation. Remote ssh to this computer may not work if you did not install openssh server');
}


// docker 
let shouldInstallDocker = await question('Do you want to install docker? [y/n] ');
if (shouldInstallDocker.toLowerCase() === 'y') {
    await $`sudo apt install apt-transport-https ca-certificates curl software-properties-common`
    await $`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`
    await $`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`
    await $`sudo apt update`
    await $`apt-cache policy docker-ce`
    await $`sudo apt install docker-ce`
    await $`sudo systemctl status docker`
} else {
    console.log('Skipping docker installation');
}

// docker-compose
let shouldInstallDockerCompose = await question('Do you want to install docker-compose? [y/n] ');
if (shouldInstallDockerCompose.toLowerCase() === 'y') {
    await $`sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
    await $`sudo chmod +x /usr/local/bin/docker-compose`
    await $`sudo docker-compose --version`
} else {
    console.log('Skipping docker-compose installation');
}
