import {User} from './user';
import {Salle} from './salle';

export class Reservation {
    id:number;
    start_date: Date;
    end_date: Date;
    description: string;
    other_needs: string;
    status: number;
    user: User;
    salle: Salle;
    user_id:number;
    salle_id:number;
}