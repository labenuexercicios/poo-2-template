import { TUserDB } from './../types';
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
  // atributos
  public static TABLE_USERS = "users"

  // metodos  
  async findUsers(q: string | undefined){
    let usersDB

        if (q) {
            const result: TUserDB[] = await BaseDatabase.connection("users").where("name", "LIKE", `%${q}%`)
            usersDB = result
        } else {
            const result: TUserDB[] = await BaseDatabase.connection("users")
            usersDB = result
        }
        return usersDB
  }

  public async findUsersById(id: string | undefined){
    const [ userDBExists ]: TUserDB[] | undefined[] = await BaseDatabase.connection("users").where({ id })
    return userDBExists
  }

}