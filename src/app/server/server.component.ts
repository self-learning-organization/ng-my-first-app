import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverId: number = 10;              // Not required to explicitly assign the type with TypeScript's feature, because it will infer automatically
    serverStatus: string = "offline";   // Not required to explicitly assign the type with TypeScript's feature, because it will infer automatically

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === "online" ? 'green' : 'red';
    }
}