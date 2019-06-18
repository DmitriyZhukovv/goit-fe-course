//---------- html ---------
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    
    <div class="draw">

    </div>

<template id="container">
    {{#each this}}
    <div class="inner">
        <h1>{{name}}</h1>
        {{#if active}}
        <img src="{{logo}}" alt="">
        {{/if}}
        <p>{{age}}</p>
    </div>
    {{/each}}
</template>



    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.11/handlebars.min.js"></script>
    <script src="./script.js"></script>
</body>
</html>

//-------- js ------




const container = document.querySelector('#container').innerHTML.trim();
const draw = document.querySelector('.draw');


const obj = [
    {
        name : 'Bond',
        age : 30,
        logo : 'https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/dedicated-experts--201606--gl--shop-guarantee?$ToutCategoryLanding$',
        active : true
    },
    {
        name : 'Jack',
        age : 30,
        logo : 'https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/dedicated-experts--201606--gl--shop-guarantee?$ToutCategoryLanding$',
        active : true

    },
    {
        name : 'Blonda',
        age : 30,
        logo : 'https://sh-s7-live-s.legocdn.com/is/image/LEGOMKTG/dedicated-experts--201606--gl--shop-guarantee?$ToutCategoryLanding$',
        active : false
    }
]



const template = Handlebars.compile(container)
console.log(template);

const result = template(obj)


draw.innerHTML = result;