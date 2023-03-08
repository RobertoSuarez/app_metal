import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../core/newsapi/newsapi.service';
import { ResponseNews } from '../core/newsapi/newsapi.type';

@Component({
  selector: 'app-contendio-de-interes',
  templateUrl: './contendio-de-interes.component.html',
  styleUrls: ['./contendio-de-interes.component.css']
})
export class ContendioDeInteresComponent implements OnInit {

  constructor(private newsapi: NewsapiService) { }

  noticias: ResponseNews = { articles: []}

  ngOnInit(): void {
    this.newsapi.getPregnancyArticles()
    .subscribe(data => {
      console.log(data.status)
      this.noticias = data;
    })
  }

}
