import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { proceedingInfo, taskInfo } from 'src/backend';
import { TaskService } from 'src/backend/api/task.service';
import { MatDialog } from '@angular/material/dialog'
import { ProceedingRegisterComponent } from '../proceeding-register/proceeding-register.component';
import { ProceedingService } from 'src/backend/api/proceeding.service';

@Component({
  selector: 'app-task-visualization',
  templateUrl: './task-visualization.component.html',
  styleUrls: ['./task-visualization.component.scss']
})
export class TaskVisualizationComponent implements OnInit {
  editorConfig={
    toolbar: false
  }
  editorStyle={
    height: '195px',
    backgroundColor: 'white',
    borderRadius: '4px'
  }
  proceedingList: proceedingInfo[];
  task: taskInfo;
  taskForm: FormGroup;
  
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private proceedingService: ProceedingService,
    private dialogRef: MatDialog
  ) { }

  ngOnInit() {
    this.taskForm = new FormGroup({
      Title: new FormControl(''),
      Status: new FormControl(0),
      Description: new FormControl(''),
      Responsible: new FormControl(''),
      Generator: new FormControl(''),
    });

    this.subscription = this.route.paramMap.subscribe(
      params => {
        const id = params.get('id');

        this.getTask(id);
      }
    );
  }

  getTask(id: string): void {
    this.taskService.getTask(id)
      .subscribe(
        (task: taskInfo) => this.showTask(task)
      )
  }

  showTask(task: taskInfo): void{
    if(this.taskForm){
      this.taskForm.reset();
    }

    this.task = task;

    console.log(this.task)

    this.getProceedingList();

    this.taskForm.patchValue({
      Title: "#" + this.task.sequenceNumber + " - " + this.task.title,
      Status: this.task.status,
      Description: this.task.descriptionPlainText,
      Responsible: this.task.responsibleName,
      Generator: this.task.generatorName
    })
  }
  
  save(): void{
    if(this.taskForm.valid) {

    }
  }

  onSaveComplete(): void{
    this.taskForm.reset();
    this.router.navigate(['/task']);
  }

  cancel(){
    this.router.navigate(['/task']);
  }

  openProceedingRegister(){
    this.dialogRef.open(ProceedingRegisterComponent, { 
      data: this.task,
      panelClass: 'custom-dialog-container' 
    });
  }

  getProceedingList(){
    this.proceedingService.getProceedingList(this.task.taskId).subscribe(
      proceedingList => {
        this.proceedingList = proceedingList;
        console.log(this.proceedingList);
      }
    );
  }
}
