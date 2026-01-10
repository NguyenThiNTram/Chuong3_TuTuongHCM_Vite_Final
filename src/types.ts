
export interface TimelineEvent {
  year: string;
  title: string;
  content: string;
  quote?: string;
}

export interface CardContent {
  title: string;
  description: string;
  icon?: string;
}

export interface Characteristic {
  field: string;
  content: string;
}
