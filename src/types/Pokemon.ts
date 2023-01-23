export type Pokemon = {
  id: number;
  name: string;
  types: object[];
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
};
