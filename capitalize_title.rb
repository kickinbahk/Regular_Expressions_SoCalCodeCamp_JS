
title = "marley and me"

 title.gsub(/\b(?!and|the|of|with|so)\w+/) do |word| 
    word.capitalize
 end