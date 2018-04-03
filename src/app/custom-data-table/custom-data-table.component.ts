import {Component} from '@angular/core';


@Component({
  selector: 'custom-data-table',
  styleUrls: ['custom-data-table.component.css'],
  templateUrl: 'custom-data-table.component.html',
})
export class CustomDataTableComponent {
  displayedColumns = ['position', 'name', 'department', 'experience'];
  dataSource = ELEMENT_DATA;
}

export interface Element {
  name: string;
  position: number;
  department: string;
  experience: number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Paul', department: 'UI', experience: 8},
  {position: 2, name: 'John', department: 'Java', experience: 8},
  {position: 3, name: 'Mike', department: 'Java', experience: 8},
  {position: 4, name: 'Barry', department: 'Hadoop', experience: 8},
  {position: 5, name: 'Broot', department: 'Dev-ops', experience: 9},
  {position: 6, name: 'Charlie', department: 'Java', experience: 7},
  {position: 7, name: 'Niko', department: 'UI', experience: 3},
  {position: 8, name: 'Stan', department: 'Java', experience: 4},
  {position: 9, name: 'Francisco', department: 'Java', experience: 5},
  {position: 10, name: 'Noel', department: '.Net', experience: 8},
  {position: 11, name: 'Salman', department: '.Net', experience: 6},
  {position: 12, name: 'Morgan', department: 'Java', experience: 5},
  {position: 13, name: 'Andy', department: 'Java', experience: 9},
  {position: 14, name: 'Suraj', department: '.Net', experience: 7},
  {position: 15, name: 'Pine', department: 'Java', experience: 2},
  {position: 16, name: 'Surefore', department: 'UI', experience: 6},
  {position: 17, name: 'Seagull', department: 'Java', experience: 8},
  {position: 18, name: 'JJonak', department: 'Hadoop', experience: 7},
  {position: 19, name: 'Corvo', department: 'Java', experience: 6},
  {position: 20, name: 'Ezio', department: '.Net', experience: 9},
];