import { reducer } from './reducers/index';
import { IAppState } from './app.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux: NgRedux<IAppState>,
              private devTools: DevToolsExtension) {
                let enhancers = [];

                if (devTools.isEnabled()) {
                  enhancers = [...enhancers, devTools.enhancer()];
                }

                this.ngRedux.configureStore(
                  reducer,
                  {} as IAppState,
                  [],
                  enhancers
                );
              }
 }
