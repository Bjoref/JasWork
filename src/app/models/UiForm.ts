import { FormGroup } from "@angular/forms";

export interface UiFormGroup {
    'id': string;
    'labelText': string;
    'inputType': string;
    'errorText': string;
}

export interface UiForm {
    'form': FormGroup;
    'formGroupData': UiFormGroup[];
}