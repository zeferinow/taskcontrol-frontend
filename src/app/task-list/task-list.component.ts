import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { task } from 'src/backend/model/models'
import { TaskService } from 'src/backend/api/task.service';
import { TaskStatusName } from 'src/backend/model/TaskStatusName';

@Component({
  selector: 'app-task',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: task[];

  constructor(
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getTaskList();
  }

  getTaskList(){
    this.taskService.getTaskList().subscribe(
      tasks => {
        this.tasks = tasks;
      }
    );
  }

  public getStatusColorClass(status: string): string {
    switch (status) {
      case "Não Iniciado":
        return 'status-notstarted';
      case "Em Andamento":
        return 'status-inprogress';
      case "Aguardando":
        return 'status-waiting';
      case "Concluído":
        return 'status-concluded';
    }
  }

  taskVisualization(task){
    console.log(task);
    this.router.navigate([`task/${task.taskId}`]);
  }
}
