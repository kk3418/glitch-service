class game {
    constructor() {  //in this object all input need to be strings
        this.answer = ''; this.value = '';
        this.result = '';    //store ?A?B
        this.chance = 8;
    }
    Check() {  //check A B
        let A = 0, B = 0;   //variables A B only exists when Check() is used
        if (this.value.length < 4) {
        } else {
            for (let i = 0; i < 4; i++) {
                switch (this.value[i]) {
                    case this.answer[i]:
                        A += 1;
                    case this.answer[0]:
                    case this.answer[1]:
                    case this.answer[2]:
                    case this.answer[3]:
                        B += 1;
                    default:
                        continue;
                }
            }
            B -= A;
            this.result = this.value + '&nbsp' + A.toString() + 'A' + B.toString() + 'B';
            this.value = ''; this.chance -= 1;
            if (A === 4) alert("Good job you win !");
            else {
                if (this.chance == 0) alert("Game Over ! You lose Brad");
            }
        }
    }
    insertValue(str) {  //insert to each row
        if (this.value.length >= 4) {
            this.value = this.value;
        } else {
            this.value += str;
        }
    }
    notRepeated(str) {   //make sure not repeat same number in the row
        for (let key of this.value) { // if return true means there is something repeated
            if (str === key) {
                return true;
            }
        }
    }
    restart() {  //create a random number which decimals are distinct
        let tag = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], temp = 0;
        while (this.answer.length !== 4) {
            temp = Math.floor(Math.random() * 10); // 0-9
            if (tag[temp] == 0) {
                this.answer += temp;
                tag[temp] = 1;
            }
        }
        console.log(this.answer);
        this.result = ''; this.value = ''; this.chance = 8;
    }
}
// initial the game
let Game = new game();
let temp_display = '';
Game.restart();

// click ok --> check & display ?A?B go next row   
//click num--> display
//click restart--> display none & new game;

function restartClick() {
    Game.answer = '';
    Game.restart();
    temp_display = '';
    display.innerHTML = '';
    title.innerHTML = `You have ${Game.chance} more chance !`;
}
function ButtonClick(int) {
    str = int.toString();
    if (Game.notRepeated(str)) {  // if true means press button but no display
    } else {
        Game.insertValue(str);
        display.innerHTML = temp_display + "<span>" + Game.value + "</span><br>";
    }
}
function okClick() {
    Game.Check(); //Game.value is already undefined after Game.Check() and also Game.result update ?A?B
    if (Game.result === '') {
    } else {
        temp_display += "<span>" + Game.result + "</span><br>";
        title.innerHTML = `Brad, you have ${Game.chance} more chance !`;
        display.innerHTML = temp_display;
    }
    Game.result = '';
}
function cancelClick() {
    Game.value = '';
    display.innerHTML = temp_display + "<span>" + Game.value + "</span><br>";
}