/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroService } from './hero.service';

describe('Service: Hero', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should ...', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});




// import { TestBed } from '@angular/core/testing';
// import { HeroService } from './hero.service';

// describe('HeroService:', () => {
// let service: HeroService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(HeroService)
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });
