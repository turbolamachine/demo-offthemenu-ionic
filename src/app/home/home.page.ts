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
    // We retrieve products from specific category
    const promise = db.collection('categories/1rXia7CeevroJzUU4pxK/products', ref => ref.orderBy('position')).valueChanges().subscribe((resp) => {
      this.pizzas = resp;
    });
  }

  ngOnInit() {
  }

}
