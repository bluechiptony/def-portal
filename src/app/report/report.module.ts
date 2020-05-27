import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ReportTableModule } from '../tables/report-table/report-table.module';

@NgModule({
  declarations: [ReportComponent],
  imports: [CommonModule, ReportRoutingModule, ReportTableModule],
})
export class ReportModule {}