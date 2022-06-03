import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { task } from '../model/task';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private http: HttpClient){  }

    getTaskList(): Observable<task[]>{
        return this.http.get<task[]>(`${environment.apiUrl}/api/task/list`)
        .pipe(
            catchError(this.handleError)
        );
    }

    getTask(taskId: string): Observable<task>{
        return this.http.get<task>(`${environment.apiUrl}/api/task/${taskId}`);
    }

    private handleError(error){
        let errorMsg : string;

        if( error.error instanceof ErrorEvent )
        {
            errorMsg = 'Um erro ocorreu';
        }
        else
        {
            errorMsg = 'Ocorreu um erro na requisição à API';
        }
        return throwError(errorMsg);
    }    
}