export interface Reservation {
    _id: string;
    name: string;
    email: string;
    phone: string;
    people: number;
    reservationDate: Date;
    reservationSchedule: number;

}