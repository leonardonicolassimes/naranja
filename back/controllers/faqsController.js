const scrapeIt = require("scrape-it");
const fs = require('fs');

exports.scraping = async function(req, res) {
    const scrapeResult = await scrapeIt('https://www.naranja.com/comercios-amigos', {
        faqs: {
            listItem: 'app-faq-question',
            data: {
                question: '.faq-title_question',
                reply: '.faq-text'
            }
        }
    });

    const fecha = new Date();
    const mesOk = fecha.getMonth() + 1;
    const fechaOk = fecha.getFullYear() + '-' + mesOk + '-' + fecha.getDate() + ' ' + fecha.getHours() + '-' + fecha.getMinutes();
    const scrapingRes = scrapeResult.data.faqs;
    let arrFaqs = [];
    scrapingRes.forEach(function(item) {
       arrFaqs.push({
                       index: item.question,
                       value: item.reply
                   });
    });

    const faqs = {
        result: arrFaqs,
            updated: fechaOk
        };

    let data = JSON.stringify(faqs);
    fs.writeFileSync('faqs.json', data);

    res.send(faqs);
    res.end();
};

exports.jsonData = async function(req, res) {
    let faqs;
    fs.readFile('faqs.json', (err, data) => {
        if (err) throw err;
        faqs = JSON.parse(data);
        res.send(faqs);
        res.end();
    });
};
