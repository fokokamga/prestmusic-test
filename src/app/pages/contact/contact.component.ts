import { ClientService } from './../../services/client.service';
import { ContactForm } from './../../models/ContactForm.model';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  response: any;

  sending: boolean = false;
  sendingButton: string = "ENVOYER"

  constructor( private clientService: ClientService, private formBuilder: FormBuilder) {
    //this.title.setTitle("Nous contacter | AMRITA • Textile");
    //this.clientComponent.isLoading = false;
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.sendingRequest();

    const formValue = this.contactForm.value;
    const contactForm = new ContactForm(
      formValue['firstname'],
      formValue['name'],
      formValue['email'],
      null,
      null,
      null,
      null,
      formValue['message'],
    );
    this.response = null;

    /*this.clientService.contact(contactForm).subscribe(
      (success: any) => { this.response = success; this.sendingRequest(); },
      (error) => { this.response = error; this.sendingRequest(); }
    );*/

  }
  sendingRequest() {
    if (this.sending) {
      this.sending = false;
      this.sendingButton = "ENVOYER"
    } else {
      this.sending = true;
      this.sendingButton = "VEUILLEZ PATIENTEZ..."
    }
  }

}
