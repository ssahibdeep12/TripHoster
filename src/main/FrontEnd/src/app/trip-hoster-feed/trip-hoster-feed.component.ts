import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-hoster-feed',
  templateUrl: './trip-hoster-feed.component.html',
  styleUrls: ['./trip-hoster-feed.component.css']
})
export class TripHosterFeedComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.params['name'];
  }

}
