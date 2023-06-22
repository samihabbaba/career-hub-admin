import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
  rows : any = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;
  constructor(private http: HttpClient)  {

  }

  ngOnInit(): void {
    this.getdata()
  }
  deleteRow(row: any) {
    const index = this.rows.indexOf(row);
    if (index !== -1) {
      this.rows.splice(index, 1);
    }
  }

  getdata() {
    this.http.get(`${environment.apiUrl}job`).subscribe((resp) => {
      console.log(resp)
      this.rows=resp
      console.log(this.rows)
      },
      error => {
        console.log("error",error)
      }
    )
  }
}

