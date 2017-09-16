$(document).ready(function() {
  newVerse();

  function newVerse() {
      var verses = [
    '"For I know the plans I have for you," declares the LORD, "plans to prosper you and not to harm you, plans to give you hope and a future."',
    "I can do all this through him who gives me strength.",
    "And we know that in all things God works for the good of those who love him, who have been called according to His purpose.",
    "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
    "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.",
    "God is our refuge and strength, an ever-present help in trouble.",
    "For the Spirit God gave us does not make us timid, but gives us power, love, and self-discipline."
  ];

  var references = [
    "Jeremiah 29:11",
    "Philippians 4:13",
    "Romans 8:28",
    "Isaish 41:10",
    "Proverbs 3:5-6",
    "Pslam 46:1",
    "Timothy 1:7"
  ];
    
    var randomNum = Math.floor(Math.random() * verses.length);
    var randomQuote = verses[randomNum];
    var randomRef = references[randomNum];
    document.getElementById("verse").innerHTML = randomQuote;
    document.getElementById("reference").innerHTML = randomRef;
    $("#tweet").attr(
      "href",
      "https://twitter.com/intent/tweet?text=" + randomQuote + " -" + randomRef
    );
  }

  $("#newVerse").on("click", function() {
    newVerse();
  });
});
