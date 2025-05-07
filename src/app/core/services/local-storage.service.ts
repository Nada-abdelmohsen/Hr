import { Injectable } from '@angular/core';
import { LocalStorageKeysTypes } from '../models/local-storage-key-type.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  prefix='hr-'

  getItem<K extends keyof LocalStorageKeysTypes, T = LocalStorageKeysTypes[K]>(key: K): T | null {
    const data = window.localStorage.getItem(this.prefix + key);
    if (data === null) return data;
    try {
      return JSON.parse(data) as T;
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error('from localStorage service parse error: ', error, 'data: ', data);
      return null;
    }
  }


  setItem<K extends keyof LocalStorageKeysTypes, T = LocalStorageKeysTypes[K]>(key: K, value: LocalStorageKeysTypes[K]): void {
    const data =value ===undefined?'':JSON.stringify(value);
    window.localStorage.setItem(this.prefix+key,data);
  }

  removeItem<K extends keyof LocalStorageKeysTypes>(key:K,value:LocalStorageKeysTypes[K]):void{
    window.localStorage.removeItem(this.prefix+key);
  }

  clear():void{
    window.localStorage.clear();
  }

  hasItem<K extends keyof LocalStorageKeysTypes>(key:K):boolean{
    return !!this.getItem(key);
  }
}
