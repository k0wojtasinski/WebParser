import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../shared/data.service';
import {WebsiteStatistics} from '../../shared/website.statistics';
import {Website} from '../../shared/website';

@Component({
  selector: 'app-raport',
  templateUrl: './raport.component.html'
})
export class RaportComponent implements OnInit {
  @Input('website') website: Website;
  private amountOfTags = 10;
  totalNumberOfTagsOccurrances = 0;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.totalNumberOfTagsOccurrances = this.website.statistics[0][1];
    this.reduceStatisticsLengthToAmountOfTags();
  }

  private reduceStatisticsLengthToAmountOfTags(): void {
    if (this.website.statistics.length > this.amountOfTags) {
      this.website.statistics.splice(this.amountOfTags + 1, this.website.statistics.length - this.amountOfTags);
    }
  }

  removeWebsiteFromList(): void {
    this.dataService.removeWebsite(this.website);
  }

}
