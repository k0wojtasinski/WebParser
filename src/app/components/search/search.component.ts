import {Component, EventEmitter, OnInit} from '@angular/core';
import {BackendService} from '../../shared/backend.service';
import {DataService} from '../../shared/data.service';
import {Router} from '@angular/router';
import {Website} from '../../shared/website';
import {WebsiteStatistics} from '../../shared/website.statistics';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  state = 0;

  constructor(private backend: BackendService,
              private dataService: DataService,
              private router: Router) {
    this.state = 0;
  }

  searchFor(url: string): void {
    this.state = 1;
    this.backend.fetchData(url).subscribe(
      res => {
        if (res.error) {
          this.state = -1;
        } else {
          (<Website>res).statistics = WebsiteStatistics.generateStatisticsForWebsite(<Website>res);
          this.dataService.pushWebsite(<Website>res);
          this.router.navigate(['raports']);
        }
      }, err => this.state = -1);
  }

  tryAgain(): void {
    this.state = 0;
  }
}
