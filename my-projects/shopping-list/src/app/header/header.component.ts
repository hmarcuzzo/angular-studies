import {Component, OnDestroy, OnInit} from "@angular/core";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromApp from "../store/app.reducer";
import {map} from "rxjs/operators";
import * as AuthActions from "../auth/store/auth.actions";
import * as RecipeActions from "../recipes/store/recipe.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
      private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.userSub = this.store
        .select('auth')
        .pipe(map(authState => {return authState.user}))
        .subscribe(user => {
          this.isAuthenticated = !!user;
        }
    );
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    // this.dataStorageService.fetchRecipes().subscribe();
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
