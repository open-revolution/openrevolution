**Open Revolution**


## Technical Stuff 
This website is a static website.
 - The source is managed in git.
 - The central git repo is on gitlab: https://gitlab.com/artearthtech/open-revolution
 - The website is statically built using html/css.
 - Bootstrap is used as the frontend of the website under the hood



## To work on the website locally
 - Install git lfs and pull git large files
 - git clone the repo:
 - git clone git@gitlab.com:artearthtech/open-revolution.git
 - Open index.html from the files


## Deploying the website

 - We deploy the website live using gitlab pipelines.
 - Just git push and the new version of the site will go live.
 - If you want to learn more about how this happens see .gitlab-ci.yml file.