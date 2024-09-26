import { Observable, of } from "rxjs";
import { Statistics } from "../models";

export const fakeService =  {
  getAll(): Observable<Statistics> {
    const list: Statistics = [ 
      { id: 1, month: 1, year: 2023, nbFailed: 0, nbSucess: 12 },
      { id: 2, month: 2, year: 2023, nbFailed: 0, nbSucess: 10 },
      { id: 3, month: 3, year: 2023, nbFailed: 0, nbSucess: 8 }
    ];

    return of(list)
  }
}

//export default fakeService;
