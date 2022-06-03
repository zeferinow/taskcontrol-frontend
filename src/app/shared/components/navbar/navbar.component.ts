import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "src/backend/api/user.service";
import Swal from "sweetalert2";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    constructor(
        private router: Router,
        private userService : UserService

    ) {  }

    async ngOnInit() {
        const verification = await this.userService.getIsUserAdmin();
        console.log(verification);

        if(verification){
            document.getElementById('config').hidden = false;
        }
    }

    logoff(){
        Swal.fire({
            title: 'Sair',
            text: "Tem certeza que deseja sair da sua conta?",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#302638',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sair da conta',
            focusConfirm: false,
            focusCancel: true
          }).then((result) => {
            if (result.isConfirmed) {
                window.localStorage.clear();
                this.router.navigate(['/login']);
            }
          })
    }

    navigateToUserList(){
        this.router.navigate(['/user']);
    }
}