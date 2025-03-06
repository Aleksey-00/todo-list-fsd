export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoState {
  items: Todo[];
  loading: boolean;
  error: string | null;
} 