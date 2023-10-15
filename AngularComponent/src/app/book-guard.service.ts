import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class BookGuardService implements CanActivate {
	// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
	// 	throw new Error("Method not implemented.");
	// }

	constructor(private authService: AuthService, private router: Router) {}
		
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		// throw new Error("Method not implemented.");
		if (this.authService.isAuthenticated()) {
			return true;
		} else {
			this.router.navigate(['']);
			return false;
		}
	}

}