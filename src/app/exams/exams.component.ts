import { Component, OnInit } from '@angular/core';
import {ExamsService} from "../exams.service";
import {Exam} from "../exam";

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.css']
})
export class ExamsComponent implements OnInit {
  public exams: Exam[] = [];

  constructor(private examsService: ExamsService) { }

  ngOnInit(): void {
    this.examsService.getExams()
      .subscribe(exams => {
        this.exams = exams;
      });
    console.log("hello");
  }

}
