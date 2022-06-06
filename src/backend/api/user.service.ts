import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { user } from '../model/user';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient){  }

    getUserList(): Observable<user[]>{
        return this.http.get<user[]>(`${environment.apiUrl}/api/user/list`)
        .pipe(
            catchError(this.handleError)
        );
    }

    getIsUserAdmin(){
        const result = this.http.get<boolean>(`${environment.apiUrl}/api/user/is-user-admin`).toPromise();
        return result;
    }

    async addUser(user : any){
        return this.http.post<any>(`${environment.apiUrl}/api/user`, user).toPromise();
    }

    async updateUser(user : any){
        return this.http.put<any>(`${environment.apiUrl}/api/user`, user).toPromise();
    }

    async deleteUser(userId : any){
        return this.http.delete<string>(`${environment.apiUrl}/api/user/${userId}`).toPromise();
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