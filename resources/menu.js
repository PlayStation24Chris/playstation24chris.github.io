const USD = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const Ops = {
    method: 'GET',
    headers: {
        //would need stuff if it was external
    }
}

getJSON('../resources/json/menu.json', Ops);

async function getJSON(source, options)
{
    let response = await fetch(source, options);
    let data = await response.json();

    fillCards(data);
}

function fillCards(contents)
{
    const wrapper = document.getElementById('wrapping');

    for (let j=0; j<contents.cards.length; ++j)
    {
        wrapper.innerHTML += "<div class=\"card\">" + contents.cards[j].item + "<br>"
        + USD.format(contents.cards[j].price) + "<br>"
        + contents.cards[j].section + "</div>";
    }
}