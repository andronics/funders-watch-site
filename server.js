const fs = require('fs')
const next = require('next')
const sitemap = require('nextjs-sitemap-generator');  

const { createServer } = require('http')
const { parse } = require('url')

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

sitemap({  
    alternateUrls: {},
    baseUrl: 'https://funders.watch',
    extraPaths: [],
    ignoredExtensions: ["js", "map", "png", "jpg"],
    ignoredPaths: ["assets"],
    pagesDirectory: __dirname + `/.next/server/pages`,  
    targetDirectory : 'public/'  
});

app.prepare().then(() => {

    createServer((req, res) => {

        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        handle(req, res, parsedUrl)

    })

})


