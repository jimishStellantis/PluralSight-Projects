import { Component, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls:['./star.component.scss']
})

export class StarComponent implements OnChanges{
    rating:number=4;    //ratings
    cropWidth:number=75; //changing the rating number 

    constructor(){
    }

    // we need to define OnChanges life cycle hooks
    ngOnChanges(changes: SimpleChanges): void {
        /*
            The total size of the stars ratings are 75px in 'cropWidth' variable 

            75/5  75px & total 5 ratings

            For Example...if the ratings is 4, than 4 times 75 is divided by 5 is 60 pixels...here we crop the 75-px display of stars to 60px, which showing 4 star ratings
        */
        this.cropWidth = this.rating * 75/5;
    }
}