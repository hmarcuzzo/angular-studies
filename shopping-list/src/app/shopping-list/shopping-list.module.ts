import {NgModule} from "@angular/core";
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingEditComponent} from "./shopping-edit/shopping-edit.component";
import {ShoppingListRoutingModule} from "./shopping-list-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LoggingService} from "../logging.service";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingListRoutingModule
  ],
  // providers: [LoggingService]
})
export class ShoppingListModule {}
