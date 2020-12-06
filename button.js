class Button{

    constructor(){

        this.emergency1= createButton('Police Station');
        this.emergency2= createButton('Fire Brigade');
        this.emergency3= createButton('Ambulance');
        this.emergency4= createButton('Resturants');
        this.emergency5= createButton('Hospitals');
        //this.emergency6= createButton('Police Station');

    }


    display(){
        this.emergency1.position(580,500);
       this.emergency1.display();
        this.emergency1.position()
       this.emergency2.display();

       this.emergency3.display();

       this.emergency4.display();

       this.emergency5.display();
    }
}