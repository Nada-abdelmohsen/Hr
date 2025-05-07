/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
import {
  AfterViewInit,
  ChangeDetectorRef,
  DestroyRef,
  Directive,
  forwardRef,
  inject,
  Injector,
  Provider,
  signal,
  Type
} from '@angular/core';
import { takeUntilDestroyed, toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgModel,
  Validators
} from '@angular/forms';
import { filter, startWith, switchMap, take } from 'rxjs';
import { ARABIC_REGEX, ENGLISH_REGEX } from '../utlities/regex';

@Directive()
export abstract class ControlValueAccessorBase<T> implements ControlValueAccessor, AfterViewInit {
  private _injector = inject(Injector);
  protected destroyRef = inject(DestroyRef);
  private _cdRef = inject(ChangeDetectorRef);

  private _value: T | null = null;

  onChange: (value: T | null) => void = () => {};
  onTouched: () => void = () => {};
  disabled = false;

  control: FormControl<T> = new FormControl();
  isControlAvailable = signal(false);

  controlChange = toSignal(
    toObservable(this.isControlAvailable).pipe(
      startWith(this.isControlAvailable()),
      filter((available) => available),
      switchMap(() => this.control.valueChanges.pipe(startWith(this.control.value)))
    )
  );

  id = signal<string | number>(Math.random().toString(36).substring(2, 15));

  //make validators available in the template
  Validators = Validators;

  get value(): T | null {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }

  ngAfterViewInit() {
    const ngControl = this._injector.get(NgControl, null, {
      self: true,
      optional: true
    });
    if (!ngControl) {
      this.control.valueChanges
        .pipe(
          filter((val) => !!val),
          take(1)
        )
        .subscribe(() => {
          this.isControlAvailable.set(true);
        });
      return;
    }

    this.control = ngControl.control as FormControl<T>;
    this.isControlAvailable.set(true);

    if (ngControl.name) {
      this.id.set(ngControl.name);
    }

    if (ngControl instanceof NgModel) {
      this.control.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
        ngControl.viewToModelUpdate(this.control.value);
      });
    }
    this._cdRef.detectChanges();
  }

  writeValue(value: T): void {
    this._value = value;
  }

  registerOnChange(fn: (value: T | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  errorMessages: { [key: string]: (errorValue: any) => string } = {
    required: () => 'validations.required',
    minlength: (error) => 'validations.minLength',
    maxlength: (error) => 'validations.maxLength',
    min: (error) => 'validations.min',
    max: (error) => 'validations.max',
    invalidIban: (error) => 'validations.invalidIban',
    bannedName: (error) => error?.value || 'validations.bannedName',
    pattern: (e) => {
      if (String(e.requiredPattern) === String(ARABIC_REGEX)) return 'validations.arabic';
      if (String(e.requiredPattern) === String(ENGLISH_REGEX)) return 'validations.english';
      if (String(e.familyFundPattern) === String(ARABIC_REGEX))
        return 'validations.family-fund-arabic';

      return 'validations.pattern';
    },
    email: () => 'validations.email',
    onlySpaces: () => 'validations.onlySpaces',
    startAfterEnd: () => 'validations.startAfterEnd',
    endBeforeStart: () => 'validations.endBeforeStart'
  };

  getErrorMessage(errorKey: string, errorValue: any): string {
    const message = this.errorMessages[errorKey];
    return message ? message(errorValue) : 'validations.invalid';
  }
}

export function provideValueAccessor<T>(type: Type<T>): Provider {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}

export function provideValidator<T>(type: Type<T>): Provider {
  return {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => type),
    multi: true
  };
}
