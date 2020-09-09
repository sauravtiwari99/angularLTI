import {Component,OnInit} from "@angular/core";

@Component({

    selector:"contact",
    templateUrl:"./contact.component.html",
    styleUrls:['./contact.component.css']
})

export class Contact implements OnInit{
    ngOnInit():void{

    }
    constructor(){

    }
    Fname: string="Saurav"
    Lname:string = "Tiwari"
    Age:number=21
    salary:number=20000000000

    
}