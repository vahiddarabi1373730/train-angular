import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteReuseStrategyService implements RouteReuseStrategy {
  private handleMap = new Map<string, DetachedRouteHandle>();

  // در این قسمت تعیین میکنیم مسیری که میخواهیم state آن حفظ شود. که اگر true برگرداند یعنی state آن مسیر برای ما مهم است
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    console.log(route);

    // state
    // مسیر
    // books
    // برای ما مهم است
    return route.routeConfig?.path === 'books';

    // state
    // هیچ مسیری برای ما مهم نیست
    // return false
  }

  // در این مرحله handle یا همان state را برای ما داخل Map حفظ میکند
  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle | null,
  ): void {
    if (route.routeConfig?.path && handle) {
      this.handleMap.set(route.routeConfig.path, handle);
    }
  }

  // در این محله تعیین میکنیم که مسیری که به آن وارد میشویم آیا state آن برای ما مهم بوده و داخل Map ذخیره شده که اگر مهم باشد داخل Map ذخیره شده و به وسیله !! true میدهد که اگر true بدهد در مرحله بعد state مورد استفاده قرار میگیرا
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return !!this.handleMap.get(route.routeConfig!.path!);
  }

  // اگر در مرحله قیل true داشتیم در این مرحله state که در Map ذخیره شده مورد استفاده قرار میگیرد
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    if (route.routeConfig?.path) {
      return this.handleMap.get(route.routeConfig.path) as DetachedRouteHandle;
    } else {
      return null;
    }
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot,
  ): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
