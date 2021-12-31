const PORT = 8000

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

const url = 'https://kinsta.com/'
axios(url)
.then(res => {
    const html = res.data
    // console.log(html)
    const result = []
    const htlmelement = cheerio.load(html)
    htlmelement('.wp-block-group', html).each(function () {
        const title = htlmelement(this).find('.has-text-align-center').text()
        const desc = htlmelement(this).find('p').text()
        result.push({
           title,
            desc
        })
    })
    console.log(result)
})
