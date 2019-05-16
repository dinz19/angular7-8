import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RevComponent } from './review/rev/rev.component';
import { TitleComponent } from './review/title/title.component';
import { ThumbnailComponent } from './review/thumbnail/thumbnail.component';
import { DescComponent } from './review/desc/desc.component';
import { DirectiveComponent } from './super-html/directive/directive.component';
import { EmpComponent } from './employers/emp/emp.component';
import { IbuiltComponent } from './pipes/ibuilt/ibuilt.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';
import { ConsumeparentComponent } from './consume/consumeparent/consumeparent.component';
import { Consumechild1Component } from './consume/consumechild1/consumechild1.component';
import { Consumechild2Component } from './consume/consumechild2/consumechild2.component';
import { ChildComponent } from './consume/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    //EmpComponent,
    RevComponent,
    TitleComponent,
    ThumbnailComponent,
    DescComponent,
    DirectiveComponent,
    IbuiltComponent,
    BadrouteComponent,
    ConsumeparentComponent,
    Consumechild1Component,
    Consumechild2Component,
    ChildComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      /*{
        path: 'emp',
        component: EmpComponent
      },*/
      {
        path: '',
        redirectTo: 'pipes',
        pathMatch: 'full'
      },
      {
        path: 'rev',
        component: RevComponent,
        children: [
          {
            path: '',
            redirectTo: 'thumb',
            pathMatch: 'full'
          },
          {
            path: 'title',
            component: TitleComponent
          },
          {
            path: 'desc',
            component: DescComponent
          },
          {
            path: 'thumb',
            component: ThumbnailComponent
          }
        ]
      },
      {
        path: 'dir',
        component: DirectiveComponent

      },
      {
        path: 'pipes',
        component: IbuiltComponent
      },
      {
        path: 'consume',
        component: ConsumeparentComponent,
        children: [{
          path: 'child1',
          component: Consumechild1Component
        },
        {
          path: 'child2',
          component: Consumechild2Component
        }
        ]
      },
      {
        path: '**',
        component: BadrouteComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
