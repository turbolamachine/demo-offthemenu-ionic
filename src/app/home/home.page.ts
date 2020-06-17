import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
// import config from '../../../ionic.config.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private menu: any;
  private pizzas: any;

  constructor(private env: EnvService) { }

  ngOnInit() {
    // this.menu = config.menu;
    // this.pizzas = this.menu[1];
  }

}
