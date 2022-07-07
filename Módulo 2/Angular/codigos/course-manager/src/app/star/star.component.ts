import { Component, OnChanges, Input } from "@angular/core";
import { startWith } from "rxjs";

@Component({
    selector: 'app-star',
    templateUrl:  './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; //se não aparecerem as estrelas cheias, basta mudar de 94 para 74 ou vice-versa

    }

}