import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-generic-form',
  templateUrl: './generic-form.component.html',
  styleUrls: ['./generic-form.component.scss'],
})
export class GenericFormComponent {
  @Input() fields!: any[];
  @Input() title!: string;
  @Input() extraInformation!: string;
  @Output() onSubmit = new EventEmitter<void>();
}
