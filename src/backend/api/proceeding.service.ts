import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { proceedingInfo } from '../model/proceedingInfo';

@Injectable({
    providedIn: 'root'
})
export class ProceedingService {

    constructor(private http: HttpClient){  }

    async addProceeding(proceeding : any){
        await this.http.post<any>(`${environment.apiUrl}/api/task/proceeding`, proceeding).toPromise();
    }

    getProceedingList(taskId : string): Observable<proceedingInfo[]>{
        return this.http.get<proceedingInfo[]>(`${environment.apiUrl}/api/task/proceeding-list/${taskId}`);
    }
}