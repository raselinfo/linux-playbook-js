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

// nvm
await sleep(1000);
let shouldInstallNvm = await question('Do you want to install nvm? [y/n] ');
if (shouldInstallNvm.toLowerCase() === 'y') {
    console.log('Installing nvm');
    await $`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
    await $`source ~/.bashrc`
    let version = await question('Enter node version to install: ');
    if(version){
        await $`nvm install ${version}`
    }else{
        await $`nvm install --lts`
    }
}else{
    console.log('🔽 Skipping nvm installation');
}

// yarn
await sleep(1000);
let shouldInstallYarn = await question('Do you want to install yarn? [y/n] ');
if (shouldInstallYarn.toLowerCase() === 'y') {
    console.log('Installing yarn');
    await $`npm install -g yarn`
    await $`yarn -v`
    console.log("✅ Yarn install successfull");
} else {
    console.log('🔽 Skipping yarn installation');
}

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


//openssh-server
await sleep(1000);
let shouldInstallOpenSSH = await question('Do you want to install openssh-server? [y/n] ');
if (shouldInstallOpenSSH.toLowerCase() === 'y') {
    console.log('Installing openssh-server');
    await $`sudo apt install openssh-server`
    await $`sudo systemctl enable ssh`
    await $`sudo systemctl start ssh`
    await $`sudo systemctl status ssh`
    console.log("✅ OpenSSH install successfull");

} else {
    console.log('🔽 Skipping openssh-server installation');
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


//ufw 
await sleep(1000);
let shouldInstallUFW = await question('Do you want to install ufw? [y/n] ');
if (shouldInstallUFW.toLowerCase() === 'y') {
    console.log('Installing and configuring ufw');
    await $`sudo apt install ufw`
    await $`sudo ufw allow "Nginx Full"`
    await $`ufw allow OpenSSH`
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
    await $`zx https://raw.githubusercontent.com/foyzulkarim/linux-playbook-javascript/main/docker.mjs`
} else {
    console.log('Skipping docker installation');
}

// docker-compose
let shouldInstallDockerCompose = await question('Do you want to install docker-compose? [y/n] ');
if (shouldInstallDockerCompose.toLowerCase() === 'y') {
    await $`zx https://raw.githubusercontent.com/foyzulkarim/linux-playbook-javascript/main/docker-compose.mjs`
} else {
    console.log('Skipping docker-compose installation');
}
