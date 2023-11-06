import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
// import { TASKS } from 'src/app/mock-tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http: HttpClient) { }

  // getTask(): Observable<Task[]> {
  //   return of(TASKS);
  // }
  getTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url)
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, newTask, httpOptions)
  }
}