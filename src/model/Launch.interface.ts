interface Launch {
    name: string;
    details: string;
    flight_number: number;
    rocket: string;
    success: boolean;
    static_fire_date_utc: string;
    launchpad: string;
    date_utc: string;
    id: string;
}

export default Launch