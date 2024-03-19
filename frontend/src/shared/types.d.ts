type TwitchChannel = {
  data: TwitchChannelData[];
  pagination: Pagination;
}

type TwitchChannelData = {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  tag_ids: any[];
  tags: string[];
  thumbnail_url: string;
  title: string;
  started_at: Date;
}

type Pagination = {}

type Token = {
  access_token: string,
  refresh_token: string,
  expires_in: number,
  scope: string,
  token_type: string
}

export { TwitchChannel, TwitchChannelData, Pagination, Token }