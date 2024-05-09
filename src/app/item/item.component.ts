import { Component } from '@angular/core';
import { GetDataFromJsonFileService } from '../get-data-from-json-file.service';

import { BehaviorSubject } from 'rxjs';


const subject = new BehaviorSubject(123);
@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent {
    Data: any
    number: number = 0
    images: any
    NumberImage: number = 0;
    status: boolean = false
    status1: boolean = true
    color1: number = 0;
    IndexOfTheSiza: number = 0
    CountToTouch: number = 0
    sizeItems: any = [
        37,
        38,
        39,
        40,
        41
    ]
    flag = false
    constructor(private _GetData: GetDataFromJsonFileService) {
        this.StartToGetData()
        this._GetData.getCount.subscribe(msg => this.CountToTouch = msg)
    }
    StartToGetData() {
        this._GetData.getCount.subscribe((msg) => {
            this.number = msg
            this.Data = this._GetData.GetData()[this.number]
            this.images = this._GetData.GetData()[this.number].colors[this.number].images
        })
    }
    ChooseColor(color: any, index: number) {
        this.images = color.images
        this.color1 = index
        this.status = !this.status
        this.status1 = !this.status1
    }
    ChooseImage(index: number) {
        this.NumberImage = index
        this.status = !this.status
        this.status1 = !this.status1
    }
    ChooseSiza(index: number) {
        this.IndexOfTheSiza = index
    }

    Scroll(): void {
        if (this.CountToTouch > this._GetData.GetData().length - 2) {
            this.CountToTouch = 0
            this._GetData.setCount(this.CountToTouch);
        } else {
            this.CountToTouch++;
            this._GetData.setCount(this.CountToTouch);
        }
    }
}
