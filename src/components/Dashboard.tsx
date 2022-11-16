import React from 'react';
import './Dashboard.css';
import {Card, CardContent, Grid, Typography} from "@mui/material";
import LaunchData from "../api/LaunchData";
import {useQuery} from "@tanstack/react-query";
import {format} from 'date-fns'


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
            <Grid container spacing={1} sx={{ padding: 4}}>
                {data?.map((launch, index) => (
                    <Grid item xs>
                        <Card sx={{ minWidth: 275, maxWidth: 500, marginY: 2 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    FN#: {launch.flight_number}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {launch.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {format(new Date(launch.date_utc), 'PPPPpp')}
                                </Typography>
                                <Typography variant="body2">
                                    {launch.details}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Dashboard;