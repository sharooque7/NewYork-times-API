//Home Even
$(document).ready(function(){
    $('#world').click(function()
    {
        let col = fetchAPI('world');
        $('#Neywork').html('');
        $('#Neywork').html(col);
    });
});
$(document).ready(function(){
    $('#us').click(function()
    {
        
        let col = fetchAPI('us');
        $('#Neywork').html('');
        $('#Neywork').html(col);

    });
});
$(document).ready(function(){
    $('#magazine').click(function()
    {
        let col = fetchAPI('magazine');
        $('#Neywork').html('');
        $('#Neywork').html(col);

    });
});
$(document).ready(function(){
    $('#technology').click(function()
    {
        let col = fetchAPI('technology');
        $('#Neywork').html('');
        $('#Neywork').html(col);
    });
});
$(document).ready(function(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    $('#science').click(function()
    {
        let col = fetchAPI('science');
        $('#Neywork').html('');
        $('#Neywork').html(col);
    });
});
$(document).ready(function(){
    $('#arts').click(function()
    {
        let col = fetchAPI('arts');
        $('#Neywork').html('');
        $('#Neywork').html(col);
    });
});
$(document).ready(function(){
    $('#health').click(function()
    {
        let col = fetchAPI('health');
        $('#Neywork').html('');
        $('#Neywork').html(col);
    });
});
$(document).ready(function(){
    $('#fashion').click(function()
    {
        let col = fetchAPI('fashion');
        $('#Neywork').html('');
        $('#Neywork').html(col);
    });
});
$(document).ready(function(){
    $('#dining').click(function()
    {
        let col = fetchAPI('dining');
        $('#Neywork').html('');
        $('#Neywork').html(col);
    });
});
$(document).ready(function(){
    $('#travel').click(function()
    {
        let col = fetchAPI('travel');
        $('#Neywork').html('');
        $('#Neywork').html(col);
    });
});
$(document).ready(function(){
    $('#home').click(function()
    {
        let col = fetchAPI('magazine');
        $('#Neywork').html('');
        $('#Neywork').html(col);
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
    let page = document.getElementById('Neywork');
    page.append(col);
   
}

function CreateElement(ElementName,ElementClass='',ElementId='')
{
    var elem  = document.createElement(ElementName);
    elem.setAttribute('class',ElementClass);
    elem.setAttribute('id',ElementId);
    return elem;
}