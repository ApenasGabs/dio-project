class Account {
  name: string;
  accountNumber: number;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("deposit completed");
  };
  withdraw = () => {
    console.log("withdraw completed");
  };
}

const newAccount: Account = new Account("Gabs", 1);
const account: Account = new Account("isadora", 2);

console.log("newAccount: ", newAccount);
account.deposit();
