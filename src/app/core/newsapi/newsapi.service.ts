import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseNews } from './newsapi.type';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  private apiKey: string = '32f53a4a41a44d7790a79855129a7905';

  constructor(private http: HttpClient) { }

  getPregnancyArticles() {
    return this.http.get<ResponseNews>(`https://newsapi.org/v2/everything?q=cuidado en el embarazo&apiKey=${this.apiKey}`);
  }
}
