import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
  
  @Input() tag: string;
  @Output() selectTag: EventEmitter<string> = new EventEmitter();
  private badgeClass: string = 'badge-secondary';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.selectTag.emit(this.tag);
  }

  changeBadgeClass(event: any) {
    this.badgeClass = event.type === 'mouseover' ? 'badge-primary' : 'badge-secondary';
  }

}
