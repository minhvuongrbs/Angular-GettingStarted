import { OnInit } from '@angular/core';
// import { Component } from '@angular/core';

import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: '../app/app.component.html',
})
export class AppComponent implements OnInit {
  pageTitle = 'Book trading';
  ngOnInit() {}
}
