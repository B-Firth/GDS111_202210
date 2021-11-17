//RPS part 1 JS -- W6D1 Class

//creae an Array that will store the images being used
//ARRAY: it's just like a variable (so it's a data storage deivce) BUT it can contain more than one value

var pics= new Array() //creates an empty Array

// addign values to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array names + index gives access to the indiv value
pics[0] = "images/rock.png"
pics[1] = "images/paper.png"
pics[2] = "images/scissors.png"

var pics2 = new Array()

pics2[0] = "images/rock2.png"
pics2[1] = "images/paper2.png"
pics2[2] = "images/scissors2.png"

//create array holding the button elements
//document.qurySelectorAll grabs all of one elment type
var btn =document.querySelectorAll("button")

//check your stored data in the console!
console.log(btn) //used for testing, requires the dev tools to be open

//make the buttons clickable and runable ALSO for the game
//add event listeners to each button
btn[0].addEventListener("click", function (e) { play(0)})
btn[1].addEventListener("click", function (e) { play(1)})
btn[2].addEventListener("click", function (e) { play(2)})



//arrays that store the player & cpu options (one array for each)
//Player ID - pId
var pId= new Array("rock_p", "paper_p", "scissors_p") 
//pId[1] = "paper_p"
//cpu ID - cId
var cId = new Array("rock_c", "paper_c", "scissors_c")

//create a function that will swap the regualr images with the highlighted ones (series 2 pics)
function swap(id, image){

    //access the images elements by ID from the HTML document
    document.getElementById(id).src = image


}

//play function
function play(id) {

    //console.log("play!", id)

    //stored images paths (src) in JS to match the HTML ones
    //swap() CALLS the fuction --> this gets its code to run!
    //values supplied inside of () are passed into the parameter variables
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the choices to varibales (player & cpu)
    var p_choice = id

    //console.log(p_choice)
    

    //randomize the cpu's choice, math.random
    var c_choice = Math.floor(Math.random() * 2.9)

    console.log(c_choice)

    //swap the starting images with the highlighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])


    //SWICH TIME - switch statements give us the option to determine a set of code to rin based on a prodetermined case vlaue

    switch(p_choice) {

        //case need to be built for "every" option p_cjpice can be!
        // 0 is rock
        case 0: //case for when p_choice == 0
        if (c_choice == 0) {
            //alert the user that there has been a draw
            alert("it's a DRAW! There's nothing more to do here...")
            //callshowResults() and pass corrrect values for: pChoice, cChoice, Results
            showResults("Rock!", "Rock!", "It's a DRAW!")

        }
        else if (c_choice == 1) { //cpu is paper
            
            alert("You LOST to the Computer!")
            showResults("Rock!", "Paper!", "You have Lost!!")

        }

        else {//cpu is scissors
            alert("You WIN with Rock!")
            showResults("Rock!", "Scissors!", "Victory!")

        }

        //break statments breaks us out of the switch/case
        break

        // 1 is paper
        case 1:
            if (c_choice == 0) {
                //alert the user that the player has won
                alert("You WIN with Paper!")
                showResults("Paper!", "Rock!", "You have Won, Buddy!")
    
            }
            else if (c_choice == 1) { //cpu is paper
                
                alert("It's a DRAW!")
                showResults("Paper!", "Paper!", "It's a DRAW, stand down!")
            }
    
            else {//cpu is scissors
                alert("You LOST to the computer!")
                showResults("Paper!", "Scissors!", "That's it man, GAME OVER MAN, It's GAME OVER!")
    
            }
    
            //break statments breaks us out of the switch/case
            break

        case 2:
            if (c_choice == 0) { //CPU is rock
                //alert the user that they have been beaten
                alert("You LOST, better luck next time!")
                showResults("Scissors!", "Rock!", "Mission Failed, we'll get'em next time!")
    
            }
            else if (c_choice == 1) { //cpu is paper
                
                alert("You have claimed Victory!")
                showResults("Scissors!", "Paper!", "Congrats, you have claimed victory!")
            }
    
            else {//cpu is scissors
                alert("It's a DRAW!")
                showResults("Scissors!", "Scissors!", "It's a DRAW! Therewill be winners here...")
    
            }
    
            //break statments breaks us out of the switch/case
            break


    } //end of switch statement

} //play() close


//function that wirtes the results back to the HTML page
function showResults(pChoice, cChoice, results) {

    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("results").innerHTML = results
}