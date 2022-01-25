import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@recipes-one-rep/data';

@Component({
  selector: 'recipes-one-rep-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-user';
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
    this.fetch();
  }

  fetch() {
    this.http.get<Todo[]>('/api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    // this.todos.push({
    //   title: `New todo ${Math.floor(Math.random() * 1000)}`,
    // });
    this.http.post('/api/addTodo', {}).subscribe(() => {
      this.fetch();
    });
  }
}
