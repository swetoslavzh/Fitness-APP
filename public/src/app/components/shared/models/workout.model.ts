import { Exercise } from './exercise.model';

export interface Workout {
  routine: Array<Exercise>;
  _id: string;
  userId: string;
  name: string;
}