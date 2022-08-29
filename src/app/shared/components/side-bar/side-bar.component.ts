import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: { 
    defaultOptions: Array<any>, accessLink: Array<any> 
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor() { 
  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-home',
        router: ['/']
      },
      {
        name: 'Search',
        icon: 'uil uil-search-alt',
        router: ['/', 'history']
      },
      {
        name: 'Your Library',
        icon: 'uil uil-books',
        router: ['/', 'favorites']
      }
    ]
    this.mainMenu.accessLink = [
      {
        name: "Create List",
        icon: "uil uil-plus-circle"
      },
      {
        name: "Liked Songs",
        icon: "uil uil-thumbs-up"
      }
    ]
  }

  
}
