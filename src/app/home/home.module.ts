import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeroComponent } from './component/hero/hero.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { StudiesComponent } from './component/studies/studies.component';
import { CareersComponent } from './component/careers/careers.component';
import { CoursesComponent } from './component/courses/courses.component';
import { CareerComponent } from './component/career/career.component';
import { CourseComponent } from './component/course/course.component';
import { KnowledgeComponent } from './component/knowledge/knowledge.component';
import { ExperiencesComponent } from './component/experiences/experiences.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { WorksComponent } from './component/works/works.component';
import { WorkComponent } from './component/work/work.component';
import { ProjectComponent } from './component/project/project.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        NavbarComponent,
        HeroComponent,
        AboutMeComponent,
        StudiesComponent,
        CareersComponent,
        CoursesComponent,
        CareerComponent,
        CourseComponent,
        KnowledgeComponent,
        ExperiencesComponent,
        ProjectsComponent,
        WorksComponent,
        WorkComponent,
        ProjectComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HomeModule { }