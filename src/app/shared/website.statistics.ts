import {Website} from './website';

export class WebsiteStatistics {
  static generateStatisticsForWebsite(website: Website) {
    const content = this.getContentOfWebsite(website);
    const tags = this.filterWebsiteOpeningTagNames(content);
    const statistics = this.generateOpeningTagStatistics(tags);
    return statistics;
  }

  static getContentOfWebsite(website: Website) {
    return website.content;
  }

  static filterWebsiteOpeningTagNames(content: Website['content']) {
    const tags = content.match(/<\/?[\w\s="/.':;#-\/\?]+>/gi);
    const openingTags = tags.filter(x => x.charAt(1) !== '/');
    const getTagName = (tag: string) => {
      const parts = tag.split(' ');
      let tagName = parts[0];
      tagName = tagName.substring(1);
      if (tagName.slice(-1) === '>') {
        tagName = tagName.substring(0, tagName.length - 1);
      }
      return tagName;
    };
    const openingTagNames = openingTags.map(x => getTagName(x));
    return openingTagNames;
  }

  static generateOpeningTagStatistics(tags: string[]) {
    const countOccurrences = (value: string, array: string[]) => {
      let numberOfOccurances = 0;
      for (const element of array) {
        if (element === value) {
          numberOfOccurances++;
        }
      }
      return numberOfOccurances;
    };
    const openingTagNamesSet = new Set(tags);
    const statistics = new Object();
    let allTheOccurrences = 0;
    openingTagNamesSet.forEach(tagName => {
      const occurrences = countOccurrences(tagName, tags);
      statistics[tagName] = occurrences;
      allTheOccurrences += occurrences;
    });
    statistics['Wszystkie znaczniki'] = allTheOccurrences;
    const sortedStatistics = [];
    for (const tagName in statistics) {
      sortedStatistics.push([tagName, statistics[tagName]]);
    }
    sortedStatistics.sort((a, b) => {
      return b[1] - a[1];
    });

    return sortedStatistics;
  }
}
