import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { PollutionModel } from '../models/pollution.model';

@Injectable({
  providedIn: 'root'
})
export class PollutionService {

  private pollutionData: Subject<PollutionModel> = new BehaviorSubject<PollutionModel>({
    AQI_US: undefined, pollutant: undefined
  });

  currentPollutionData = this.pollutionData.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getPollutionData() {
    return this.http
      .get(`https:/api.airvisual.com/v2/city?city=Pristina&state=Pristina&country=Kosovo&key=jQ9jLuPyuT74N3PAX`)
      .subscribe(
        (data: PollutionModel) => {
          console.log(data);
          this.pollutionData.next({
            AQI_US: data['data']['current']['pollution']['aqius'],
            pollutant: data['data']['current']['pollution']['mainus']
          });
        },
        (err) => console.log(`gotPollutionData() - ERROR ${err}`)
      );
  }
}
