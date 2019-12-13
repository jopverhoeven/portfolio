// tslint:disable-next-line:max-line-length
import { MatTabsModule, MatButtonModule, MatCardModule, MatGridListModule, MatInputModule, MatToolbarModule, MatSidenavModule, MatDividerModule, MatListModule, MatProgressSpinnerModule, MatSnackBarModule, MatTooltipModule, MatSelectModule, MatChipsModule, MatMenuModule, MatDialog } from '@angular/material';
import { NgModule } from '@angular/core';

const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatSelectModule,
  MatChipsModule,
  MatTabsModule,
  MatMenuModule,
];

@NgModule({
  declarations: [],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
