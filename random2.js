var current= new Date()
var day_night=current.getHours()
if (day_night<=12)
    document.write("<img src='http://placehold.it/300&text=banner1'>")
else
    document.write("<img src='http://placehold.it/300&text=banner2'>")