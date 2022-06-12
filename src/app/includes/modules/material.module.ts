import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,

} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
    MatBadgeModule, MatButtonToggleModule, MatChipsModule, MatMenuModule, MatNativeDateModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTabsModule,
    MatExpansionModule, MatGridListModule, MatBottomSheetModule, MatTooltipModule,
    MatTreeModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatSelectModule,
    MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatPaginatorModule, MatSortModule,
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
    MatBadgeModule, MatButtonToggleModule, MatChipsModule, MatMenuModule, MatNativeDateModule,
    MatDatepickerModule, MatDialogModule, MatDividerModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTabsModule,
    MatExpansionModule, MatGridListModule, MatBottomSheetModule, MatTooltipModule,
    MatTreeModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatSelectModule,
    MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatInputModule,
    MatPaginatorModule, MatSortModule]
})
export class MaterialModule { }
