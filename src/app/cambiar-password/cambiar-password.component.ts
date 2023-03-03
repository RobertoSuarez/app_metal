import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  updatePasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit(): void {
    this.updatePasswordForm = this.fb.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmNewPassword: ['', [Validators.required]]
    }, { validator: this.matchPassword });
  }

  matchPassword(group: FormGroup) {
    let password = group.get('newPassword').value;
    let confirmPassword = group.get('confirmNewPassword').value;

    return password === confirmPassword ? null : { notSame: true };
  }

  onSubmit() {
    const oldPassword = this.updatePasswordForm.get('oldPassword').value;
    const newPassword = this.updatePasswordForm.get('newPassword').value;
    this.userservice.updatePassword(oldPassword, newPassword)
    .subscribe({
      next: next => {
        console.log(next);
      },
      error: error => {
        console.log(error);
      }
    })
  }
}
