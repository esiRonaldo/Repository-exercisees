import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { doc, docData, DocumentReference, Firestore, getDoc, setDoc, updateDoc, collection, addDoc, deleteDoc, collectionData, Timestamp } from  "@angular/fire/firestore";

import { Observable } from 'rxjs';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
   exercises: Exercise[]=[]
  // exercises!: Observable<any>
  constructor(private trainingService: TrainingService, private db: Firestore) { }

  ngOnInit() {
     this.exercises = this.trainingService.getAvailableExercises();
    //  let fs = collection(this.db, 'availableExercises')
     
    //  const k=collectionData(fs).subscribe(i=>console.log(i))
 
    }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
