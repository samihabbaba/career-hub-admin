import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-seeker',
  templateUrl: './job-seeker.component.html',
  styleUrls: ['./job-seeker.component.scss']
})
export class JobSeekerComponent implements OnInit {
  rows: any = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;
  constructor(private http: HttpClient)  {

  }

  ngOnInit(): void {
    this.getdata()
  }

  getdata() {
    this.http.get(`${environment.apiUrl}job-seeker`).subscribe((resp) => {
      console.log(resp)
      this.rows=resp
      console.log(this.rows)
      },
      error => {
        console.log("error",error)
      }
    )
  }
  deleteRow(row: any) {
    const index = this.rows.indexOf(row);
    if (index !== -1) {
      this.rows.splice(index, 1);
    }
  }

}


