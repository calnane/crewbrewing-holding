require('./style.scss')

headlineElement = document.getElementById("headline")

function headline() {
    var headlines = [
        "Watch This Space",
        "Craft Beer for the People",
        "Ethical Beer in Limerick",
    ]

    return headlines[ Math.floor( Math.random() * headlines.length ) ]
}

function updateHeadline(headline = "Crew Brewing Company") {
    document.title = headline
    headlineElement.innerHTML = headline
}

updateHeadline( headline() )

headlineElement.onclick = updateHeadline( headline() )