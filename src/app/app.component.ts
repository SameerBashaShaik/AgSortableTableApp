import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Sortable Table';

    columnDefs = [
        {headerName: 'Associate', field: 'associate', sortable: true, filter: true},
        {headerName: 'Release', field: 'release', sortable: true, filter: true},
        {headerName: 'TotalStoryPoints', field: 'totalStoryPoints', sortable: true, filter: true}
    ];

    rowData: any;

    constructor(private http: HttpClient) {

    }

    ngOnInit() {
        this.rowData = this.http.get('http://localhost:8240/api/perstory/associateperrelease');
    }
}

//http://localhost:8240/api/perstory/associateperrelease

// this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');