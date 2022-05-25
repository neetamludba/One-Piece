import { Injectable } from '@angular/core';
import { GetService, SaveService } from '../globals/api';
import { AppConst } from '../globals/constants';

@Injectable({
  providedIn: 'root'
})
export class PiratesService {

  constructor() { }

  async getAllPirateCrew() {
    return GetService('pirates')
      .then((pirateCrew) => pirateCrew)
      .catch((ex) => console.log(ex));
  }

  async getPirateCrew(pirateCrewId: number) {
    return GetService('pirates/' + pirateCrewId)
      .then((pirateCrew) => pirateCrew)
      .catch((ex) => console.log(ex));
  }

  async saveForm(pirateCrewData: any, pirateCrewId: number) {
    console.log({ pirateCrewData });

    if (pirateCrewId === 0) {
      return SaveService('pirates', {
        ...pirateCrewData,
        
      })
        .then((count) => count)
        .catch((ex) => console.log(ex));
    } else
      return SaveService(
        'pirates/' + pirateCrewId,
        pirateCrewData,
        AppConst.patchMethod
      )
        .then((count) => count)
        .catch((ex) => console.log(ex));
  }
}
