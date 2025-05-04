# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
Docusaurus 本身不需要手动 git push，它的 npm run deploy 会自动帮你推送到 GitHub。
但是，需要先 git add 和 git commit，否则 Docusaurus 不会部署最新的更改

### Local Development

```
$ npm start
```

笔记在Blog 图片文件在static

### Deploy顺序

```
$ git add & git commit
$ npm run build
$ GIT_USER=<Your GitHub username> yarn deploy
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
