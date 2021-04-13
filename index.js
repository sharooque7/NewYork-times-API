//Home Event
$(document).ready(function(){
    $('#world').click(function()
    {
        fetchAPI('world');
    });
});
$(document).ready(function(){
    $('#us').click(function()
    {
        let col = fetchAPI('us');
    });
});
$(document).ready(function(){
    $('#magazine').click(function()
    {
        fetchAPI('magazine');
    });
});
$(document).ready(function(){
    $('#technology').click(function()
    {
        fetchAPI('technology');
    });
});
$(document).ready(function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    $('#science').click(function()
    {
        fetchAPI('science');
    });
});
$(document).ready(function(){
    $('#arts').click(function()
    {
        fetchAPI('arts');
    });
});
$(document).ready(function(){
    $('#health').click(function()
    {
        fetchAPI('health');
    });
});
$(document).ready(function(){
    $('#fashion').click(function()
    {
        fetchAPI('fashion');
    });
});
$(document).ready(function(){
    $('#dining').click(function()
    {
        fetchAPI('dining');
    });
});
$(document).ready(function(){
    $('#travel').click(function()
    {
        fetchAPI('travel');
    });
});
$(document).ready(function(){
    $('#home').click(function()
    {
        fetchAPI('home');
    });
});

//Fetch Api function
async function fetchAPI(Data)
{
let data = Data;
let url = `https://api.nytimes.com/svc/topstories/v2/${data}.json?api-key=7Ld8v4YtapOq59P0Aj5JWfLkAw2OQ6SM`;
let NewyorkResponse = await fetch(url);
let NewyorkResult = await NewyorkResponse.json();
console.log(data);
NewyorkResult.results.filter((e) =>{
    console.log(e)
    if(e.section === data)
    {
        CreateUI(e);
        console.log(e);
    }
});
}

//creates the webpage content
function CreateUI(data)
{
    console.log(`${data.section}`);
    var col = CreateElement('div','col-lg-12 col-sm-12');
    var card = CreateElement('div','card mt-3');
    var row = CreateElement('div','row  no-gutters');
    var row_col_1 = CreateElement('div','col');
    var card_block = CreateElement('div','card-block py-2 px-2');
    var title = CreateElement('h4','card-title');
    title.innerHTML =`${data.section}`;
    var p = CreateElement('p','card-text');
    p.innerHTML = `${data.item_type}<br>${data.title}<br>${data.created_date}<br>${data.abstract}<br>${data.byline}`;
    var cread = CreateElement('a','btn btn-link');
    cread.innerHTML = 'Continue reading...'
    cread.setAttribute('href',`${data.short_url}`)
    cread.setAttribute('target','_blank');
    var row_col_2 = CreateElement('div','col-auto');
    var img = CreateElement('img','img-thumbnail');
    img.setAttribute('src',`${data.multimedia[0].url}`);
    img.setAttribute('width','400');
    img.setAttribute('height','400')
    card_block.append(title,p,cread);
    row_col_1.append(card_block);
    card.append(row);
    col.append(card);
    row_col_2.append(img);
    row.append(row_col_1,row_col_2);
    document.getElementById(`${data.section}`).append(col);
    return col;
}

function CreateElement(ElementName,ElementClass='',ElementId='')
{
    var elem  = document.createElement(ElementName);
    elem.setAttribute('class',ElementClass);
    elem.setAttribute('id',ElementId);
    return elem;
}