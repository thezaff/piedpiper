var links = [
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.css">',
    '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">',
    '<link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">',
    '<link href="https://fonts.googleapis.com/css?family=Concert+One" rel="stylesheet">',
    /*  ADD CSS BETWEEN THESE */

    /* LINES */
    '<link rel="stylesheet" href="css/styles.css">',
    '<link rel="icon" href="favicon.png">'
]

for (var i = 0; i < links.length; i++) {
    $('head').append(links[i]);
}