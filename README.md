#Code example snippets

##Variables 

```gandalf_quote1 = "You shall not pass! -Gandalf"```

```gandalf_quote2 = "Yes, yes my dear sir and I do know your name Mr. Bilbo Baggins. And you do know my name, though you don't remember that I belong to it. I am Gandalf, and Gandalf, means me."```

---------------------------

##Using Regular Expressions

```gandalf_quote2.replace(/Gandalf/, "Gandalf The Gray")```

`regex_gray = "Gandalf The Gray"`

`gandalf_quote2.replace(/Gandalf/, regex_gray)`

`gandalf_quote2.match(/\b[A-Z][a-z]*/)`

`gandalf_quote2.match(/\b[A-Z][a-z]+/)`

-----------------------------

##Excluding Text

`gandalf_quote2.scan(/\b(?!And)[A-Z][a-z]+/)`

`gandalf_quote2.scan(/\b(?!And|Yes|Mr)[A-Z][a-z]+/)`

------------------------------

##Using RegEx in a Function

    var title = "king arthur and the knights of the round table"
    
    console.log("~> " + title);
    
    var capitalize= function (word) {
      var sliceWord = word.slice(1);
      var upCase = word.charAt(0).toUpperCase();
      return upCase + sliceWord;
    }
    
    var newTitle = title.replace(/\b(?!andthe|of|with|so)\w+/g, capitalize);
    
    console.log("~> " + newTitle);

-------------------------------

##Lookaheads

####Positive
`gandalf_quote2.replace(/Bilbo\s(?=Baggins)/, "");`

####Negative
`gandalf_quote2.replace(/name(?!,)/, "name,");`

------------------------------

##Capture groups

###Captured
`gandalf_quote1.replace(/(Gandalf)/, "$1 The Gray");`

####Non-Captured:
`gandalf_quote1.replace(/(?:Gandalf)/, "$1 The Gray")`


####Sample
`/.*\.com&&|\/(?:(?:groups\/[^\/]+\/videos\/)|(?:ondemand|channels)(?:(?:\/less\/)|(?:user[0-9]+\/review\/)?([0-9]+).*|(?:\/\w*\/))|(?:video\/))?([0-9]+).*$/`

<!--End-->
