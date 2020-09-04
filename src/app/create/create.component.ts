import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
editorConfig:any;
title:string;
content:string;

  constructor() { }

  ngOnInit(): void {
  }

  createPost(){
    // firebase.firestore().settings({
    //   timestampsInSnapshots:true
    // }); 
firebase.firestore().collection("posts").add({
  title: this.title, 
  content:this.content,
owner:firebase.auth().currentUser.uid,
created:firebase.firestore.FieldValue.serverTimestamp()

}).then((data)=>{
  console.log(data );
}).catch((error)=>{
  console.log(error);
})
  }

}
