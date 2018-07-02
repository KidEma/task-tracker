import { 
  Component, 
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() colors: Array<string> = [];
  @Output() selected = new EventEmitter<string>();
  isSelectorVisible: boolean = false;

  showSelector(value: boolean) {
    this.isSelectorVisible = value;
  }

  selectColor(color: string) {
    this.showSelector(false);
    this.selected.next(color);
  }

}
