export interface Board {
    id: string;
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