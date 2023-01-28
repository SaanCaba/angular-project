import { Component, Input } from '@angular/core';
import { Categories } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  @Input() category: Categories = {
    id:0,
    name:'',
    typeImg:''
  }
}
