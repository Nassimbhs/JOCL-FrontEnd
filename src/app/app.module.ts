import { TagInputModule } from "ngx-chips";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";
import { PopoverModule } from "ngx-bootstrap/popover";
import { TimepickerModule } from "ngx-bootstrap/timepicker";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RegisterpageComponent } from "./examples/registerpage/registerpage.component";
import { AddProjectComponent } from "./examples/addproject/addproject.component";
import { ProjectpageComponent } from "./examples/projetpage/projectpage.component";
import { LoginpageComponent } from "./examples/loginpage/loginpage.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginValidComponent } from './examples/login-valid/login-valid.component';
import { ValidateurpageComponent } from './examples/validateurpage/validateurpage.component';
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2OrderModule } from "ng2-order-pipe";
import { DetailprojetComponent } from './examples/detailprojet/detailprojet.component';
import { RegistervalidComponent } from './examples/registervalid/registervalid.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    AddProjectComponent,
    ProjectpageComponent,
    LoginpageComponent,
    NavbarComponent,
    FooterComponent,
    LoginValidComponent,
    ValidateurpageComponent,
    DetailprojetComponent,
    RegistervalidComponent
  ],
  imports: [
    NgxPaginationModule,
    Ng2OrderModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    CollapseModule.forRoot(),
    TagInputModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}