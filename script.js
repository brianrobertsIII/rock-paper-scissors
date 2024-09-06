function getComputerChoice() {
    let choice = Math.random();

    if(choice < 0.25){
        return 1;
    }

    else if(choice < 0.50){
        return 2;
    }

    else if(choice < 0.75){
        return 3;
    }
}