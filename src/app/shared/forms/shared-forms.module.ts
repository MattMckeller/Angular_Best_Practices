import {NgModule} from '@angular/core';
import {SelectInputModule} from './select-input';
import {FormLabelModule} from './form-label';
import {TextInputModule} from './text-input';
import {AutocompleteInputModule} from './autocomplete-input';

const components = [
    AutocompleteInputModule,
    FormLabelModule,
    SelectInputModule,
    TextInputModule
];

@NgModule({
    imports: [
        ...components
    ],
    exports: [
        ...components
    ]
})
export class SharedFormsModule {
}
