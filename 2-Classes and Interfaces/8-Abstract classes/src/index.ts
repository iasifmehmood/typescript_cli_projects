abstract class University {
  abstract deptName: string;

  abstract display(): void;
}

class DeptDetail extends University {
  deptName: string;
  HOD: string;

  constructor(deptName: string, HOD: string) {
    super();
    this.deptName = deptName;
    this.HOD = HOD;
  }

  protected displayData() {
    console.log(this.deptName + this.HOD);
  }
  override display(): void {
    this.displayData();
  }
}

const deptDetails = new DeptDetail('english', 'ASIF');

deptDetails.display();

// abstract class University {
//   constructor(private deptName: string, private HOD: string) {
//     this.deptName = deptName;
//     this.HOD = HOD;
//   }
//   protected displayData() {
//     console.log(this.deptName + this.HOD);
//   }
//   display(): void {
//     console.log('base class');
//   }
// }

// class DeptDetail extends University {
//   constructor(deptName: string, HOD: string) {
//     super(deptName, HOD);
//   }
//   override display(): void {
//     this.displayData();
//   }
// }

// const deptDetails = new DeptDetail('english', 'asif');

// deptDetails.display();
