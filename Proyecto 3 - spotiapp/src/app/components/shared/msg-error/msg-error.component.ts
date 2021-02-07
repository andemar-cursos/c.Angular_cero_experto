import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msg-error',
  templateUrl: './msg-error.component.html',
  styles: [
  ]
})
export class MsgErrorComponent implements OnInit {

  @Input() msgError: string;

  constructor() { }

  ngOnInit(): void {
  }

}
