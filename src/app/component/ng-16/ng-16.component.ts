import { Component, computed, effect, signal } from '@angular/core';
import { InputRequiredComponent } from '../input-required/input-required.component';

@Component({
  selector: 'app-ng-16',
  standalone: true,
  imports: [InputRequiredComponent],
  templateUrl: './ng-16.component.html',
  styleUrl: './ng-16.component.scss',
})
export class Ng16Component {
  firstName = signal('Jane');
  lastName = signal('Doe');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }

  code = `
              import {
                bootstrapApplication,
                provideClientHydration,
              } from '@angular/platform-browser';
              
              ...
              
              bootstrapApplication(RootCmp, {
                providers: [provideClientHydration()]
              });
   `;

  JestCode = `
              // Install jest
              npm install jest --save-dev

              // angular.json
              {
                "projects": {
                  "my-app": {
                    "architect": {
                      "test": {
                        "builder": "@angular-devkit/build-angular:jest",
                        "options": {
                          "tsConfig": "tsconfig.spec.json",
                          "polyfills": ["zone.js", "zone.js/testing"]
                        }
                      }
                    }
                }
              }
   `;

  esbuildCode = `
   "architect": {
    "build": { 
      "builder": "@angular-devkit/build-angular:browser-esbuild",
  ...
   `;

  spsCode = `ng new --standalone`;
}
