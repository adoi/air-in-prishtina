import { Component, OnInit } from '@angular/core';
import { PollutionService } from '../../services/pollution.service';
import { PollutionModel } from '../../models/pollution.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
