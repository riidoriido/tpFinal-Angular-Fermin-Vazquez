import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from 'src/app/components/student-dialog/student-dialog.component';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-students-pages',
  templateUrl: './students-pages.component.html',
  styleUrls: ['./students-pages.component.scss'],
})
export class StudentsPagesComponent implements OnInit {
  students: Student[] = [
    new Student(1, 'Alexi', 'Laiho', true),
    new Student(2, 'Kobeni', 'Higashiyama', true),
    new Student(3, 'Omppu', 'Laativainen', false),
    new Student(4, 'Jeff', 'Thompson', true),
    new Student(5, 'Spencer', 'Sotelo', false),
  ];

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'isActive',
    'editar',
    'borrar',
  ];
  constructor(private readonly dialogService: MatDialog) {}

  addStudent() {
    const dialog = this.dialogService.open(StudentDialogComponent);
    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        this.students.push(
          new Student(lastId + 1, value.firstName, value.lastName, true)
        );
      }
    });
  }

  ngOnInit(): void {}
}
