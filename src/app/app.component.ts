import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  user1 : String = "User1";
  user2 : String = "User2";
  bool : Boolean = false;
  inputan1 : number  = 0;
  inputan2 : number  = 0;
  bintang :String[][] = [['*','*','*','*','*'],['*','*','*','*','*'],['*','*','*','*','*'],['*','*','*','*','*'],['*','*','*','*','*']] ;
  check(){
  if (this.bool == true){
    var index1 : number = this.inputan1;
    var index2 : number = this.inputan2;
    this.bintang[index1 - 1][index2 - 1] = "1";
    this.bool = false;
  }else {
      var index1 : number = this.inputan1;
    var index2 : number = this.inputan2;
    this.bintang[index1 - 1][index2 - 1] = "0";
    //this.bool = true;
   }
   this.win();
  }
  win(){
    var counter1 = 0;
    var counter2 = 0;
    if (this.bool == true){
         for(var i: number = 0; i < 5; i++) {
         for(var j: number = 0; j < 5; j++) {
           if (this.bintang[i][j] == "1"){
              counter1 = counter1 +1 ;
           }
           if (this.bintang[j][i] == "1"){
              counter2 = counter2 +1 ;
           }
           if (counter1 == 4 || counter2 == 4 ){
             this.user1 = this.user1 + " " + "Win";
             break;
           }
      }
      counter1  = 0;
      counter2 = 0;
    }
    }else{
       for(var i: number = 0; i < 5; i++) {
         for(var j: number = 0; j < 5; j++) {
           if (this.bintang[i][j] == "0"){
              counter1 = counter1 +1 ;
           }
           if (this.bintang[j][i] == "0"){
              counter2 = counter2 +1 ;
           }
           if (counter1 == 4 || counter2 == 4 ){
             this.user2 = this.user2 + " " + "Win";
             break;
           }
      }
       counter1  = 0;
      counter2 = 0;
    }
    }
   
  }
}
