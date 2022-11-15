import Launch from "../Model/Launch";
import fetch from "./fetch";

class LaunchData {
    fetchLaunches(): Promise<Launch[]> {
        return fetch(`https://api.spacexdata.com/v5/launches`)
    }

    fetchSingleLaunch(launchId: string): Promise<Launch> {
        return fetch(`https://api.spacexdata.com/v5/launches/` + launchId)
    }
}

export default LaunchData