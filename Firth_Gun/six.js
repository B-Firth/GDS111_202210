//start by declaring known variables with starting values
//variable: data storing device; friendly name for info

var totalAmmo = 6 //ammo cache value
var maxAmmo = 6 //gun capacity for ammo

//below ensure the current gun capacity ammo is full before we start

var currentAmmo = maxAmmo

//shoot function -- handel updating the current ammo on screen (so as button is clicked, current ammo will deplete)
function shoot() {

    //conditional statement --> checks for TRUTH; uses relational (conitional) operators
    if (currentAmmo > 0) {

        //lower current ammo by 1
        //long math way (right of = happens FIRST, storeage happens right to left)
        //currentAmmo = currentAmmo -1

        //faster way
        currentAmmo-- //decrementation; minus 1

        //add in play function for sound
        document.getElementById("gun").play();

        //gun sound WILL play as fast as you hit the trigger by setting it back to zero each time you shoot
        document.getElementById("gun").currentTime= 0;

    }//if ends HERE
    
    //once the if statement code has run, update the screen
    //call the updateing screen function --> call by statrting the name
    updatescreen()

} // shoot() END

//function to update the total and current ammo values on screen
function updatescreen() {
    
    //first, connect the HTML elements holding the ammo values to your JS, and write *inside of the elments* the current ammo values form JS
    document.getElementById("total-ammo").innerHTML = "" + totalAmmo
    document.getElementById("current-ammo").innerHTML = "" + currentAmmo


}//updatescreen() CLOSE

//functions can also be PASSED VALUES; these values are called PARAMETERS (a, b) and must be sent to the function during the call in order for the function to work(func releies on this data to do its job!)
function getDiff(a,b) { 
    var c = a - b

    //once c is calculated, the vlaues willl be returned to where the function was CALLED
    return c

}//getDiff() CLOSE

//reload function --> reloading the current gun's ammo to fire again
function reload() {

    //find the value difference by calling getDiff() and sending ammo values
    //once getDiff() does its job, it returns 'c' to where it was called
    //REMEMBER: storeage ( = ) happens from right to left!
    var difference = getDiff(maxAmmo, currentAmmo) //getDiff(a = maxAmmo, b = currentAmmo)

    if(difference > 0 && totalAmmo != 0) {

        document.getElementById("reload").play();


    }

    if (totalAmmo >= difference){

        currentAmmo += difference //currentAmmmo = currentAmmo + differnece
        totalAmmo -= difference //totalAmmo = totalAmmo - difference
    }

    else { //when the if condition is FALSE, the else runs

        currentAmmo += totalAmmo
        totalAmmo -= totalAmmo //totalAmmo = 0
    }

    updatescreen()


}//reload()