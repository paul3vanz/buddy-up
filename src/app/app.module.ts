import { AccountNavigationComponent } from "./shared/components/account-navigation/account-navigation.component";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "./core/core.module";
import { DebugComponent } from "./shared/components/debug/debug.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PageLoaderComponent } from "./shared/components/page-loader/page-loader.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccountNavigationComponent,
    PageLoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FontAwesomeModule,
    NgbModule,

    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
