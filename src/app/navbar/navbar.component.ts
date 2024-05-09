import { Component } from '@angular/core';
import { GetDataFromJsonFileService } from '../get-data-from-json-file.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    Count: number = 0;
    constructor(private _GetData: GetDataFromJsonFileService) {
        this._GetData.getCountOfItems.subscribe(msg => this.Count = msg)
    }

    RemoveData(text: string) {
        localStorage.setItem('Count', '0');
        this._GetData.setCountOfItems(Number(this._GetData.getData('Count')));
    }
}
