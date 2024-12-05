import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email, ResponseEmail } from 'src/app/contact/model/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactateConmigoService {

  constructor(private readonly http: HttpClient) { }

  sendEmail(data: Email) {
    const url = 'https://magicloops.dev/api/loop/38afa96b-3921-4766-8c5b-24fc5dc2f87f/run';
    return this.http.post<ResponseEmail>(url, data);
  }
}
