import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isAuthenticated: boolean = false;
  userLogged: any = {};

  formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
  })

  constructor(
    private router: Router,
    // private loginService: LoginService,
    private fb: FormBuilder,
  ) { 
  
  }

  ngOnInit(): void {
    this.createFormLogin();
  }


  createFormLogin() {
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],      
    });
  }

  login() {

    console.log(this.formLogin.value.trim());

    // this.loginService.authenticate(this.formLogin.value).subscribe(
    //   (response: any) => {

    //     if(response) {
    //       localStorage.setItem('user_logged', JSON.stringify(response));
    //       // this.get();
    //       this.getUserData();
    //     }
       
    //     // this.router.navigate(['/dashboard', this.formLogin.get('email').value.trim()]);
    //   },
      // (error) =>{
      //   if (error instanceof HttpErrorResponse && error.status === 404) {
      //     this.formBuscaCodigo.get('codigo').setErrors({ livroNaoEncontrado: true });
      //     this.formBuscaCodigo.updateValueAndValidity();       
      //   }
      //   else{
      //     this.toastr.error('Ops. Ocorreu um erro inesperado. Tente novamente mais tarde!');
      //   }
      //   this.formBuscaCodigoEnviando = false;        
      // }
    // )
  }


  getUserData() {
    this.userLogged = localStorage.getItem('user_logged');
    this.isAuthenticated = this.userLogged != null;
 }

}
