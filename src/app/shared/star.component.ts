import { Component, Input, OnChanges, Output, SimpleChanges,EventEmitter } from "@angular/core";



@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    // rating:number=4;    //ratings
    cropWidth:number=75; //changing the rating number 

    /**
     * Nested component 
    */
    @Input() rating:number = 0; // set the rating default to zero

    // Define ratingclicked event
    @Output() ratingclicked: EventEmitter<string> = new EventEmitter<string>();


    
    onClick(): void{
        // console.log(`The rating ${this.rating} was clicked!`);        
        this.ratingclicked.emit(`The ${this.rating} Star rating was clicked!`);
    }    
    

    constructor(){
    }

    // we need to define OnChanges life cycle hooks
    ngOnChanges(changes: SimpleChanges): void {
        /*
            The total size of the stars ratings are 75px in 'cropWidth' variable
            75/5  75px & total 5 ratings
            For Example...if the ratings is 4, than 4 times 75 is divided by 5 is 60 pixels...here we crop the 75-px di`
            
            splay of stars to 60px, which showing 4 star ratings
        */
        this.cropWidth = this.rating * 75/5;
    }

}