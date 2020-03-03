import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule, MatIconModule, MatSnackBarModule
} from '@angular/material';

const materialModules = [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSnackBarModule
];

@NgModule({
    imports: [...materialModules],
    exports: [...materialModules]
})

export class MaterialModule {
}
