import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../app/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  cars: any[] = [];
  featuredCars: any[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
      this.featuredCars = this.cars.slice(0, 2);
    });
  }
}
