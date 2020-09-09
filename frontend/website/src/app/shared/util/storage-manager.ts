import { Injectable } from '@angular/core';

export const STORAGE_TYPE = {
  cookie: 'cookie',
  local: 'local',
  session: 'session'
};

export interface IStorage {
  storageType: string;
  getItem(key: string): any;
  getItemObject<T>(key: string): T;
  removeItem(key: string): void;
  setItem<T = string>(key: string, data: T): void;
  clear(): void;
}

export class CookieStorage implements IStorage {

  storageType = STORAGE_TYPE.cookie;

  createCookie(name, value, days): void {
    let expires = '';
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value}${expires}; path=/`;
  }

  readCookie(name): any {
    let result = null;
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        result = c.substring(nameEQ.length, c.length);

        return result;
      }
    }

    return result;
  }

  getItem(key: string): any {
    const result = this.readCookie(key);

    return result;
  }

  getItemObject<T>(key: string): T {
    const result = this.readCookie(key);

    return JSON.parse(result) as T;
  }

  removeItem(key: string): void {
    this.setItem(key, '');
  }

  setItem<T = string>(key: string, data: T): void {
    if (data != null) {
      const value = typeof (data) === 'object' ? JSON.stringify(data) : data;
      this.createCookie(key, value, 1);
    }
  }

  clear(): void { }
}

export class LocalStorage implements IStorage {
  storageType = STORAGE_TYPE.local;

  getItem(key: string): any {
    return localStorage.getItem(key);
  }

  getItemObject<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key)) as T;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  setItem<T = string>(key: string, data: T): void {
    const type = typeof data;
    const value = type === 'object' ? JSON.stringify(data) : data.toString();
    localStorage.setItem(key, value);
  }

  clear(): void {
    localStorage.clear();
  }
}

export class SessionStorage implements IStorage {
  storageType = STORAGE_TYPE.session;

  getItem(key: string): any {
    return sessionStorage.getItem(key);
  }

  getItemObject<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key)) as T;
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  setItem<T = string>(key: string, data: T): void {
    const type = typeof data;
    const value = type === 'object' ? JSON.stringify(data) : data.toString();
    sessionStorage.setItem(key, value);
  }

  clear(): void {
    sessionStorage.clear();
  }
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storageType = STORAGE_TYPE.session;
  private storage: IStorage;

  constructor() {
    this._setStorage();
  }

  setConfig(options?: { storageType?: string }): void {
    if (options.storageType) {
      this._storageType = options.storageType;
      this._setStorage();
    }
  }

  private _setStorage(): void {
    switch (this._storageType) {
      case STORAGE_TYPE.session:
        this.storage = new SessionStorage();
        break;
      case STORAGE_TYPE.local:
        this.storage = new LocalStorage();
        break;
      case STORAGE_TYPE.cookie:
        this.storage = new CookieStorage();
        break;
      default:
        this.storage = new SessionStorage();
        break;
    }
  }

  get(): IStorage {
    return this.storage;
  }

  getItem(key: string): any {
    return this.storage.getItem(key);
  }

  getItemObject<T>(key: string): T {
    return this.storage.getItemObject<T>(key);
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
  }

  setItem<T = string>(key: string, data: T): void {
    this.storage.setItem<T>(key, data);
  }

  clear(): void {
    this.storage.clear();
  }

  saveStorage(key: string, data: any): void {
    const dataTmp = btoa(JSON.stringify(data));
    this.setItem(key, dataTmp);
  }

  getStorage(key: string): any {
    const itemStorage = this.getItem(key);

    return itemStorage ? JSON.parse(atob(itemStorage)) : null;
  }
}

export const VALUES_STORAGE = new StorageService();

export const PROVIDER_STORAGE = [
  { provide: StorageService, useValue: VALUES_STORAGE }
];
