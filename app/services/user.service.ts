import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http'
import { userModel } from '../models/user.model'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class userService {
    constructor(private http:Http) {

    }

    login():Observable<any> {        
        return this.http.post('http://192.168.1.107:8084/User/Login', { email: 'erika.vicioso@dasigno.com', password: '123' })
        .map((re:Response) => re)
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

    userAll():Observable<userModel[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('appid', '1');
        params.set('cnt', '2');
        
        return this.http.get('http://192.168.1.107:8084/api/User/', { search: params })
        .map((re:Response) => re.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}