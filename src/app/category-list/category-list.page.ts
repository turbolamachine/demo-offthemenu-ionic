import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    let myId = this.activatedRoute.snapshot.paramMap.get('myid');
  }

  ngOnInit() {
  }

}
