#Code example snippets

##Variables 

```gandalf_quote1 = "You shall not pass! -Gandalf"```

```gandalf_quote2 = "Yes, yes my dear sir and I do know your name Mr. Bilbo Baggins. And you do know my name, though you don't remember that I belong to it. I am Gandalf, and Gandalf, means me."```


##Using Regular Expressions

```gandalf_quote2.gsub(/Gandalf/, "Gandalf The Gray")```

`regex_gray = "Gandalf The Gray"`

`puts gandalf_quote2.gsub(/Gandalf/, regex_gray)`

`gandalf_quote2.scan(/\b[A-Z][a-z]*/)`

`gandalf_quote2.scan(/\b[A-Z][a-z]+/)`

##Lookahead

`gandalf_quote2.gsub!(/Bilbo\s(?=Baggins)/, "")`

##Lookbehind

```gandalf_quote2.gsub!(/(?<=am )Gandalf/, regex_gray)```


##Excluding Text

`gandalf_quote2.scan(/\b(?!And)[A-Z][a-z]+/)`

`gandalf_quote2.scan(/\b(?!And|Yes|Mr)[A-Z][a-z]+/)`

###Using RegEx in a Method

`title = "king arthur and the knights of the round table"`

`title.gsub(/\b(?!and|the|of|with|so)\w+/) { |word| word.capitalize}`

    title.gsub(/\b(?!and|the|of|with|so)\w+/) do |word| 
      word.capitalize
    end



<!--End-->


   
   
* 




*