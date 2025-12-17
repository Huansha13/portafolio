import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';
import { MssSendEmailConst } from 'src/app/core/utils/constantes';
import { SettingsService } from 'src/app/core/utils/settings.service';
import { ContactateConmigoService } from 'src/app/features/work/service/contactate-conmigo.service';

@Component({
  selector: 'app-form-contactame',
  templateUrl: './form-contactame.component.html',
  styleUrl: './form-contactame.component.scss'
})
export class FormContactameComponent {
  formContactame: FormGroup;
  maxlengthMessage = 500;
  spinnerSendEmail: boolean = false;

  constructor(
    public settings: SettingsService,
    private readonly fb: FormBuilder,
    private readonly messageService: MessageService,
    private readonly contactateConmigoService: ContactateConmigoService,
  ) { }

  ngOnInit(): void {
    this.formContactame = this.fb.group({
      nombre: ['', [Validators.required]],
      correo: ['', [Validators.required, this.emailValidator]],
      mensaje: ['', [Validators.required]]
    });
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(control.value) ? null : { invalidEmail: true };
  }

  enviar() {
    if (this.formContactame.valid) {
      this.spinnerSendEmail = true;
      this.contactateConmigoService.sendEmail(this.formContactame.value)
        .pipe(finalize(() => this.spinnerSendEmail = false))
        .subscribe({
          next: (data) => {
            if (data.markdown) {
              this.messageService.add(MssSendEmailConst['success_send_email']);
              this.ngOnInit();
            } else {
              this.messageService.add(MssSendEmailConst['error_send_email'])
            }
          },
          error: () =>  this.messageService.add(MssSendEmailConst['error_connection'])
        });
    } else {
      this.formContactame.markAllAsTouched();
      this.messageService.add(MssSendEmailConst['campos_obligatorios']);
    }
  }
}
