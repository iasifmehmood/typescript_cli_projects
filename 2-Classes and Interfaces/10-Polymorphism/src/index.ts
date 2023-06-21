class JuicerMachine {
  constructor(protected juiceType: string) {
    this.juiceType = juiceType;
  }
  juice(): string {
    return this.juiceType;
  }
}

class MangoJuice extends JuicerMachine {
  constructor(juiceType: string) {
    super(juiceType);
  }
  override juice(): string {
    return this.juiceType;
  }
}

class AppleJuice extends JuicerMachine {
  constructor(juiceType: string) {
    super(juiceType);
  }
  override juice(): string {
    return this.juiceType;
  }
}

class BananaJuice extends JuicerMachine {
  constructor(juiceType: string) {
    super(juiceType);
  }
  override juice(): string {
    return this.juiceType;
  }
}

const mango = new MangoJuice('Mango');
const apple = new AppleJuice('Apple');
const banana = new BananaJuice('Banana');

const juiceArray = [mango, apple, banana];

for (const juice of juiceArray) {
  console.log(juice.juice() + ' Juice');
}
