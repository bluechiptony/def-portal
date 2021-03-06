import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { reports, Report } from 'src/app/model/report.model';

@Component({
  selector: 'app-report-collection',
  templateUrl: './report-collection.component.html',
  styleUrls: ['./report-collection.component.scss'],
})
export class ReportCollectionComponent implements OnInit {
  tableColumns: string[] = [
    'userCode',
    'fullName',
    'emailAddress',
    'phoneNumber',
    'accountType',
    'menuHolder',
  ];
  userSubscription: Subscription;
  dataSource: MatTableDataSource<Report>;
  promotions: Report[] = [];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  loading: boolean;
  hasError: boolean;
  errorMessage: string;

  constructor() {}

  ngOnInit(): void {
    this.loadDataSource(reports);
  }
  users: any[] = [];
  private paginator: MatPaginator;

  @ViewChild(MatPaginator, { static: false }) set contentPaginator(
    content: MatPaginator
  ) {
    this.paginator = content;
  }
  displayCollection: Observable<any>;

  pageNumber: any = 1;
  pageSize: any = 20;
  hasData: boolean;

  setUpPaginatorAndSorter() {
    // throw new Error("Method not implemented.");
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
    });
  }

  /**
   * Searched through dataSource collection
   * @param filter
   */
  applyFilter(filter: string) {
    if (filter.length >= 0) {
      this.dataSource.filter = filter.trim().toLowerCase();
    }
  }

  loadDataSource = (data: Report[]) => {
    this.loading = false;
    if (data.length > 0) {
      this.dataSource = new MatTableDataSource(data);
      this.hasData = true;
      this.hasError = false;
      this.displayCollection = this.dataSource.connect();
      this.setUpPaginatorAndSorter();
    } else {
      this.hasData = false;
      this.hasError = false;
    }
  };
}
