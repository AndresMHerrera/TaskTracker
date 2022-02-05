import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MapperService {
    constructor() {}

    // TODO
    deserialize<T>(json: any | any[], classReference: { new(): T}): any {

    }
}
