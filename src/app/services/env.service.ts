import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  test: string = "ABCD";

  constructor() { }
}
