import { AvatarItemsService, ItemCategory, AvatarItem, BEARD_ITEMS, GLASS_ITEMS, HAT_ITEMS, HAIR_ITEMS } from './avatar-items.service';
import {Component} from '@angular/core';
import {AvatarService} from './avatar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'amelia-generator';
  ItemCategory = ItemCategory;
  BEARD_ITEMS = BEARD_ITEMS;
  HAIR_ITEMS = HAIR_ITEMS;
  GLASS_ITEMS = GLASS_ITEMS;
  HAT_ITEMS = HAT_ITEMS;
  constructor(public avatarService: AvatarService, public avatarItemsService: AvatarItemsService) {}

  onItemSelected(avaterItem: AvatarItem, category: ItemCategory) {}
}