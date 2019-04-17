import React from 'react';

export const formatUnixDate = (unixDate) => {
	var t = new Date(unixDate * 1000);
	return t.toLocaleDateString("en-US", { weekday: 'long', month: 'short', day: 'numeric' });
};

export const formatTemperature = (temperature) => {
	return Math.floor(temperature);
}

export const temperatureUnits = <span>&deg; C</span>;
