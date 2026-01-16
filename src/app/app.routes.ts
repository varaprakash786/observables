import { Routes } from '@angular/router';
import { StudentinfoComponent } from './studentinfo/studentinfo.component';
import { TeacherinfoComponent } from './teacherinfo/teacherinfo.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ObservableComponent } from './observable.component';
import { Observable1Component } from './observable1.component';
import { Observable2Component } from './observable2.component';
import { Observable3Component } from './observable3.component';
import { Observable4Component } from './observable4.component';
import { Observable5Component } from './observable5.component';
import { Observable6Component } from './observable6.component';
import { Observable7Component } from './observable7.component';
import { Observable8Component } from './observable8.component';
import { Observable9Component } from './observable9.component';
import { Observable10Component } from './observable10.component';
import { Observable11Component } from './observable11.component';
import { Observable12Component } from './observable12.component';
import { Observable13Component } from './observable13.component';
import { Observable14Component } from './observable14.component';
import { Observable15Component } from './observable15.component';
import { Observable16Component } from './observable16.component';
import { Observable17Component } from './observable17.component';
import { Observable18Component } from './observable18.component';
import { Observable19Component } from './observable19.component';
import { Observable20Component } from './observable20.component';
import { Observable21Component } from './observable21.component';
import { Observable22Component } from './observable22.component';
import { Observable23Component } from './observable23.component';
import { Observable24Component } from './observable24.component';
import { Observable25Component } from './observable25.component';
import { Observable26Component } from './observable26.component';
import { Observable27Component } from './observable27.component';
import { Observable28Component } from './observable28.component';
import { Observable29Component } from './observable29.component';
import { Observable30Component } from './observable30.component';
import { Observable31Component } from './observable31.component';
import { Observable32Component } from './observable32.component';

export const routes: Routes = [
    {path: '', redirectTo: 'layout' , pathMatch: 'full' },
    {path: 'layout', loadComponent: () => 
        import('./layout/layout.component').then(m => m.LayoutComponent),
        children: [
            { path: '', redirectTo: 'stdinfo', pathMatch: 'full' },
            {path: 'stdinfo' , component: StudentinfoComponent},
            {path: 'teacherinfo' , component: TeacherinfoComponent},
            {path: 'attendance' , component: AttendanceComponent},
            {path:'obs' , component: ObservableComponent},
            {path:'obs1' , component: Observable1Component},
            {path:'obs2' , component: Observable2Component},
            {path:'obs3' , component: Observable3Component},
            {path:'obs4' , component: Observable4Component},
            {path:'obs5' , component: Observable5Component},
            {path:'obs6' , component: Observable6Component},
            {path:'obs7' , component: Observable7Component},
            {path:'obs8' , component: Observable8Component},
            {path:'obs9' , component: Observable9Component},
            {path:'obs10' , component: Observable10Component},
            {path:'obs11' , component: Observable11Component},
            {path:'obs12' , component: Observable12Component},
            {path:'obs13' , component: Observable13Component},
            {path:'obs14' , component: Observable14Component},
             {path:'obs15' , component: Observable15Component},
             {path:'obs16' , component: Observable16Component},
             {path:'obs17' , component: Observable17Component},
             {path:'obs18' , component: Observable18Component},
             {path:'obs19' , component: Observable19Component},
             {path:'obs20' , component: Observable20Component},
             {path:'obs21' , component: Observable21Component},
             {path:'obs22' , component: Observable22Component},
             {path:'obs23' , component: Observable23Component},
             {path:'obs24' , component: Observable24Component},
             {path:'obs25' , component: Observable25Component},
             {path:'obs26' , component: Observable26Component},
             {path:'obs27' , component: Observable27Component},
             {path:'obs28' , component: Observable28Component},
             {path:'obs29' , component: Observable29Component},
             {path:'obs30' , component: Observable30Component},
             {path:'obs31' , component: Observable31Component},
             {path:'obs32' , component: Observable32Component},
        ]
        
    },

];
