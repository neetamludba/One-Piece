import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RevolutionaryArmyService {

  constructor() { }

  arrayOfRevolutionaryArmy: any = [];


 async getAllRevolutionaryArmy() {
  let dataArmy = localStorage.getItem('armyKey');
    if (dataArmy != null) {
      let parsedData = JSON.parse(dataArmy);
      return parsedData;
    }
    return [];
 }

  async getRevolutionaryArmy(revolutionaryArmyId: number) {
    let allData = JSON.parse(localStorage.getItem('armyKey')!);
    let getIndex = allData.findIndex((object: { revolutionaryArmyId: number; }) => {
      return object.revolutionaryArmyId === revolutionaryArmyId;
    })

    return allData[getIndex];
  }
  async saveForm(revolutionaryArmyData: any) {
    let parsedData = localStorage.getItem('armyKey');
    // second step parse           // third step push                                       
    this.arrayOfRevolutionaryArmy = JSON.parse(parsedData!) || [];
    let editflag = 1;
    //Remove Redundant in case of edit
    let getIndex = this.arrayOfRevolutionaryArmy.findIndex((object: { revolutionaryArmyId: number; }) => {
      return object.revolutionaryArmyId === revolutionaryArmyData.revolutionaryArmyId;
    })
    if (getIndex >= 0) {
      this.arrayOfRevolutionaryArmy[getIndex] = revolutionaryArmyData;
      editflag = 0;
    }

    if (editflag) // third step push
      this.arrayOfRevolutionaryArmy.push(revolutionaryArmyData);
    // fourth step strigyfy
    let stringPirateData = JSON.stringify(this.arrayOfRevolutionaryArmy);
    // then set in local storage
    localStorage.setItem('armyKey', stringPirateData);

  }

  async deleteRevolutionaryArmy(revolutionaryArmyId: Number) {
    // filter the array just like you did in step three of saveForm    
    let allData = JSON.parse(localStorage.getItem('armyKey')!);
    let getIndex = allData.findIndex((object: { armyId: number; }) => {
      return object.armyId === revolutionaryArmyId;
    })
    allData.splice(getIndex, 1);
    // edit and then save again 
    let stringArmyData = JSON.stringify(allData);
    localStorage.setItem('armyKey', stringArmyData);
  }
}
