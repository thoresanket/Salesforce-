import { LightningElement,api ,track } from 'lwc';
import getcon from '@salesforce/apex/getAccountController.getcontacts';

export default class UrlViewer extends LightningElement {

columns=[{ label: 'Id', fieldName: 'Id' },
{ label: 'LastName', fieldName: 'LastName' }];
//Since we can send only one value from Datatable we need to make a Object with 2 keys.
@api urlidobj={};

//To store name of Account.
@track name;
//To storre Id of Account.
@track id;
//To open/close modal.
@track showModal ;
//To store Contact data.
@track showConData=[];


connectedCallback() {

this.name = this.urlidobj.Name;
this.id = this.urlidobj.Id;

if(this.id){

getcon({rId: this.id}).then(data=>{
	this.showConData = data;
	console.log(JSON.stringify(data));
}).catch(error=>{
	console.log(error);
})
}

}
handleClick(){
this.showModal = true;

}
hideModalBox(){
  this.showModal = false;
}
}