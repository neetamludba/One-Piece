import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class PiratesService {

  constructor() { }
  arrayOfPirate: any = [];

  async getAllPirate() {
    // then return the value / do not call the function . 
    // getAllItems
    let dataPirate = localStorage.getItem('piratesKey');
    if (dataPirate != null) {
      let parsedData = JSON.parse(dataPirate);
      return parsedData;
    }
    return [];

  }

  async getPirateCrew(crewId: number) {
    let allData = JSON.parse(localStorage.getItem('piratesKey')!);
    let filteredData = allData.filter((object: { crewId: number; }) => {
      return object.crewId === crewId;
    })
    return filteredData;
  }


  async saveForm(pirateData: any) {

    let parsedData = localStorage.getItem('piratesKey');
    // second step parse           // third step push                                       
    this.arrayOfPirate = JSON.parse(parsedData!) || [];

    let editflag = 1;
    //Remove Redundant in case of edit
    let getIndex = this.arrayOfPirate.findIndex((object: { pirateId: number; }) => {
      return object.pirateId === pirateData.pirateId;
    })
    if (getIndex >= 0) {
      this.arrayOfPirate[getIndex] = pirateData;
      editflag = 0;
    }


    if (editflag) // third step push
      this.arrayOfPirate.push(pirateData);
    // fourth step strigyfy
    let stringPirateData = JSON.stringify(this.arrayOfPirate);
    // then set in local storage
    localStorage.setItem('piratesKey', stringPirateData);

  }

  async deletePirate(pirateId: number) {
    // filter the array just like you did in step three of saveForm    
    let allData = JSON.parse(localStorage.getItem('piratesKey')!);
    let getIndex = allData.findIndex((object: { pirateId: number; }) => {
      return object.pirateId === pirateId;
    })
    allData.splice(getIndex, 1);
    // edit and then save again 
    let stringPirateData = JSON.stringify(allData);
    localStorage.setItem('piratesKey', stringPirateData);
  }

  async deleteCrew(crewId: number) {
    // filter the array just like you did in step three of saveForm    
    let allData = JSON.parse(localStorage.getItem('piratesKey')!);
    allData = allData.filter((object: { crewId: number;}) => { return object.crewId !== crewId})
    // edit and then save again 
    let stringPirateData = JSON.stringify(allData);
    console.log("delete crew and Data pirates:  " + stringPirateData);
    localStorage.setItem('piratesKey', stringPirateData);
  }
}
