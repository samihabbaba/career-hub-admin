import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.scss']
})
export class JobApplyComponent implements OnInit {
  rows :any=[];
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
    this.http.get(`${environment.apiUrl}job-apply`).subscribe((resp) => {
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

