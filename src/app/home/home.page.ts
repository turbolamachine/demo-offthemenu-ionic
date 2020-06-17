import { Component, OnInit } from '@angular/core';
import { EnvService } from '../services/env.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private pizzas: any[] = [];

  constructor(public db: AngularFirestore, private env: EnvService) {
     const promise = db.collection('categories/1rXia7CeevroJzUU4pxK/products').valueChanges().subscribe((resp) => {
       console.log(resp);
       this.pizzas = resp;
     });
  }

  ngOnInit() {
    // this.menu = config.menu;
    // this.pizzas = this.menu[1];
  }

}
