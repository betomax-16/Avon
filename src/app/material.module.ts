import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule} from '@angular/material/slider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
    // tslint:disable-next-line:max-line-length
    imports: [MatTooltipModule, MatTableModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatTabsModule, MatExpansionModule, MatDividerModule, MatListModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule, MatSliderModule, MatProgressBarModule],
    // tslint:disable-next-line:max-line-length
    exports: [MatTooltipModule, MatTableModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatCardModule, MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatSelectModule, MatTabsModule, MatExpansionModule, MatDividerModule, MatListModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule, MatSliderModule, MatProgressBarModule],
})

export class MaterialModule { }
