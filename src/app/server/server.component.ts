import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;              // Not required to explicitly assign the type with TypeScript's feature, because it will infer automatically
    serverStatus: string = "offline";   // Not required to explicitly assign the type with TypeScript's feature, because it will infer automatically

    getServerStatus() {
        return this.serverStatus;
    }
}