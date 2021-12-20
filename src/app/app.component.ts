import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CandInfoDataService} from "./service/cand-info-data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fuze-poc';
  totalAngularPackages;
  singleRecord;
  totalPages;


  constructor(private http: HttpClient, private candInfoData: CandInfoDataService) { }
  ngOnInit() {
    this.http.get<any>('http://localhost:3000/candidates').subscribe(data => {
      this.totalAngularPackages = data;
      this.totalPages = data.length;
      this.singleRecord = data[0];
    });
    this.candInfoData.getNextPrevData().subscribe(data => {
      this.http.get<any>('http://localhost:3000/candidates/'+data).subscribe(data => {
        this.candInfoData.updateContactInfoData(data);
      });
    });
  }


  onPrev(){
    this.candInfoData.updateNextPrevData(parseInt(this.singleRecord['id']) - 1);
    this.candInfoData.getContactInfoData().subscribe(data=> {
       this.singleRecord = data;
    });
  }

  OnNext(){
    this.candInfoData.updateNextPrevData(parseInt(this.singleRecord['id']) + 1);
    this.candInfoData.getContactInfoData().subscribe(data=> {
      this.singleRecord = data;
    });
  }

}
