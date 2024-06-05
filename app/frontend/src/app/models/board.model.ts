export interface Board {
    id: string;
    order: number;
    title: string;
    cards: {
      id: string
      title: string;
      description: string;
      label?: {
        id: string;
        title: string;
        color: string;
      }[];
    }[];
  }