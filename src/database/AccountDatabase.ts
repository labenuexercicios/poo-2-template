import { BaseDatabase } from "./BaseDatabase";
import { TAccountDB } from "../types";

//-----------classe filha --------classe pai
export class AccountDatabase extends BaseDatabase{
    public static TABLE_ACCOUNTS = "accounts"
    public async findAccounts(){
        
        const accountsDB: TAccountDB[] = await BaseDatabase
            .connection(AccountDatabase.TABLE_ACCOUNTS)

        return accountsDB
    }
}

