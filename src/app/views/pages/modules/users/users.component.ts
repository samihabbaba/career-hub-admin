import { Component, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  rows: any = [];
  loadingIndicator = true;
  reorderable = true;
  ColumnMode = ColumnMode;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getData()
  }
  deleteRow(row: any) {
    const index = this.rows.indexOf(row);
    if (index !== -1) {
      this.rows.splice(index, 1);
    }
  }

  getData() {
    this.http.get<any>(`${environment.apiUrl}user`).subscribe(
      (resp) => {
        console.log(resp);
        this.rows = resp.filter((row:any) => row.role !=='admin')
        console.log(this.rows);
      },
      error => {
        console.log("error", error)
      }
    )
  }

}

