import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/shared/models/note.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-note-summary',
  templateUrl: './note-summary.component.html',
  styleUrls: ['./note-summary.component.css']
})
export class NoteSummaryComponent implements OnInit {

  @Input() note: Note;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToDetail() {
    this.router.navigate(['notes/', this.note.id]);
  }

  selectTag(tag: string) {
    this.router.navigate(['tags/', tag]);
  }

}
