import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,
    ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  
  folderform :FormGroup
  listData: any;
submited=false;


  constructor(private fb:FormBuilder){

this.listData=[];

    this.folderform=this.fb.group({
      ftitle :['', Validators.minLength(10)],
      fcomment :['', Validators.minLength(7)]
    })
  }


  public addItem(): void{
    this.listData.push(this.folderform.value);
    this.folderform.reset();
  }




removeItem(element: any){
  this.listData.forEach((value: any, index: any)=>{
    if(value == element)
      this.listData.splice(index,1);
  });

  
}

editItem(element: any){
  this.listData.forEach((value: any, index: any)=>{
    if(value == element)
      this.folderform.enable();
  });

  
}



  ngOnInit(){

  }
}
