import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoList = [
    { title: 'Task1', desc: ' Task Desc', isChecked: false },
    { title: 'Task2', desc: ' Task Desc', isChecked: false },
    { title: 'Task3', desc: ' Task Desc', isChecked: false },
    { title: 'Task4', desc: ' Task Desc', isChecked: false },
    { title: 'Task5', desc: ' Task Desc', isChecked: false },
    { title: 'Task6', desc: ' Task Desc', isChecked: false },
    { title: 'Task7', desc: ' Task Desc', isChecked: true },
    {
      title: 'Task8',
      desc: ' desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2desc2',
      isChecked: true,
    },
  ];

  addItem(title: string, desc: string) {
    this.todoList.push({
      title: title,
      desc: desc,
      isChecked: false,
    });
  }

  editItem(item: any) {
    console.log('item', item);
  }

  compliteItem(item: any) {
    const index = this.todoList.findIndex((x) => x.title === item.title);
    this.todoList[index].isChecked = true;
  }

  removeItem(item: any) {
    const index = this.todoList.findIndex((x) => x.title === item.title);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }
}
