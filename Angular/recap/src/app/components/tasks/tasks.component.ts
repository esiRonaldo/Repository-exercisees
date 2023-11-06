import { Subscription } from 'rxjs';
import { TaskService } from '../../services/task.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  taskSubscription: Subscription | undefined;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.taskService.getTask().subscribe(tasks => this.tasks = tasks);
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(newTask: Task) {
    this.taskService.addTask(newTask).subscribe(task => this.tasks.push(task));
  }

  ngOnDestroy() {
  }

}
