import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.closeNavBar();

  }

  closeNavBar() {
    $("a").on("click", function (event) {
      $('.navbar-collapse').collapse('hide');
    });
  }

}
