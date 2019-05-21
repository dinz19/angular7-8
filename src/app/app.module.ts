import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import{ BrowserAnimationsModule } from "@angular/platform-browser/animations";
import{ HttpClientModule } from "@angular/common/http";

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
import { NospecComponent } from './delete/nospec/nospec.component';
import { Nospec1Component } from './delete/nospec1/nospec1.component';
import { Nospec2Component } from './delete/nospec2/nospec2.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { AnimationComponent } from './animate/animation/animation.component';
import { RemoteComponent } from './restapi/remote/remote.component';

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
    ChildComponent,
    NospecComponent,
    Nospec1Component,
    Nospec2Component,
    TemplateformComponent,
    ReactiveformComponent,
    AnimationComponent,
    RemoteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
        path: 'template',
        component: TemplateformComponent
      },
      {
        path: 'reactive',
        component: ReactiveformComponent
      },
      {
        path: 'animate',
        component: AnimationComponent
      },
      {
        path: 'remote',
        component: RemoteComponent
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
