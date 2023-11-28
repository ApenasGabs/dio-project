export abstract class DioAccount {
  private name: string;
  readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = false;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }
  setName = (name: string) => {
    this.name = name;
  };
  getName = (): string => {
    return this.name;
  };
  deposit = (): void => {
    if (this.validateStatus()) {
      console.log("deposit completed");
    }
  };
  withdraw = (): void => {
    console.log("withdraw completed");
  };
  getBalance = (): void => {
    console.log(this.balance);
  };

  private validateStatus = () => {
    if (this.status) {
      return this.status;
    }
    throw new Error();
  };
}
