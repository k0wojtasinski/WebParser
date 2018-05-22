import {Component, OnInit} from '@angular/core';
import {DataService} from '../../shared/data.service';
import {Website} from '../../shared/website';

@Component({
  selector: 'app-raport-list',
  templateUrl: './raport-list.component.html'
})
export class RaportListComponent implements OnInit {
  websitesArray: Website[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.websitesArray = this.dataService.fetchWebsites();
  }

}
