var hour = new Date().getHours()
/*variabila ora = data curenta, iar
dupa punct imi ia ora/orele curenta/e*/

hour = 10

if (hour != 19) { /* sau if (!(hour == 19))*/
    document.write("Bine ai venit la curs! " + "</br>")
}

if (hour < 2) {
    document.write("Somn usor!")
} else if(hour < 12) {
    document.write("Buna dimineata!")
} else if (hour < 18) {
    document.write("Buna ziua!")
} else {
    document.write("Buna seara!")
} 
// /*sau*/
// if (hour < 12 && hour > 1) {
//     document.write("Buna dimineata!")
// } else if (hour >= 12 && hour < 18) {
//     document.write("Buna ziua!")
// } else if (hour >= 18 && hour < 23) {
//     document.write("Buna seara!")
// } else {
//     document.write("Somn Usor!")
// }

