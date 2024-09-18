import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor{
  @Input() isInvalid:boolean | undefined = false
  @Input() isPassword = false
    @Input() placeholder = ''
    showPassword = false
    eyePath = 'assets/Icons/eye-slash.svg'
    constructor() {
      console.log(this.isPassword)
    }

    whatType(){
      if(!this.isPassword)
        return 'text';
      if (this.showPassword)
        return 'text';
      return 'password';
    }
    togglePasswordVisibility(){
      if(this.showPassword)
        this.eyePath = 'assets/Icons/eye-slash.svg'
      else
        this.eyePath = 'assets/Icons/eye-open.svg'

      this.showPassword = !this.showPassword;
    }
  value: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state if needed
  }

  onInput(event: any): void {
    const value = event.target.value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
  isFocused: boolean = false;

  onFocus() {
    this.isFocused = true;
  }
  onBlur() {
    this.isFocused = false;
  }
}
