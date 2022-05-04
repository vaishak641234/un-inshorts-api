# ON PROGRESS !!

# un-inshorts-api

The unofficial api of the short news app inshorts

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

```javascript
[
  {
    id: 0,
    img: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651668545728_69.jpg?',
    title: "Tamil Nadu administration bans Mutt's palanquin ritual; devotees protest",
    content: "Tamil Nadu administration denied permission for 'Pattina Pravesam' ritual in Mayiladuthurai in which devotees carry the Dharmapuram mutt's seer on a palanquin. A group of devotees held a protest against the government's decision ahead of the ritual scheduled for May 22. State BJP chief K Annamalai said he would lift the palanquin himself if authorities didn't allow the ritual.",
    author: 'Deepika Bhatt',
    time: '06:35 pm',
    date: '04 May 2022,Wednesday',
    source: undefined
  },
  {
    id: 1,
    img: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651670126546_977.jpg?',
    title: 'Policeman who raped 13-yr-old rape survivor in UP police station arrested',
    content: "The Station House Officer (SHO), who allegedly raped a 13-year-old rape survivor when she had gone to the police station to file a complaint in Uttar Pradesh's Lalitpur, has been arrested from Prayagraj. The police officer was absconding. Earlier, the SHO was suspended and all policemen of the police station in Lalitpur were sent to police lines.",
    author: 'Deepika Bhatt',
    time: '07:10 pm',
    date: '04 May 2022,Wednesday',
    source: 'https://twitter.com/PTI_News/status/1521835771933900802?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts '
  },
  {
    id: 2,
    img: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651663761711_113.jpg?',
    title: "Man takes off 2 girls' clothes, urinates in Delhi school; principal tells girls 'forget it'",
    content: `Delhi Commission for Women chief Swati Maliwal has issued a notice to police after a man allegedly entered a municipal school in Delhi and sexually assaulted two girls. She said the man took off the girls' clothes and urinated in front of an entire class. "When the girls told the principal & teacher, they said 'forget about it'," Maliwal added.`,
    author: 'Arshiya Chopra',
    time: '05:21 pm',
    date: '04 May 2022,Wednesday',
    source: 'https://twitter.com/SwatiJaiHind/status/1521755432746110976?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts '
  },
  {
    id: 3,
    img: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651667432294_893.jpg?',
    title: 'PM Modi meets leaders of 5 countries in Denmark, pic released',
    content: 'PM Narendra Modi met leaders of Denmark, Finland, Iceland, Norway and Sweden on Wednesday for the second India-Nordic Summit in Copenhagen. Releasing the picture of the leaders, External Affairs Ministry Spokesperson said, "The 2018 Summit in Stockholm was the 1st time India engaged with the Nordic countries as a group on a single platform."',
    author: 'Arshiya Chopra',
    time: '06:23 pm',
    date: '04 May 2022,Wednesday',
    source: 'https://twitter.com/htTweets/status/1521815384894341120?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts '
  },
  {
    id: 4,
    img: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651665155082_429.jpg?',
    title: 'PM Modi meets Finland PM, discusses ways to deepen bilateral ties  ',
    content: 'PM Narendra Modi on Wednesday met Finland PM Sanna Marin during his Europe tour and discussed ways to further deepen bilateral ties. "There is immense potential in expanding the India-Finland digital partnership, trade partnership and investment linkages," PM Modi said. He also held a series of bilateral meetings with his counterparts from Norway, Sweden and Iceland. ',
    author: 'Deepika Bhatt',
    time: '05:54 pm',
    date: '04 May 2022,Wednesday',
    source: 'https://twitter.com/narendramodi/status/1521810123857055744?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts '
  },
  {
    id: 5,
    img: 'https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2022/05_may/4_wed/img_1651664158342_81.jpg?',
    title: "B'luru Traffic Police creates green corridor for live heart transportation",
    content: 'Bengaluru Traffic Police on Wednesday created a green corridor for transporting a live heart to a hospital in the city and also shared a video of the same on Twitter. The corridor to carry the live heart was created between Manipal Hospital in Hebbal to MS Ramaiah Memorial Hospital. Police also provided a green corridor for transportation of liver today.',
    author: 'Dharini Mudgal',
    time: '05:30 pm',
    date: '04 May 2022,Wednesday',
    source: 'https://twitter.com/blrcitytraffic/status/1521731918605086720?utm_campaign=fullarticle&utm_medium=referral&utm_source=inshorts '
  }
]
```

## People

-Vaishak C Manoharan








