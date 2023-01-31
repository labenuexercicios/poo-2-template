import { TUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    //atributos
    public static TABLE_USERS = "users"



    //metodos
    // dadosConection = BaseDatabase.connection //knex

    public async findUsers(q: string | undefined) {

        let usersDB

        if (q) {
            const result: TUserDB[] = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
                .where("name", "LIKE", `%${q}%`)
            usersDB = result
        } else {
            const result: TUserDB[] = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
            usersDB = result
        }
        return usersDB
    }

    public async findUserById(id: string | undefined): Promise <TUserDB | undefined>{
        const [ userDBExists ]: TUserDB[] | undefined[] = await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .where({ id })
        return userDBExists
    }


    public async insertUser(newUserDB: TUserDB): Promise <void>{
        await BaseDatabase
        .connection(UserDatabase.TABLE_USERS)
        .insert(newUserDB)
        
    }
}

  