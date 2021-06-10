import { Component , OnInit} from '@angular/core';
declare function loginModal(): any;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() {}

  public ngOnInit(): void {
    loginModal();
  }
}
