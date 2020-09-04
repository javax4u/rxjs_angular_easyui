import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent  } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { EasyUIModule } from 'ng-easyui';
import { EasyuiComponent } from './easyui/easyui.component';

const routes: Routes = [
  {path:'promise', component:PromiseComponent},
  {path:'easyui', component:EasyuiComponent},
  {path:'observable', component:ObservableComponent,children:[
    {path:'',component:ListComponent},
    {path:'',component:ListComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
