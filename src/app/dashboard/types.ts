export interface UnsplashResponse {
  id: string
  slug: string
  alternative_slugs: AlternativeSlugs
  created_at: string
  updated_at: string
  promoted_at: any
  width: number
  height: number
  color: string
  blur_hash: string
  description: any
  alt_description: string
  breadcrumbs: any[]
  urls: Urls
  links: Links
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: TopicSubmissions
  asset_type: string
  user: User
  exif: Exif
  location: Location
  meta: Meta
  public_domain: boolean
  tags: Tag[]
  views: number
  downloads: number
  topics: any[]
}

export interface AlternativeSlugs {
  en: string
  es: string
  ja: string
  fr: string
  it: string
  ko: string
  de: string
  pt: string
}

export interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

export interface Links {
  self: string
  html: string
  download: string
  download_location: string
}

export interface TopicSubmissions {
  nature: Nature
  wallpapers: Wallpapers
}

export interface Nature {
  status: string
}

export interface Wallpapers {
  status: string
}

export interface User {
  id: string
  updated_at: string
  username: string
  name: string
  first_name: string
  last_name: string
  twitter_username: any
  portfolio_url: any
  bio: string
  location: string
  links: Links2
  profile_image: ProfileImage
  instagram_username: any
  total_collections: number
  total_likes: number
  total_photos: number
  total_promoted_photos: number
  total_illustrations: number
  total_promoted_illustrations: number
  accepted_tos: boolean
  for_hire: boolean
  social: Social
}

export interface Links2 {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
  following: string
  followers: string
}

export interface ProfileImage {
  small: string
  medium: string
  large: string
}

export interface Social {
  instagram_username: any
  portfolio_url: any
  twitter_username: any
  paypal_email: any
}

export interface Exif {
  make: any
  model: any
  name: any
  exposure_time: any
  aperture: any
  focal_length: any
  iso: any
}

export interface Location {
  name: string
  city: string
  country: string
  position: Position
}

export interface Position {
  latitude: number
  longitude: number
}

export interface Meta {
  index: boolean
}

export interface Tag {
  type: string
  title: string
}
