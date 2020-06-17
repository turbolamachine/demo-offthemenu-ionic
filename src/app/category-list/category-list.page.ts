import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  private category: Category;
  private products: Observable<Category>;

  constructor(public db: AngularFirestore, private activatedRoute: ActivatedRoute) {
    // We retrieve the category and its products
    let myId = this.activatedRoute.snapshot.paramMap.get('myid');
    const promise = db.doc<Category>('categories/'+myId).valueChanges().subscribe((resp) => {
      this.category = resp;
    });

    // We retrieve products from specific category
    const promise2 = db.collection('categories/'+myId+'/products', ref => ref.orderBy('position')).valueChanges().subscribe((resp) => {
      this.products = resp;
    });
  }

  ngOnInit() {
  }

}
