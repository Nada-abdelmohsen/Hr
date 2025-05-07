import { KeyValuePipe, NgClass, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { AutoFocusModule } from 'primeng/autofocus';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime, Subject } from 'rxjs';
import {
  ControlValueAccessorBase,
  provideValueAccessor
} from '../../directives/control-value-accessor.directive';

@Component({
  selector: 'hr-text-field',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    NgTemplateOutlet,
    InputNumberModule,
    TranslateModule,
    AutoFocusModule,
    KeyValuePipe,
    NgClass
  ],
  templateUrl: './text-field.component.html',
  styleUrl: 'text-field.component.scss',
  providers: [provideValueAccessor(TextFieldComponent)]
})
export class TextFieldComponent extends ControlValueAccessorBase<string> {
  @ViewChild('inputText') input?: ElementRef<HTMLInputElement>;
  @ViewChild('clearButton') clearButton?: ElementRef<HTMLAnchorElement>;

  @ContentChild('leading') leadingTemplate?: TemplateRef<unknown>;
  @ContentChild('trailing') trailingTemplate?: TemplateRef<unknown>;

  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() isDisabled = false;
  @Input() showClearButton = true;
  //only set icon or leadingTemplate, not both
  @Input() icon?: string;
  @Input() isNumber = false;
  @Input() isDecimal = false;
  @Input() maxlength: number | null = null;
  @Input() minValue?: number = -Infinity;
  @Input() maxValue?: number = Infinity;
  @Input() autoFocus = false;
  @Input() skipErrorMessage = false;
  @Input() errorType!: string;
  @Input() labelClasses?: string;
  @Input() postfix?: string;
  @Input() postfixIcon?: string;
  @Input() postfixIconWidth?: string;
  @Output() inputChange = new EventEmitter<string>();
  @Output() inputBlur = new EventEmitter<void>();
  @Output() onClear = new EventEmitter<void>();
  private inputSubject = new Subject<string>();

  constructor() {
    super();
    this.inputSubject.pipe(debounceTime(500)).subscribe((value) => {
      this.inputChange.emit(value);
    });
    this.onClear.pipe(takeUntilDestroyed()).subscribe(() => {
      if (!this.isDisabled) {
        this.value = '';
        this.inputSubject.next(this.value);
      }
    });
  }

  onInputChange(value: string): void {
    this.value = value;
    this.inputSubject.next(this.value);
  }

  onBlur(e: FocusEvent): void {
    if (e.relatedTarget !== this.clearButton?.nativeElement) {
      this.inputBlur.emit();
    }
  }

  focus(): void {
    this.input?.nativeElement?.focus();
  }
}
