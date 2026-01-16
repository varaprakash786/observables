import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, ViewChild } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCardModule } from "@angular/material/card";
import { Dataservice } from "../data.service";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from "@angular/common";
import { Demoservice } from "../services/demo.service";
import { Observable } from "rxjs";

@Component({
    selector:'app-attendance',
    imports:[MatDatepickerModule,MatInputModule,
      MatFormFieldModule,MatCardModule,MatSelectModule,CommonModule],
    templateUrl:'attendance.component.html',
    styleUrl:'attendance.component.css',
    standalone:true,
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AttendanceComponent {
  constructor(private dataSer: Dataservice,private demoService:Demoservice){}
    cls = [];
    selected! :Date;
      selectedFramework = 'Angular';
    todayDate: Date = new Date(); // The date you want to mark
    dateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  items: any;

   frameworks = ['Angular', 'React', 'Vue', 'Svelte'];
    
    ngOnInit() {
      this.demoService.getUsers().subscribe({
        next:(data) => {
          this.items = data
        },
        error: (error) => {
          console.log('This is error',error)
        }
      })
  
  }

    
}