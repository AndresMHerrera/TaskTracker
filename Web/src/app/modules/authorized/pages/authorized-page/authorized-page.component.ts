import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorized-page',
  templateUrl: './authorized-page.component.html',
  styleUrls: ['./authorized-page.component.scss']
})
export class AuthorizedPageComponent implements OnInit {
    showFiller: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}