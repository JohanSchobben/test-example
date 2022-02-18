import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsComponent } from './exams.component';
import {ExamsService} from "../exams.service";
import {from} from "rxjs";
import {By} from "@angular/platform-browser";
import {Pipe} from "@angular/core";

@Pipe({
  name: 'amount'
})
class AmountPipeStub {
  transform (value:any) {
    return value;
  }
}

describe('ExamsComponent', () => {
  let component: ExamsComponent;
  let fixture: ComponentFixture<ExamsComponent>;
  let service: ExamsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamsComponent, AmountPipeStub ],
      providers: [
        { provide: ExamsService, useValue: {getExams: () => {
              return from([]);
            }}}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ExamsService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the exams when loading the exam data', function () {
    const spy = spyOn(service, "getExams").and.callThrough();

    component.ngOnInit();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should render a row for every exam', function () {
    component.exams = [
      {
        title: "Dutch",
        startDate: new Date(),
        duration: 40
      },
      {
        title: "English",
        startDate: new Date(),
        duration: 50
      }
    ];

    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css("tbody tr"));
    expect(rows.length).toEqual(2)
  });

  it('should show the values', function () {
    component.exams = [
      {
        title: "Dutch",
        startDate: new Date(2022, 1, 12),
        duration: 40
      },
      {
        title: "English",
        startDate: new Date(),
        duration: 50
      }
    ];

    fixture.detectChanges();

    const cells = fixture.debugElement.queryAll(By.css("tbody tr td"));
    expect(cells[0].nativeElement.textContent).toEqual("Dutch")
    expect(cells[1].nativeElement.textContent).toEqual("12-02-2022")
    expect(cells[2].nativeElement.textContent).toEqual("40")
  });
});
