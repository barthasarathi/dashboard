import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  training$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.training$ = this.data.getTraining();
  }

}
