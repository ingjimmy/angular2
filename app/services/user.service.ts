import { Injectable } from '@angular/core'
import { userModel } from '../models/user.model'

@Injectable()
export class userService {
    getUsers():Array<userModel> {
        let array: userModel[] = [
            { id: 1, firstName: 'Jimmy', lastName: 'Rodriguez 1', email: 'ingjimmy2@gmail.com' },
            { id: 1, firstName: 'Jimmy 2', lastName: 'Rodriguez 2', email: 'ingjimmy3@gmail.com' },
            { id: 1, firstName: 'Jimmy 3', lastName: 'Rodriguez 3', email: 'ingjimmy4@gmail.com' },
            { id: 1, firstName: 'Jimmy 4', lastName: 'Rodriguez 4', email: 'ingjimmy5@gmail.comD' }
        ];

        return array;
    }
}