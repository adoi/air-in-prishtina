import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { PollutionModel } from '../models/pollution.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PollutionService {

  API_URL = environment.API_URL;

  private pollutionData: Subject<PollutionModel> = new BehaviorSubject<PollutionModel>({
    AQI_US: undefined, pollutant: undefined
  });

  currentPollutionData = this.pollutionData.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getPollutionData() {
    return this.http
      .get(`${this.API_URL}`)
      .subscribe(
        (data: PollutionModel) => {
          console.log(data);
          this.pollutionData.next({
            AQI_US: data['data']['current']['pollution']['aqius'],
            pollutant: data['data']['current']['pollution']['mainus']
          });
        },
        (err) => console.log(`getPollutionData() - ERROR ${err}`)
      );
  }
}
