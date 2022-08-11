
export interface User {
  user_id:         number;
  username:        string;
  profile_picture: string;
  state:           number;
  stage_id:        number;
  colors:          string[];
  badges:          number[];
  friend_list:     any[];
  inventory:       Inventory;
  badge_objects:   BadgeObject[];
  sprite_sheet_id: number;
  auth_id:         string;
}

export interface BadgeObject {
  role_id:  number;
  display:  string;
  color:    string;
  level:    number;
  icon_url: string;
}

export interface Inventory {
  items:     Item[];
  campaigns: number[];
  energy:    number;
  mp:        number;
}

export interface Item {
  id:    number;
  stack: number;
}