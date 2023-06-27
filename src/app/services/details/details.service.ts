import { Injectable } from '@angular/core';
import { Details, details } from '../../info';

@Injectable({
  providedIn: 'root'
})

export class DetailsService {
  public retrieveDetails(key: string, machine: string) : Details {
    let returnee = {
      title: key.replaceAll('_',' '),
      text: details[machine].parts[key] || details[machine].outerParts[key] || ""
    };
    
    return returnee;
  }
}
