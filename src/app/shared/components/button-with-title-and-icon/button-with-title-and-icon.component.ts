import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'hr-button-with-title-and-icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-with-title-and-icon.component.html',
  styleUrl: './button-with-title-and-icon.component.scss'
})
export class ButtonWithTitleAndIconComponent {
  public buttonTitle = input<string>('');
  public titleClass = input<string>('text-white');
  public iconClasses = input<string>('');
  public buttonClasses = input<string>('');
  public buttonClicked = output<boolean>();

  onButtonClicked() {
    this.buttonClicked.emit(true);
  }
}
