import { Employee, employees } from './employees';
import { Component } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css'],
})
export class ExtraComponent {
  AutoComplete: string = '';
  ComboBox: string = '';
  DropDownList: string = '';
  MultiSelect: any= '';
  constructor() {}

  ngOnInit(): void {}

  public listItems: Array<string> = [
    'Baseball',
    'Basketball',
    'Cricket',
    'Field Hockey',
    'Football',
    'Table Tennis',
    'Tennis',
    'Volleyball',
  ];

  public gridData: Employee[] = employees;


  public value = ['Basketball', 'Cricket'];
  public complexValue = { text: 'Decor', id: 5 };
  public complexArrayValue = [{ text: 'Sofas', id: 3 }];

}
