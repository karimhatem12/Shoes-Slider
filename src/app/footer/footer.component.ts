import { Component } from '@angular/core';
import { GetDataFromJsonFileService } from '../get-data-from-json-file.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    FullData: any
    TotalNumber: number
    Data: any
    count: number = 1;
    isVideo: boolean = true
    isFound: boolean = false
    FavList: any = []
    constructor(private toastr: ToastrService, private _GetData: GetDataFromJsonFileService) {
        this._GetData.getCount.subscribe(msg => this.count = msg)
        this.ChangeData()
        console.log(this.FullData.length)
        this.TotalNumber = this.FullData.length
        this.CheckIsIn()
    }
    ChangeData() {
        this.FullData = this._GetData.GetData()
        this.Data = this.FullData[this.count]
    }
    LeftClick() {
        if (this.count <= 0) {
            this.count = this._GetData.GetData().length - 1
            this._GetData.setCount(this.count);
        } else {
            this.count--;
            this._GetData.setCount(this.count);
        }

    }
    RightClick() {
        if (this.count > this._GetData.GetData().length - 2) {
            this.count = 0
            this._GetData.setCount(this.count);
        } else {
            this.count++;
            this._GetData.setCount(this.count);
        }
    }
    AddToCart() {
        let Count = Number(this._GetData.getData('Count'))
        Count = Count + 1
        localStorage.setItem('Count', Count.toString());
        this._GetData.setCountOfItems(Number(this._GetData.getData('Count')));
        this.showSuccess()
    }
    showSuccess() {
        this.toastr.success('Added to Your Cart', 'Success!', {
            closeButton: true,
            progressBar: true
        });
    }
    ChangePage(index: number) {
        this.count = index
        this._GetData.setCount(this.count);
    }

    CheckIsIn(): void {
        if (this.count in this.FavList) {
            this.isFound = true
        } else {
            this.isFound = false
        }

    }

    MakeItFav() {
        if (this.isFound) {
            const index = this.FavList.indexOf(this.count);
            this.FavList.splice(index);
            this.CheckIsIn()
        } else {

            this.FavList.push(this.count)
            this.CheckIsIn()
        }
    }
}
