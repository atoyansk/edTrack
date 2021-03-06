import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksPage } from './tasks';
import { WorksPage } from '../works/works';
import { MorePage } from '../more/more';
import { HomeworksPage } from '../homeworks/homeworks';

import { ComponentsModule } from '../../components/components.module';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    TasksPage,
    WorksPage,
    MorePage,
    HomeworksPage
  ],
  imports: [
    IonicPageModule.forChild(TasksPage),
    ComponentsModule,
    RoundProgressModule
  ],
})
export class TasksPageModule {}
