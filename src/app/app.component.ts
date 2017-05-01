import { Component, Injectable, OnInit } from '@angular/core';

class Foo implements OnInit {
    info = 'not initialized'
    ngOnInit() {
        this.info = 'initialized'
    }
}

@Component({
    selector: 'app-root',
    template: 'App works: {{info}}',
})
export class AppComponent extends Foo {}

