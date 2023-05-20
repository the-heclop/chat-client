import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'chat', component: ChatroomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
