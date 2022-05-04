# ON PROGRESS !!

# un-inshorts-api

The unofficial js wrapper of the short news app inshorts

## Installation

install using npm 
```sh
npm i un-inshorts-api
```

## Usage 
Require Library
```javascript 
const inshorts = require('un-inshorts-api');
```
```javascript 
var options = {
    language : 'language',
    category : 'category',
    numofresults : any number till 25
}

inshorts.getShorts(function(result){
    // anything you want to do with the result
},options);
```

options is an optional parameter.<br/>
By default:<br/>
language : 'en'(English)<br/>
category : ''<br/>
numofresults : 25<br/>

and these are the keys that you can include <br/>
any number above 25 will still return 25 <br/>

## Available Categories-
 - //Leave empty for getting all news
 - national (India)
 - business
 - sports
 - world
 - politics
 - technology
 - startup
 - entertainment
 - miscellaneous
 - hatke (unusual)
 - science
 - automobile

 ## Availabe Languages-
 - en (English)
 - hi (Hindi)

 ### Example Code Snippet
```javascript
var options = {
  lang: 'en',
  category: 'national'
  numOfResults: 6
}

inshorts.get(options ,function(result){
  console.log(result);
});
```
Response 

```json
[{"id":"f8cfdde7-fd78-43fd-984e-0a4572088f2c","img":"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651680075822_556.jpg?","title":"Curfew in Jodhpur imposed after clashes extended till May 6 midnight","content":"The district administration in Rajasthan's Jodhpur has extended the curfew till midnight of May 6 (Friday). The curfew was imposed in 10 police station areas on Tuesday after communal clashes broke out on Monday night. Several people, including police personnel, were injured during the violence in the district.","author":"Deepika Bhatt","time":"09:52 pm","date":"04 May 2022,Wednesday","source":"https://twitter.com/ANI_MP_CG_RJ/status/1521878514584387588?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "},{"id":"623ca78f-c1b4-405d-907f-0e7a303bd1e0","img":"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651677161786_412.jpg?","title":"Dehradun school reports 16 COVID cases, turned into micro-containment zone","content":"As many as 16 people tested positive for COVID-19 at the Welham Girls' School in Uttarakhand's Dehradun. As per District Magistrate R Rajesh Kumar, six of the students tested COVID-19 positive on Tuesday and the rest over the past one week. The residential school has been declared a micro-containment zone.","author":"Deepika Bhatt","time":"09:31 pm","date":"04 May 2022,Wednesday","source":"https://news.abplive.com/states/up-uk/dehradun-welham-girls-school-reports-16-covid-19-cases-declared-micro-containment-zone-1529912/amp?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "},{"id":"b32dcd72-d2b7-4578-ac35-ac182b8f66d2","img":"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651680436061_484.jpg?","title":"4 men drag teen girl out of auto and tear her clothes in UP, post video online","content":"A teenaged girl travelling with her aunt in an auto-rickshaw was allegedly pulled out of the vehicle and molested by four youths in Uttar Pradesh's Gonda recently. They dragged her to roadside bushes where they tore her clothes and molested her and later posted the incident's video online, police said. A search has been launched to nab the accused.","author":"Arshiya Chopra","time":"09:51 pm","date":"04 May 2022,Wednesday","source":"https://www.hindustantimes.com/cities/lucknow-news/youths-drag-girl-out-of-auto-molest-assault-her-in-up-s-gonda-101651674683374-amp.html?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "},{"id":"769e3aca-f34d-4623-afe4-ff95f6861e00","img":"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651676001663_130.jpg?","title":"Pics show gifts PM Modi gave to leaders of 5 nations he met in Denmark","content":"After meeting leaders of Nordic countries, PM Narendra Modi gifted Rogan Painting from Gujarat to Denmark Queen Margrethe II. He gifted a Pashmina stole in Papier Mache box from J&K to Sweden PM Magdalena Andersson and a Brass Tree of Life from Rajasthan to Finland PM Sanna Marin. He gifted Dokra boat from Chhattisgarh to Crown Prince Frederik of Denmark.","author":"Arshiya Chopra","time":"08:28 pm","date":"04 May 2022,Wednesday","source":"https://twitter.com/jitubhaiMLA/status/1521832514767048705?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "},{"id":"923d512f-c810-4821-ab8c-85d18718c8ca","img":"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651675567721_334.jpg?","title":"Farmer finds 11.88-carat diamond worth around ₹50 lakh in MP mine","content":"A small-time farmer in Madhya Pradesh's Panna district has found an 11.88-carat diamond in a mine. As per private estimates, the diamond may fetch over ₹50 lakh at an auction. The money received from the auction will be used for setting up a business and for the education of the farmer's children.","author":"Deepika Bhatt","time":"08:53 pm","date":"04 May 2022,Wednesday","source":"https://theprint.in/india/luck-shines-on-mp-farmer-as-he-mines-11-88-carat-diamond-in-panna/942560/?amp=&utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "},{"id":"54dfa377-99c5-45eb-819b-42b521fe7e8c","img":"https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651681851404_569.jpg?","title":"PM Modi welcomed by Indian diaspora on his arrival in Paris","content":"PM Narendra Modi was on Wednesday welcomed by the Indian community in Paris. PM Modi arrived in the French capital on the third and final leg of his visit to three European countries. He will meet French President Emmanuel Macron during his visit. PM Modi earlier visited Germany and Denmark.","author":"Deepika Bhatt","time":"10:18 pm","date":"04 May 2022,Wednesday","source":"https://twitter.com/ANI/status/1521884261233864704?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts "}]
```

## Contributors

-Vaishak C Manoharan

## Inspired by

-https://github.com/Nedwize/inshorts-api








