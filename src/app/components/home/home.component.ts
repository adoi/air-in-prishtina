import { Component, OnInit, Input } from '@angular/core';
import { PollutionService } from '../../services/pollution.service';
import { PollutionModel } from '../../models/pollution.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentPollutionData: PollutionModel;

  constructor(
    private pollutionService: PollutionService
  ) { }

  ngOnInit() {
    this.pollutionService
      .currentPollutionData
      .subscribe(data => {
        this.currentPollutionData = data;
      });
    this.pollutionService.getPollutionData();
  }
}
