import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  id=this.route.params.pipe(pluck('id'));
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
