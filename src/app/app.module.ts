import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ShowProjectComponent } from './components/projects/show-project/show-project.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { PreviewComponent } from './components/projects/show-project/preview/preview.component';
import { WikiComponent } from './components/projects/show-project/wiki/wiki.component';
import { ShowArticleComponent } from './components/articles/show-article/show-article.component';
import { AddArticleComponent } from './components/articles/add-article/add-article.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { InformationsComponent } from './components/configuration/informations/informations.component';
import { MembersComponent } from './components/configuration/members/members.component';
import { WikiConfigComponent } from './components/configuration/wiki-config/wiki-config.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { ShowCategoryComponent } from './components/categories/show-category/show-category.component';


registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    HomeComponent,
    AddProjectComponent,
    ShowProjectComponent,
    ArticlesComponent,
    PreviewComponent,
    WikiComponent,
    ShowArticleComponent,
    AddArticleComponent,
    ConfigurationComponent,
    InformationsComponent,
    MembersComponent,
    WikiConfigComponent,
    CategoriesComponent,
    AddCategoryComponent,
    ShowCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzTabsModule,
    NzMenuModule,
    ReactiveFormsModule,
    MatInputModule,
    NzListModule,
    NzAvatarModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }
