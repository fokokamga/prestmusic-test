import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMessageService {

  private response: any;
  private messages: any;

  constructor() { }

  public getAllMessages(response:any){
    return this.findMessages(response, true);
  }

  public getFirstMessage(response:any){
    return this.findMessages(response, false);
  }

  private findMessages(response:any, allMessages:boolean){
    console.log(response)
    if(this.response.status == 0 || this.response.status == 500){
      this.messages = ["Veuillez vérifier votre connexion à internet !"]
    }
    else if(this.response.status == 400 || this.response.status == 401) {
      let arr = [];
      const error = Object.values(this.response.error);
      const errorValues = Object.values(error[0]);

      for (let i = 0; i < errorValues.length; i++) {
        arr.push(errorValues[i])
      }

      this.messages = arr;
      
    } else {
      const success = Object.values(this.response);
      this.messages = Object.values(success[0]);
    }

    if(!allMessages) {
      return this.messages[0];
    } 

    return this.messages;
  }
}
