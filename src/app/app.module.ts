import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DndModule } from 'ng2-dnd';
import { AppComponent } from './app.component';
import { TaskDataService } from './task-data.service';
import 'node_modules/ng2-dnd/bundles/style.css';
import { TaskCreatorComponent } from './task-creator/task-creator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { TaskStatePipe } from './task-state.pipe'


@NgModule({
  declarations: [
    AppComponent,
    TaskCreatorComponent,
    ColorPickerComponent,
    TaskStatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    DndModule.forRoot()
  ],
  providers: [TaskDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
