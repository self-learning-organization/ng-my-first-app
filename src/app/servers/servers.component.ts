import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); // 2 seconds
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) { // By using two-way binding, I'm not calling this method anymore
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value; // Explicityly inform TypeScript that we know that the type of the HTML element of this event will be an HTML input element.
  }
}
