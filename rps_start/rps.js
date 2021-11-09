//RPS part 1 JS -- W6D1 Class

//creae an Array that will store the images being used
//ARRAY: it's just like a variable (so it's a data storage deivce) BUT it can contain more than one value

var pics= new Array() //creates an empty Array

// addign values to array -- "population"
//[#] denotes index --> it's like a house number and array is the street name; array names + index gives access to the indiv value
pics[0] = "images/rock.jpg"
pics[1] = "images/paper.jpg"
pics[2] = "images/scissors.jpg"

var pics2 = new Array()

pics2[0] = "images/rock2.jpg"
pics2[1] = "images/paper2.jpg"
pics2[2] = "images/scissors2.jpg"

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
    swap(pId[0], pics[0])
    swap(pId[1], pics[1])
    swap(pId[2], pics[2])

    swap(cId[0], pics[0])
    swap(cId[1], pics[1])
    swap(cId[2], pics[2])

    //store the choices to varibales (player & cpu)
    var p_choice = id

    //console.log(p_choice)
    

    //randomize the cpu's choice! math.random
    var c_choice = Math.floor(Math.random() * 2.9)

    console.log(c_choice)

    //swap the starting images with the hihglighted ones
    swap(pId[p_choice], pics2[p_choice])
    swap(cId[c_choice], pics2[c_choice])


    //SWICH TIME - swithch statements give us the option to determine a set of code to rin based on a prodetermined case vlaue

    switch(p_choice) {

        //case need to be built for "every" option p_cjpice can be!
        // 0 is rock
        case 0: //case for when p_choice == 0
        if (c_choice == 0) {
            //alert the user that there has been a draw
            alert("Bloody hell let's call it a DRAW!")

        }
        else if (c_choice == 1) { //cpu is paper
            
            alert("You LOST to the Computer!")
        }

        else {//cpu is scissors
            alert("You WIN with Rock!")

        }

        //break statments breaks us out of the switch/case
        break

        // 1 is paper
        case 1:
            if (c_choice == 0) {
                //alert the user that the player has won
                alert("You WIN with Paper!")
    
            }
            else if (c_choice == 1) { //cpu is paper
                
                alert("It's a DRAW!")
            }
    
            else {//cpu is scissors
                alert("You LOST to the computer!")
    
            }
    
            //break statments breaks us out of the switch/case
            break

        case 2:
            if (c_choice == 0) {
                //alert the user that there has been beaten
                alert("You LOST, better luck next time!")
    
            }
            else if (c_choice == 1) { //cpu is paper
                
                alert("You have claimed Victory!")
            }
    
            else {//cpu is scissors
                alert("It's a DRAW!")
    
            }
    
            //break statments breaks us out of the switch/case
            break


    }

} //play() close