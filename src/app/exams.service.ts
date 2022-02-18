import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, switchMap, tap} from "rxjs";
import {Exam} from "./exam";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
  private subject: BehaviorSubject<Exam[]> = new BehaviorSubject<Exam[]>([]);
  private fetched: boolean = false;

  constructor(private http: HttpClient) { }

  getExams(): Observable<Exam[]> {
    if (!this.fetched) {
      this.fetched = true;
      return this.http.get<Exam[]>("http://localhost:3000/exams")
        .pipe(
          tap((exams) => {
            this.subject.next(exams);
          }),
          switchMap(() => this.subject.asObservable())
        );
    }
    return this.subject.asObservable();
  }
}
