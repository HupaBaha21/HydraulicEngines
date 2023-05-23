import { Injectable } from '@angular/core';
import { Details, details } from '../../info';

@Injectable({
  providedIn: 'root'
})

export class DetailsService {

  constructor() { }

  public retrieveDetails(key: string, machine: string) : Details {
    return {
      title: key.replaceAll('_',' '),
      text: details[machine][key] || ""
    };
  }
}
