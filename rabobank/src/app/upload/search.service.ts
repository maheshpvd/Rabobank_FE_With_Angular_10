import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {
  transform(records: any, search: any): any {
    if(search == null) return records;

    return records.filter(function(record){
      return record.issueCount.toLowerCase().indexOf(search.toLowerCase()) > -1;
    })
  }
}