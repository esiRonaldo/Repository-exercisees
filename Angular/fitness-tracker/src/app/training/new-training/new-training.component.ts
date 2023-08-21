import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {
  exercises: Exercise[] = [];
  constructor(private trainingService: TrainingService, private db: Firestore) { }

  ngOnInit() {
    // this.exercises = this.trainingService.getAvailableExercises();
    let i=collection(this.db,'availableExercises')
    const item=collectionData(i).subscribe(result=>console.log(result))
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }

}
