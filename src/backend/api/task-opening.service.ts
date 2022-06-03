import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TaskOpeningService {

    constructor(private http: HttpClient){  }

    async addTask(task : any){
        const taskResume = await this.http.post<any>(`${environment.apiUrl}/api/task`, task).toPromise();

        return taskResume;
    }

    getSequenceNumber(): Observable<number>{
        return this.http.get<number>(`${environment.apiUrl}/api/task/new-sequence-number`);
    }
}