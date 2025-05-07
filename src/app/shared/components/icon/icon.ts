import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OverrideIconColorDirective } from '@shared/directives/override-icon-color.directive';

@Component({
  selector: 'hr-icon',
  imports: [NgClass],
  template: `<span class="hr-icon flex" [ngClass]="'hr-' + name + '-icon'">
    <img
      [src]="['assets/icons/' + name + '.svg']"
      alt=""
      [ngClass]="{
        'w-full': overrideSize,
        'h-full': overrideSize
      }"
    />
  </span>`,
  standalone: true,
  hostDirectives: [{ directive: OverrideIconColorDirective, inputs: ['overrideColor'] }]
})
export class IconComponent {
  @Input() name!: string;
  @Input() overrideSize = false;
}
