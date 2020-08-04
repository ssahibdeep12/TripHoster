import { Component, OnInit } from '@angular/core';

export class travelPackage {
  constructor(
      public id: number,
      public leavingFrom: string,
      public goingTo: string,
      public cost: number,
      public noOfDays: number,
      public fromDate: Date,
      public toDate: Date,
      public numberOfPeople: number,
      public numberOfRooms: number,
      public classType: string,
      public isRoundTrip: boolean
  ) {}
}

@Component({
  selector: 'app-travel-packages',
  templateUrl: './travel-packages.component.html',
  styleUrls: ['./travel-packages.component.css']
})
export class TravelPackagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
