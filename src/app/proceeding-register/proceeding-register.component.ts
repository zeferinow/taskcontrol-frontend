import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ProceedingService } from 'src/backend/api/proceeding.service';
import { AlertService } from '../core/services/alert.service';

@Component({
  selector: 'app-proceeding-register',
  templateUrl: './proceeding-register.component.html',
  styleUrls: ['./proceeding-register.component.scss']
})
export class ProceedingRegisterComponent implements OnInit {

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

  addProceeding = {
    taskId: "",
    description: { Text: "", Mentions: [] },
    status: 0
  };

  taskId;
  status;
  proceedingRegisterForm: FormGroup;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private proceedingRegister: ProceedingService,
    private alertService : AlertService,
    private router : Router,
    private dialogRef: MatDialogRef<ProceedingRegisterComponent>,
  ) { this.taskId = data.taskId, this.status = data.status }

  ngOnInit() {
    this.proceedingRegisterForm = new FormGroup({
      Status: new FormControl(this.status, Validators.required),
      Description: new FormControl('', Validators.required)
    });
  }

  async onSubmit() {
    try{
      if(this.proceedingRegisterForm.valid){
        this.addProceedingValueAttribution();
        await this.proceedingRegister.addProceeding(this.addProceeding);
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
this.router.navigate([`task/${this.taskId}`]));
        this.dialogRef.close([]);
      } else {
        throw 'Favor preencher todos os campos.';
      }
    }
    catch (error) {
      this.alertService.error(error);
    }
  }

  addProceedingValueAttribution(){
    this.addProceeding.taskId = this.taskId;
    this.addProceeding.status = Number(this.proceedingRegisterForm.value.Status);
    this.addProceeding.description.Text = this.proceedingRegisterForm.value.Description;
  }
}
