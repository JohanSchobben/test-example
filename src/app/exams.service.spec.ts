import { TestBed } from '@angular/core/testing';

import { ExamsService } from './exams.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {from} from "rxjs";

describe('ExamsService', () => {
  let service: ExamsService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ExamsService);
    httpClient = TestBed.inject(HttpClient);
    console.log(httpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a get call to get the exams when the data has not yet been fetched', () => {
    const spy = spyOn(httpClient, "get").and.returnValue(from([]));
    const examsUrl = "http://localhost:3000/exams";

    service.getExams().subscribe();

    expect(spy).toHaveBeenCalledOnceWith(examsUrl);
  });

  it('should should not make a call when the exams are already fetched', () => {
    const spy = spyOn(httpClient, "get").and.returnValue(from([]));

    service.getExams().subscribe();
    service.getExams().subscribe();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
