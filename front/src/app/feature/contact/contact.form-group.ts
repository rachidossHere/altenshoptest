import { FormControl, FormGroup, Validators } from "@angular/forms";

// Constantes pour les patterns
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const PHONE_PATTERN = /^[0-9]{10}$/;

export class ContactFormGroup extends FormGroup {
    constructor() {
        super({
            firstname: new FormControl('', Validators.required),
            lastname: new FormControl('', Validators.required),
            email: new FormControl('', [ Validators.required, Validators.email ]),
            phone: new FormControl('', [ Validators.required, Validators.pattern(PHONE_PATTERN) ]),
            message: new FormControl('', [Validators.required, Validators.maxLength(300)])
        });
    }
}
