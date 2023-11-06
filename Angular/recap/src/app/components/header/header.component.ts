import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription | undefined

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((Value) => this.showAddTask = Value)
  }
  
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
  
  hasRoute(route: string) {
    return this.router.url === route;
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
