class University {
  constructor(private deptName: string, private HOD: string) {
    this.deptName = deptName;
    this.HOD = HOD;
  }
  get display(): string | number {
    return this.deptName + '+' + this.HOD;
  }
}

class EnglishDept extends University {
  constructor(deptName: string, HOD: string, private students: number) {
    super(deptName, HOD);
    this.students = students;
  }
  override get display() {
    return this.students + '+' + super.display;
  }
}

const englishDept = new EnglishDept('English', 'Asif', 200);

console.log(englishDept.display);
