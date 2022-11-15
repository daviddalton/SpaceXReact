import React from 'react';
import './Dashboard.css';
import {Card, CardContent, Typography} from "@mui/material";
import LaunchData from "../Api/LaunchData";
import {useQuery} from "@tanstack/react-query";

const launchData = new LaunchData()

function Dashboard() {
    const { data, status } = useQuery(['launches'], launchData.fetchLaunches)

    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error</p>;
    if (status !== "success") {
        return null;
    }

    return (
        <div>
            <Typography variant="h2" color="text.primary">Launches</Typography>
            {data?.map((launch, index) => (
                <Card sx={{ minWidth: 275, maxWidth: 500, marginY: 2 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            FN#: {launch.flight_number}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {launch.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {launch.date_utc}
                        </Typography>
                        <Typography variant="body2">
                            {launch.details}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default Dashboard;