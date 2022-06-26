import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';

@Injectable({
  providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {
  constructor(public api: ApiService) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.api.user_connected = this.api.get_from_local_storage("user_connected")
    if (this.api.user_connected!=null) {
      return true
    } else {
      return false;
    }
  }

}
