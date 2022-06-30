import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PirateCrewService {
  constructor() { }
  arrayOfPirateCrew:any = [];

  async getAllPirateCrew() {
    // then return the value / do not call the function . 
   // getAllItems
    let dataPirate = localStorage.getItem('pirateKey');
    if(dataPirate != null){
      let parsedData = JSON.parse(dataPirate);
      return parsedData;
    }
    return [];
     
   }

  async getPirateCrew(pirateCrewId: number) {
    let allData = JSON.parse(localStorage.getItem('pirateKey')!);
    let getIndex = allData.findIndex((object: { crewId: number; }) => {
      return object.crewId === pirateCrewId;
    })
    
    return allData[getIndex];
  }


  async saveForm(pirateCrewData:any) {
    
    let parsedData = localStorage.getItem('pirateKey');
     // second step parse           // third step push                                       
    this.arrayOfPirateCrew = JSON.parse(parsedData!) || [];                   
    let editflag = 1;
    //Remove Redundant in case of edit
    let getIndex = this.arrayOfPirateCrew.findIndex((object: { crewId: number; }) => {
      return object.crewId === pirateCrewData.crewId;
    })
      if(getIndex >= 0)
      {
        this.arrayOfPirateCrew[getIndex] = pirateCrewData;
        editflag = 0;
      }
    
    if(editflag) // third step push
    this.arrayOfPirateCrew.push(pirateCrewData);                       
    // fourth step strigyfy
    let stringPirateData = JSON.stringify(this.arrayOfPirateCrew);           
    // then set in local storage
    localStorage.setItem('pirateKey', stringPirateData);            
    
   }

   async deletePirateCrew(pirateCrewId:Number) { 
    // filter the array just like you did in step three of saveForm    
    let allData = JSON.parse(localStorage.getItem('pirateKey')!);
    let getIndex = allData.findIndex((object: { crewId: number; }) => {
      return object.crewId === pirateCrewId;
    })
    allData.splice(getIndex,1);
      // edit and then save again 
    let stringPirateData = JSON.stringify(allData);       
    localStorage.setItem('pirateKey', stringPirateData);
  }
}
