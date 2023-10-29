import { TAccountDB, TAccountDBPost } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
  public static TABLE_ACCOUNTS = "accounts"

  public async getAccounts(): Promise<TAccountDB[]> {
    const accountsDB: TAccountDB[] = await BaseDatabase
      .connection(AccountDatabase.TABLE_ACCOUNTS)

    return accountsDB
  }

  public async findAccountById(id: string): Promise<TAccountDB | undefined> {
    const [ accountDB ]: TAccountDB[] | undefined[] = await BaseDatabase
      .connection(AccountDatabase.TABLE_ACCOUNTS)
      .where({ id })

    return accountDB
  }
  public async findPostAccountById(id: string): Promise<TAccountDBPost | undefined> {
    const [ accountDB ]: TAccountDBPost[] | undefined[] = await BaseDatabase
    .connection(AccountDatabase.TABLE_ACCOUNTS)
    .where({ id })

    return accountDB
  }
  public async insertAccount(newAccountDB: TAccountDBPost): Promise<void> {
         await BaseDatabase
         .connection(AccountDatabase.TABLE_ACCOUNTS).insert(newAccountDB)

}
}
