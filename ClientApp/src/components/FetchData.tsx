import React, { useEffect, useState } from 'react';

interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary?: string;
};

const FetchData = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [forecasts, setForecasts] = useState<Forecast[]>([]);

    // Takes the place of componentDidMount()
    useEffect(() => {
        const populateWeatherData = async () => {
            const response = await fetch('weatherforecast');
            const data = await response.json();
            setForecasts(data);
            setLoading(false);
        }

        populateWeatherData()
    }, []);

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderForecastsTable(forecasts);

    return (
        <div>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );
}

const renderForecastsTable = (forecasts: Forecast[]) => {
    return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export { FetchData };
