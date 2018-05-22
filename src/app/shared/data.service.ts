import {Injectable} from '@angular/core';
import {Website} from './website';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  websiteArray: Website[] = [];

  constructor() {
  }

  pushWebsite(website: Website): void {
    this.websiteArray.push(website);
  }

  fetchWebsites(): Website[] {
    return this.websiteArray;
  }

  removeWebsite(website: Website) {
    const index = this.websiteArray.lastIndexOf(website);
    this.websiteArray.splice(index, 1);
  }
}
