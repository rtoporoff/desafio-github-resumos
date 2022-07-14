import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
// import { TodoListComponent } from './pages/todo/todo-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent },
  { path: 'form', component: UserFormComponent},
  { path: 'form/:id', component: UserFormComponent},
  // { path: 'todo', component: TodoListComponent},
  { path: 'data-binding', component: DataBindingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
