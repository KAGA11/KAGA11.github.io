# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


### Local Development

```
$ npm start
```

笔记在Blog 图片文件在static

### Build

```
$ npm run build
$ npm run deploy
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
