import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../interfaces/LoginUsuario';
import { LoginService } from '../../servicios/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public loginForm: FormGroup;

    constructor(private logueServicio: LoginService, 
        private fb: FormBuilder,
        private router: Router) { 
        this.loginForm = new FormGroup({});
    }

    ngOnInit(): void {
        this.loginForm = this.obtenerFormulario();
    }

    private obtenerFormulario(): FormGroup {
        const group: FormGroup = this.fb.group({
			email: [ null, [Validators.required, Validators.email]],
            password: [ null, [Validators.required]]
        });

        return group;
    }

    public validarUsuario(): void {
        const credenciales: LoginUsuario = {
            email: this.email?.value,
            password: this.password?.value
        };

        this.logueServicio.verificarUsuario(credenciales)
            .subscribe(usuario => {
                if (usuario && usuario.autenticado) {
                    this.router.navigate(['/'+usuario.nombreRol.toLocaleLowerCase()+'/home']);
                } else {
                    this.router.navigate(['/login']);
                }
            });

    }

    public get email() { return this.loginForm.get('email'); }
    public get password() { return this.loginForm.get('password'); }
}
