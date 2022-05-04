const request = require('request');
const cheerio = require('cheerio');

function getShorts(callback,options){
    let news = []
    let flag = 0
    let URL
    if(options == undefined){
         URL = 'https://inshorts.com/en/read';
    }else{ 
        URL = `https://inshorts.com/${options.language}/read/${options.category}`;
    }

    request(URL,(err,response,html)=>{
        if(!err && response.statusCode == 200){
            const $ = cheerio.load(html);
        
            $('.news-card').each((i,el)=>{
                imgUrl = $(el).find('div.news-card-image').css('background-image');
                imgUrl = imgUrl.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '');

                title = $(el).find('div.news-card-title a.clickable span').text();

                author = $(el).find('div.news-card-title div.news-card-author-time span.author').text();

                time = $(el).find('div.news-card-title div.news-card-author-time span.time').text();

                date = $(el).find('div.news-card-title div.news-card-author-time').children().last().text();

                readMore = $(el).find('div.news-card-footer div.read-more a.source').attr("href");

                content = $(el).find('div.news-card-content div').text();
                content = content.substring(0,content.indexOf('\n'));

                var result = {
                    id:i,
                    img:imgUrl,
                    title:title,
                    content:content,
                    author:author,
                    time:time,
                    date:date,
                    source:readMore
                }
                news.push(result);
                if(options != undefined){
                if(i+1==options.numofresults){
                    callback(news)
                    flag = 1
                }}
            });
           
        }
        if(flag != 1){
        callback(news);
        }
    });
}

module.exports = getShorts;