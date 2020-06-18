import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public db: AngularFirestore,) { }

  /*
  * Get list of all categories
  */
  fetchAllCategories(): Observable<Category[]> {
    return this.db.collection('categories', ref => ref.orderBy('position')).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...(data as {}) } as Category ;
      });
    }));
  }

  /*
  * Get list of products by category
  */
  fetchProductsByCategory(catId): Observable<any[]> {
    return this.db.collection('categories/'+catId+'/products', ref => ref.orderBy('position')).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const categorie_id = catId;
        return { categorie_id, id, ...(data as {}) } ;
      });
    }));
  }

  /*
  * Get all the products of each category with position = 1
  */
  fetchFirstProductByCategory(catId): Observable<any[]> {
    return this.db.collection('categories/'+catId+'/products', ref => ref.where('position', '<=', 1).orderBy('position').limit(1)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        const categorie_id = catId;
        return { categorie_id, id, ...(data as {}) } ;
      });
    }));
  }
}
