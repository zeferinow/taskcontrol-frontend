import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addListener } from 'process';
import { TaskOpeningService } from 'src/backend/api/task-opening.service';
import { format } from 'url';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-task-opening',
  templateUrl: './task-opening.component.html',
  styleUrls: ['./task-opening.component.scss']
})
export class TaskOpeningComponent implements OnInit {
  
  editorStyle={
    height: '150px',
    backgroundColor: 'white',
    borderRadius: '4px'
  }

  editorConfig={
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['clean'],
      ['link', 'image']  
    ]
  }

  addTask = {
    SequenceNumber: 0,
    ResponsibleId: "",
    Status: 0,
    Title: "",
    Description: { Text: "", Mentions: [] }
  };

  taskOpeningForm: FormGroup;
  sequenceNumber: number;
  
  constructor(
    private taskOpening : TaskOpeningService,
    private alertService : AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.taskOpeningForm = new FormGroup({
      Title: new FormControl('', Validators.required),
      Status: new FormControl(0, Validators.required),
      Description: new FormControl('', Validators.required)
    });

    this.taskOpening.getSequenceNumber().subscribe(
      sequenceNumber => {
        this.sequenceNumber = sequenceNumber;
        document.getElementById('sequenceNumber').innerHTML = 'Task #'+this.sequenceNumber;
      }
    );
  }

  async onSubmit() {
    try{
      if(this.taskOpeningForm.valid){
        this.addTaskValueAttribution();
        await this.taskOpening.addTask(this.addTask);
        this.router.navigate(['task/list']);
      } else {
        throw 'Favor preencher todos os campos.';
      }
    }
    catch (error) {
      this.alertService.error(error);
    }
  }

  addTaskValueAttribution(){
    this.addTask.Title = this.taskOpeningForm.value.Title;
    this.addTask.Status = Number(this.taskOpeningForm.value.Status);
    this.addTask.SequenceNumber = this.sequenceNumber;
    this.addTask.Description.Text = this.taskOpeningForm.value.Description;
  }
}
