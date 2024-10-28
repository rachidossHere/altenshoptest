import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ContactFormGroup } from './contact.form-group';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ContactComponent {

  constructor(private readonly toastrService: ToastrService) { }
  formGroup: FormGroup = new ContactFormGroup();
  sendMail(): void {
    if (this.formGroup.valid) {
      this.toastrService.success('Demande de contact envoyée avec succès');
      this.formGroup.reset();
    }
  }
}
