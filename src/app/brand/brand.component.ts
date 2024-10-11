import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../../app/services/cars.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.scss',
})
export class BrandComponent implements OnInit {
  cars: any[] = [];
  filteredCars: any[] = [];
  selectedBrand: string = '';

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.selectedBrand = params.get('name')!;
      this.carsService.getCars().subscribe((data) => {
        this.cars = data;
        this.filterCarsByBrand();
      });
    });
  }

  filterCarsByBrand() {
    this.filteredCars = this.cars.filter(
      (car) => car.brand === this.selectedBrand
    );
  }
}
