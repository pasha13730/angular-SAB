import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DesignService } from './service/design.service';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, SidebarComponent],
  bootstrap:    [ AppComponent ],
  providers: [DesignService]
})
export class AppModule { }
