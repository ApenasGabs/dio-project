import { CompanyAccount } from "./class/CompanyAccount";
import { DioAccount } from "./class/DioAccount";
import { PeopleAccount } from "./class/PeopleAccount";

class Admin extends DioAccount {
  balance: number;
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
    this.balance = 20;
  }
  getValue = () => {
    this.balance;
    console.log("balance: ", this.balance);
  };
}

const adminAccount: DioAccount = new Admin("Gabs", 1);
const companyAccount: CompanyAccount = new CompanyAccount("Gabs", 1);

const peopleAccount: PeopleAccount = new PeopleAccount(12345, "Isadora", 2);
console.log("peopleAccount: ", peopleAccount);
peopleAccount.deposit();
