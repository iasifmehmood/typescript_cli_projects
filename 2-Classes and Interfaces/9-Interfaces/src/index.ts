interface IUniversity {
  deptName: string;
  display(): void;
}

class DeptDetail implements IUniversity {
  deptName: string;
  HOD: string;

  constructor(deptName: string, HOD: string) {
    this.deptName = deptName;
    this.HOD = HOD;
  }

  protected displayData() {
    console.log(this.deptName + this.HOD);
  }
  display(): void {
    this.displayData();
  }
}

const deptDetails = new DeptDetail('english', 'ASIF');

deptDetails.display();
