import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './built-in-control-flow.component.html',
  styleUrl: './built-in-control-flow.component.scss'
})
export class BuiltInControlFlowComponent {
  loggedIn = false;
  accessLevel = 'admin';

  users: any[] = [
    { name: 'Ravi', id: 1 },
    { name: 'Omkar', id: 2 },
    { name: 'Tushar', id: 3 },
    { name: 'Vaibhav', id: 4 },
    { name: 'Rahul', id: 5 },
  ]
}
