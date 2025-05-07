import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { Button } from 'primeng/button';
import { IconComponent } from '../icon/icon';
import { ButtonIconPosition, ButtonType, ButtonVariant } from './button.model';

@Component({
  selector: 'hr-button',
  standalone: true,
  imports: [Button, NgClass, IconComponent],
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        width: max-content;
      }
    `
  ]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() variant: ButtonVariant = 'primary';
  @Input() type: ButtonType = 'default';
  @Input() disabled = false;
  @Input() icon?: string;
  @Input() svgIcon?: string;
  @Input() iconClass?: string;
  @Input() orderClass?: string = '';
  @Input() iconPosition: ButtonIconPosition = 'right';
  @Input() loading = false;
  @Input() styleClass: string | undefined;
  @Input() buttonType: 'submit' | 'button' = 'button'; // Default is 'button', can be 'submit' or 'reset'
  @Input() style:
    | {
        [klass: string]: any;
      }
    | null
    | undefined;

  @Output() buttonClick = new EventEmitter<MouseEvent>();
  @Output() buttonFocus = new EventEmitter<FocusEvent>();
  @Output() buttonBlur = new EventEmitter<FocusEvent>();
}
