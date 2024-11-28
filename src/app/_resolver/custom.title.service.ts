import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GetDataService } from '../_services/get-data.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomTitleService extends TitleStrategy {
  constructor(
    private title: Title,
    private getDataService: GetDataService,
  ) {
    super();
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    // مرحله3
    // ایجاد یک custom استراتژی برای Title
    // const title = this.buildTitle(snapshot);
    // if (title) {
    //   this.title.setTitle(`App=>${title}`);
    // }

    // مرحله 4
    // ایجاد title مسیرهایی که outlet هستند
    const detailsOutlet = snapshot.root.children.find(
      (c) => c.outlet === 'detail',
    );

    let title = this.buildTitle(snapshot);
    if (title) {
      title = `${title}->${detailsOutlet?.routeConfig?.title}`;
    }
    const id = Number(snapshot.root.queryParams['id']);
    this.getDataService
      .getUser(id)
      .pipe(tap((user) => (title = `${title}->${user.name}`)))
      .subscribe();
    console.log(title);
    if (title) {
      this.title.setTitle(title);
    }
  }
}
