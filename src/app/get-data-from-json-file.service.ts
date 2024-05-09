import { Injectable } from '@angular/core';
import data from '../assets/data/data.json';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class GetDataFromJsonFileService {

    private Count = new BehaviorSubject(0);
    private CountOfItems = new BehaviorSubject(0);
    getCount = this.Count.asObservable();
    getCountOfItems = this.CountOfItems.asObservable();
    constructor() {
        if (!localStorage.getItem('Count')) {
            localStorage.setItem('Count', '0');
            this.CountOfItems.next(Number(localStorage.getItem('Count')))
        }
    }
    GetData() {
        var Data = data
        return Data
    }
    setCount(number: number) {
        this.Count.next(number)
    }

    setCountOfItems(number: number) {
        this.CountOfItems.next(number)
    }
    saveData(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    getData(key: string) {
        return localStorage.getItem(key)
    }

    removeData(key: string) {
        localStorage.removeItem(key);
    }
}
