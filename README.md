Open Revolution

## Technical Stuff

This website is a static website.

* The source is managed in git.
  * The central git repo is on gitlab: https://gitlab.com/.../...
* The website is statically built using [hugo][].

[hugo]: https://gohugo.io/

### To work on the website locally

* Install [hugo]
* Install git lfs and pull git large files
* git clone the repo:

  `git clone git@gitlab.com:.../....git`
* Run hugo:

  `hugo server`

### Extras

To build the CSS from the SASS:

1. Install sass (e.g. `brew install sass`)
2. Run:

   `sass --watch static/scss:static/css`


### Deploying the website

We deploy the website live using gitlab pipelines.

Just `git push` and the new version of the site will go live.

If you want to learn more about how this happens see `.gitlab-ci.yml` file.
